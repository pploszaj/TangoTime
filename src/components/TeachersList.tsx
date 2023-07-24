import { type } from "os";
import React from "react";

const TeachersList = (props: { teachers: any[] }) => {
  return (
    <div>
      <h1 className="choose-teacher-heading">Choose a teacher</h1>
      <div className="teacher-list">
        {props.teachers.map((teacher) => (
          <div className="teacher-name">
            <p>{teacher.firstName}</p>
            <b>{teacher.lastName}</b>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachersList;
