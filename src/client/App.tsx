import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SelectRole from "../pages/SelectRole";
import Signup from "../pages/Signup";
import StudentHome from "../pages/StudentHome";
import TeacherSignup from "../pages/TeacherSignup";
import TeacherHome from "../pages/TeacherHome";
import { UserContext } from "./UserContext";
import TeacherBooking from "../pages/TeacherBooking";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

function App() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    id: ""
  });

  const updateUserData = (newData: any) => {
    setUserData(prevData => ({...prevData, ...newData}))
  }

  const client = new QueryClient();

  return (
    <UserContext.Provider value={{userData, updateUserData}}>
      <QueryClientProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/role" element={<SelectRole />} />
          <Route path="/login" element={<Login />} />
          <Route path="/teachersignup" element={<TeacherSignup/>}/>
          <Route path="/studenthome" element={<StudentHome/>}/>
          <Route path="/teacherhome" element={<TeacherHome/>}/>
          <Route path="/teachers/:id" element={<TeacherBooking/>}/>
        </Routes>
      </Router>
      </QueryClientProvider>
    </UserContext.Provider>
  );
}

export default App;
