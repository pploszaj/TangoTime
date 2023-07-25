import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useParams } from "react-router-dom";
import TeacherTimes from "./TeacherTimes";

const TeacherCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState('');
  const {id} = useParams();

  const handleDateChange = (currDate: Date) => {
    setDate(currDate);

    const dayOfWeek = currDate.getDay();
    let dayName;

    if (dayOfWeek === 0) dayName = "Sunday";
    else if (dayOfWeek === 1) dayName = "Monday";
    else if (dayOfWeek === 2) dayName = "Tuesday";
    else if (dayOfWeek === 3) dayName = "Wednesday";
    else if (dayOfWeek === 4) dayName = "Thursday";
    else if (dayOfWeek === 5) dayName = "Friday";
    else if (dayOfWeek === 6) dayName = "Saturday";
    else dayName = "Unknown";

    console.log(`Day picked is ${dayName}`);
    setDay(dayName);
  };

  return (
    <>
      <DatePicker selected={date} onChange={handleDateChange} />
      {day && <TeacherTimes dayOfWeek={day} teacherId = {id}/>}
    </>
  );
};

export default TeacherCalendar;
