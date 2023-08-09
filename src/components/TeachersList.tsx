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
};

const TeachersList = ({ teachers }: TeachersListProps) => {
  return (
    <div className="teacher-list-container">
      <h1 className="teacher-list-heading">Pick from one of our many professionals</h1>
      <div className="teacher-list">
        {teachers.map((teacher) => (
          <Link
            to={`/teachers/${teacher.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
            key={Number(teacher.id)}
          >
            <div className="teacher-image">
              <img src={teacher.imageURL}></img>
              <div className="teacher-name">
                <p>{teacher.firstName} {teacher.lastName}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeachersList;
