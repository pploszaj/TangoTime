import { type } from 'os'
import React from 'react'



const TeachersList= (props: { teachers: any[] }) => {
  return (
    <div>
        <h1>Choose a teacher</h1>
        {props.teachers.map((teacher) => (
            <h1>{teacher.firstName + ' ' + teacher.lastName}</h1>
        ))}
    </div>
  )
}

export default TeachersList