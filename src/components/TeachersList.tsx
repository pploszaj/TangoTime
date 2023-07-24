import { color, style } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import TeacherBooking from "./TeacherBooking";

const TeachersList = (props: { teachers: any[] }) => {
  return (
    <div>
      <h1 className="choose-teacher-heading">Choose a teacher</h1>
      <div className="teacher-list">
        {props.teachers.map((teacher, index) => (
          <Link to={`/teachers/${index}`} style={{textDecoration: 'none', color: 'inherit'}}>
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
