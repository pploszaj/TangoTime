import React from 'react'
import { useParams } from 'react-router-dom'
import TeacherCalendar from '../components/TeacherCalendar';
import "react-datepicker/dist/react-datepicker.css";

const TeacherBooking = () => {
    const {id} = useParams();

  return (
    <div>
        <h2>Teacher ID: {id}</h2>
        <TeacherCalendar/>
    </div>
  )
}

export default TeacherBooking
