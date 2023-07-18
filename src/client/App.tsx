import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SelectRole from "../pages/SelectRole";
import Signup from "../pages/Signup";
import { UserContext } from "./UserContext";

function App() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
  });

  const updateUserData = (newData: any) => {
    setUserData(prevData => ({...prevData, ...newData}))
  }

  return (
    <UserContext.Provider value={{userData, updateUserData}}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/role" element={<SelectRole />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
