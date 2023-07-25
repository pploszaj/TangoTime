import axios from "axios";
import React, { useEffect, useState } from "react";
import StudentNavBar from "../components/StudentNavBar";
import TeachersList from "../components/TeachersList";

type Teachers = {
  id: String;
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  phone: String;
  role: String;
};

const StudentHome = () => {
  const [teachers, setTeachers] = useState<Teachers[]>([]);

  useEffect(() => {
    const getTeachers = async () => {
      console.log("inside getTeachers func");
      try {
        console.log("inside try block for getteachers func");
        const response = await axios.get("/teachers");
        console.log("hello");
        console.log("response", response);
        setTeachers(response.data);
      } catch (e) {
        console.log("Error: ", e);
      }
    };

    getTeachers();
  }, []);

  return (
    <>
      <StudentNavBar />
      <TeachersList teachers={teachers} />
    </>
  );
};

export default StudentHome;
