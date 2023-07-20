import React, { useEffect, useState, useContext } from "react";
import { DesktopTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import { UserContext } from "../client/UserContext";
import { useNavigate } from "react-router-dom";

const TeacherSignup = () => {
  const [mondayStart, setMondayStart] = useState<any>("");
  const [mondayEnd, setMondayEnd] = useState<any>("");
  const [tuesdayStart, setTuesdayStart] = useState<any>("");
  const [tuesdayEnd, setTuesdayEnd] = useState<any>("");
  const [wednesdayStart, setWednesdayStart] = useState<any>("");
  const [wednesdayEnd, setWednesdayEnd] = useState<any>("");
  const [thursdayStart, setThursdayStart] = useState<any>("");
  const [thursdayEnd, setThursdayEnd] = useState<any>("");
  const [fridayStart, setFridayStart] = useState<any>("");
  const [fridayEnd, setFridayEnd] = useState<any>("");
  const [saturdayStart, setSaturdayStart] = useState<any>("");
  const [saturdayEnd, setSaturdayEnd] = useState<any>("");
  const [sundayStart, setSundayStart] = useState<any>("");
  const [sundayEnd, setSundayEnd] = useState<any>("");
  const { userData, updateUserData } = useContext(UserContext);
  const teacherId = userData.id;
  const navigate = useNavigate();


  const handleButton = async () => {
    //fetch post request to save data to databse
    //you can send all this data at once
    //prisma.createMany on server side
    const schedule = [
      {
        dayOfWeek: "Monday",
        startTime: mondayStart.toDate(), // convert to JavaScript Date object
        endTime: mondayEnd.toDate(), // convert to JavaScript Date object
        teacherId: teacherId, // Add teacherId
        availabilityStatus: "AVAILABLE",
      },
      {
        dayOfWeek: "Tuesday",
        startTime: tuesdayStart.toDate(), // convert to JavaScript Date object
        endTime: tuesdayEnd.toDate(),
        teacherId: teacherId, // Add teacherId
        availabilityStatus: "AVAILABLE", // convert to JavaScript Date object
      },
      {
        dayOfWeek: "Wednesday",
        startTime: wednesdayStart === "" ? wednesdayStart : wednesdayStart.toDate(), // convert to JavaScript Date object
        endTime: wednesdayStart === "" ? wednesdayStart : wednesdayEnd.toDate(),
        teacherId: teacherId, // Add teacherId
        availabilityStatus: "AVAILABLE", // convert to JavaScript Date object
      },
      {
        dayOfWeek: "Thursday",
        startTime: thursdayStart === "" ? thursdayStart : thursdayStart.toDate(), // convert to JavaScript Date object
        endTime: thursdayEnd === "" ? thursdayEnd : thursdayEnd.toDate(),
        teacherId: teacherId, // Add teacherId
        availabilityStatus: "AVAILABLE", // convert to JavaScript Date object
      },
      {
        dayOfWeek: "Friday",
        startTime: fridayStart.toDate(), // convert to JavaScript Date object
        endTime: fridayEnd.toDate(),
        teacherId: teacherId, // Add teacherId
        availabilityStatus: "AVAILABLE", // convert to JavaScript Date object
      },
      {
        dayOfWeek: "Saturday",
        startTime: saturdayStart.toDate(), // convert to JavaScript Date object
        endTime: saturdayEnd.toDate(),
        teacherId: teacherId, // Add teacherId
        availabilityStatus: "AVAILABLE", // convert to JavaScript Date object
      },
      {
        dayOfWeek: "Sunday",
        startTime: sundayStart.toDate(), // convert to JavaScript Date object
        endTime: sundayEnd.toDate(),
        teacherId: teacherId, // Add teacherId
        availabilityStatus: "AVAILABLE", // convert to JavaScript Date object
      },
    ];
    try {
      const response = await axios.post("/teacherschedule", schedule);
      console.log(response.data);
      navigate('/teacherhome')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <h2>Mondays</h2>
        From
        <DesktopTimePicker
          value={mondayStart}
          onChange={(newVal) => setMondayStart(newVal)}
        />
        To
        <DesktopTimePicker
          value={mondayEnd}
          onChange={(newVal) => setMondayEnd(newVal)}
        />
        <h2>Tuesdays</h2>
        From
        <DesktopTimePicker
          value={tuesdayStart}
          onChange={(newVal) => setTuesdayStart(newVal)}
        />
        To
        <DesktopTimePicker
          value={tuesdayEnd}
          onChange={(newVal) => setTuesdayEnd(newVal)}
        />
        <h2>Wednesdays</h2>
        From
        <DesktopTimePicker
          value={wednesdayStart}
          onChange={(newVal) => setWednesdayStart(newVal)}
        />
        To
        <DesktopTimePicker
          value={wednesdayEnd}
          onChange={(newVal) => setWednesdayEnd(newVal)}
        />
        <h2>Thursdays</h2>
        From
        <DesktopTimePicker
          value={thursdayStart}
          onChange={(newVal) => setThursdayStart(newVal)}
        />
        To
        <DesktopTimePicker
          value={thursdayEnd}
          onChange={(newVal) => setThursdayEnd(newVal)}
        />
        <h2>Fridays</h2>
        From
        <DesktopTimePicker
          value={fridayStart}
          onChange={(newVal) => setFridayStart(newVal)}
        />
        To
        <DesktopTimePicker
          value={fridayEnd}
          onChange={(newVal) => setFridayEnd(newVal)}
        />
        <h2>Saturdays</h2>
        From
        <DesktopTimePicker
          value={saturdayStart}
          onChange={(newVal) => setSaturdayStart(newVal)}
        />
        To
        <DesktopTimePicker
          value={saturdayEnd}
          onChange={(newVal) => setSaturdayEnd(newVal)}
        />
        <h2>Sundays</h2>
        From
        <DesktopTimePicker
          value={sundayStart}
          onChange={(newVal) => setSundayStart(newVal)}
        />
        To
        <DesktopTimePicker
          value={sundayEnd}
          onChange={(newVal) => setSundayEnd(newVal)}
        />
      </LocalizationProvider>

      <button type="button" onClick={handleButton}>
        Save
      </button>
    </>
  );
};

export default TeacherSignup;
