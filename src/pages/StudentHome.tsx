import React, { useEffect, useState } from "react";
import TeachersList from "../components/TeachersList";
import { useQuery } from "@tanstack/react-query";
import fetchTeachers from '../client/fetchTeachers'

type Teachers = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  imageURL: string
};

const StudentHome = () => {
  const [teachers, setTeachers] = useState<Teachers[]>([]);

  const { data, isLoading, isError } = useQuery<Teachers[]>(['getTeachers'], fetchTeachers);

  if(isLoading) {
    return <div>Loading...</div>
  }

  if(isError) {
    return <div>Error getting teachers</div>
  }
//   useEffect(() => {
//     const getTeachers = async () => {
//       console.log("inside getTeachers func");
//       try {
//         console.log("inside try block for getteachers func");
//         const response = await axios.get("/teachers");
//         console.log("hello");
//         console.log("response", response);
//         setTeachers(response.data);
//       } catch (e) {
//         console.log("Error: ", e);
//       }
//     };

//     getTeachers();
//   }, []);

  return (
      <TeachersList teachers={data} />
  );
};

export default StudentHome;
