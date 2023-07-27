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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    id: "",
  });

  const updateUserData = (newData: any) => {
    setUserData((prevData) => ({ ...prevData, ...newData }));
  };

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      <Router>
        <QueryClientProvider client={client}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/role" element={<SelectRole />} />
            <Route path="/login" element={<Login />} />
            <Route path="/teachersignup" element={<TeacherSignup />} />
            <Route path="/studenthome" element={<StudentHome />} />
            <Route path="/teacherhome" element={<TeacherHome />} />
            <Route path="/teachers/:id" element={<TeacherBooking />} />
          </Routes>
        </QueryClientProvider>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
