import React, { useState } from "react";
import { Link } from "react-router-dom";

const TeachersList = (props: { teachers: any[] }) => {
  return (
    <div>
      <h1 className="choose-teacher-heading">Choose a teacher</h1>
      <div className="teacher-list">
        {props.teachers.map((teacher) => (
          <Link to={`/teachers/${teacher.id}`} style={{textDecoration: 'none', color: 'inherit'}} key={teacher.id}>
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
