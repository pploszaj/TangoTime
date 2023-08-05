import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Loader from '../components/Loader';
// import Login from "../pages/Login";
// import SelectRole from "../pages/SelectRole";
// import Signup from "../pages/Signup";
// import StudentHome from "../pages/StudentHome";
// import TeacherSignup from "../pages/TeacherSignup";
// import TeacherHome from "../pages/TeacherHome";
// import TeacherBooking from "../pages/TeacherBooking";
import { UserContext } from "./UserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Login = lazy(() => import("../pages/Login"));
const SelectRole = lazy(() => import("../pages/SelectRole"));
const Signup = lazy(() => import("../pages/Signup"));
const StudentHome = lazy(() => import("../pages/StudentHome"));
const TeacherSignup = lazy(() => import("../pages/TeacherSignup"));
const TeacherHome = lazy(() => import("../pages/TeacherHome"));
const TeacherBooking = lazy(() => import("../pages/TeacherBooking"));

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
          <Suspense fallback={<Loader/>}>
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
          </Suspense>
        </QueryClientProvider>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
