import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import TimeButtons from "./TimeButtons";
import { UserContext } from "../client/UserContext";

type TeacherTimesProp = {
  dayOfWeek: string;
  teacherId: string | undefined;
  date: Date;
};

const TeacherTimes = ({ dayOfWeek, teacherId, date }: TeacherTimesProp) => {
  const [times, setTimes] = useState<any>([]);
  const [bookedTime, setBookedTime] = useState("");
  const { userData } = useContext(UserContext);

  useEffect(() => {
    console.log('this is date selected from calendar: ', date)
    const getTimes = async () => {
      try {
        const response = await axios.post("/getTimes", {
          teacherId,
          dayOfWeek,
        });

        console.log("response: ", response.data);
        setTimes(response.data);
      } catch (e) {
        console.log("Error fetching times ", e);
      }
    };

    const getBookings = async () => {
      try {
        const response = await axios.post('/getBookings', {
          date
        });
        console.log('response for getBookings: ', response.data)

      } catch (e) {
        console.log(e);
      }
    }

    getTimes();
    getBookings();
  }, [date]);

  const bookHandler = (event: any) => {
    setBookedTime(event.target.value);
  };

  function convertTo24Hour(time: string) {
    let [hours, minutes] = time.split(/[:\s]/);
    let period = time.match(/AM|PM/)?.[0];

    if (period === "PM" && hours !== "12") {
      hours = (parseInt(hours) + 12).toString();
    } else if (period === "AM" && hours === "12") {
      hours = "00";
    }
    return `${hours}:${minutes}`;
  }

  const confirmBooking = async () => {
    let time24hour = convertTo24Hour(bookedTime);
    console.log("bookedTime:", bookedTime);
    console.log("time24hour:", time24hour);
    let bookedDate = new Date(`1970-01-01T${time24hour}:00Z`);
    let isoString = bookedDate.toISOString();
    let endTime = new Date(`1970-01-01T${convertTo24Hour(bookedTime)}:00Z`);
    endTime.setMinutes(endTime.getMinutes() + 45);
    let endIsoString = endTime.toISOString();

    try {
      const response = await axios.post("/booking", {
        //teacher id
        //student id
        //start time
        //booking status
        teacherId,
        studentId: userData.id,
        date,
        startDateTime: isoString,
        endDateTime: endIsoString,
      });
      console.log(response.data);

      
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  if (times.length > 0) {
    //console.log("times", times);
    const arrayOfTimes = [];
    let s = new Date(times[0].startTime);
    let e = new Date(times[0].endTime);
    console.log(s.toTimeString().slice(0, 5));
    while (s < e) {
      arrayOfTimes.push(
        s.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
      );
      s.setMinutes(s.getMinutes() + 45);
    }

    return (
      <>
        <div className="times">
          {arrayOfTimes.map((time, i) => {
            return (
              <TimeButtons
                key={i}
                time={time}
                bookHandler={bookHandler}
              ></TimeButtons>
            );
          })}
        </div>
        <div className="book-btn-container">
          <button className="book-btn" onClick={confirmBooking}>
            Book
          </button>
        </div>
      </>
    );
  } else return null;
};

export default TeacherTimes;
