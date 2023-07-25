import React, { useState } from "react";
import { Link } from "react-router-dom";

type Teacher = {
    id: String;
    firstName: String;
    lastName: String;
    email: String;
    password: String;
    phone: String;
    role: String;
  };

  type TeachersListProps = {
    teachers: Teacher[];
  }

const TeachersList = ({teachers} : TeachersListProps) => {


  return (
    <div>
      <h1 className="choose-teacher-heading">Choose a teacher</h1>
      <div className="teacher-list">
        {teachers.map((teacher) => (
          <Link to={`/teachers/${teacher.id}`} style={{textDecoration: 'none', color: 'inherit'}} key={Number(teacher.id)}>
            <div className="teacher-name">
              <p>{teacher.firstName}</p>
              <b>{teacher.lastName}</b>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeachersList;
