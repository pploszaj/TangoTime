import React, { useState } from "react";
import { Link } from "react-router-dom";

type Teacher = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    role: string;
    imageURL: string;
  };

  type TeachersListProps = {
    teachers: Teacher[];
  }

const TeachersList = ({teachers} : TeachersListProps) => {

  return (
    <div className="teacher-list-container">
      <h1 className="choose-teacher-heading">Choose a teacher</h1>
      <div className="teacher-list">
        {teachers.map((teacher) => (
          <Link to={`/teachers/${teacher.id}`} style={{textDecoration: 'none', color: 'inherit'}} key={Number(teacher.id)}>
            <div className="teacher-name">
              <img src={teacher.imageURL}></img>
              {/* <p>{teacher.firstName}</p>
              <b>{teacher.lastName}</b> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeachersList;
