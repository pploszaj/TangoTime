import React, { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const TeachersImages = () => {
  const [imageList, setimageList] = useState<string[]>([]);
  const imageListRef = ref(storage, "avatars/");
  useEffect(() => {
    const getImages = async () => {
      const response = await listAll(imageListRef);
      console.log(response);
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setimageList((prev) => [...prev, url]);
        });
      });
    };
    getImages();
  }, []);

  return (
    <div className="images">
      {imageList &&
        imageList.map((image) => {
          return <img className='teacher-image-home'src={image}></img>;
        })}
    </div>
  );
};

export default TeachersImages;
