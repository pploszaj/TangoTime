import axios from "axios";
import React, { useEffect, useState } from "react";
import StudentNavBar from "../components/StudentNavBar";
import TeachersList from "../components/TeachersList";

const StudentHome = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const teachers = async () => {
      try {
        const response = await axios.get("/teachers");
        console.log("response", response);
        setTeachers(response.data);
      } catch (e) {
        console.log("Error: ", e);
      }
    };

    teachers();
  }, []);

  return (
    <>
      <StudentNavBar />
      <TeachersList teachers={teachers} />
    </>
  );
};

export default StudentHome;
