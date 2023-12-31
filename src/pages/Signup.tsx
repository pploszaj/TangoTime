import React, { useState, useContext } from "react";
import { UserContext } from "../client/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

export const Signup = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const [imageURL, setImageURL] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  const { userData, updateUserData } = useContext(UserContext);

  const uploadImage = async () => {
    return new Promise(async (resolve, reject) => {
      if (image === null) {
        return resolve('');
      }
      const imageRef = ref(storage, `avatars/${image?.name + v4()}`);
      try {
        await uploadBytes(imageRef, image);
        alert("Image uploaded");
        const url = await getDownloadURL(imageRef);
        console.log("this is url of image: ", url);
        setImageURL(url);
        resolve(url);
      } catch (error) {
        reject(error);
      }
    });
  };

  const handleSignup = async (e: any) => {
    e.preventDefault();
    const url = await uploadImage();
    
    try {
      console.log('in try block')
      console.log("this is imageURL in try block", url);
      const response = await axios.post("/signup", {
        firstName,
        lastName,
        email,
        password,
        phone,
        role: userData.role,
        imageURL: url,
      });
      //save user data to context
      updateUserData({
        firstName,
        lastName,
        phone,
        email,
        role: userData.role,
        id: response.data,
      });

      setError(false);

      if (userData.role === "TEACHER") {
        navigate("/teachersignup");
      } else {
        navigate("/studenthome");
      }
    } catch (error) {
      //handle error
      console.log("catch block client side", error);
      setError(true);
    }

  
  };

  const uploadHandler = (event: any) => {
    const file = event.target.files[0];
    if (file && file.type === "image/jpeg") {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="signup-form-container">
      <form className="form" onSubmit={handleSignup}>
        <input
          type="file"
          name="image"
          id="upload"
          style={{ display: "none" }}
          onChange={uploadHandler}
          accept="image/jpeg"
        />
        <label htmlFor="upload">
          <img src={imagePreview} />
        </label>
        <label htmlFor="firstName"></label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <label htmlFor="lastName"></label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <label htmlFor="email"></label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label htmlFor="phone"></label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={phone}
          required
          placeholder="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        ></input>
        <label htmlFor="password"></label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        {error && (
          <p className="error-message">
            The email address you entered is already associated with an existing
            account. If this is your email, please sign in. If not, try using
            another email address.
          </p>
        )}
        <button className="login-btn" type="submit">
          Sign Up
        </button>
        <p>
          Already have an account?{" "}
          <span className="signup-link" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
