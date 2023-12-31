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
  const [previouslyBooked, setpreviouslyBooked] = useState<any>([]);
  const [bookedTime, setBookedTime] = useState("");
  const { userData } = useContext(UserContext);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isLoading, setisLoading] = useState<boolean>(true);
  const [bookingInfo, setBookingInfo] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [getTimes, getBookings] = await Promise.all([
          axios.post("/getTimes", {
            teacherId,
            dayOfWeek,
          }),
          axios.post("/getBookings", {
            date,
          }),
        ]);

        setTimes(getTimes.data);
        setpreviouslyBooked(getBookings.data);
      } catch (e) {
        console.log("error fetching data: ", e);
      }
    };

    fetchData();
    setisLoading(false);
  }, [date]);

  const bookHandler = (event: any) => {
    setBookedTime(event.target.value);
  };

  const convertTo24Hour = (time: string) => {
    let [hours, minutes] = time.split(/[:\s]/);
    let period = time.match(/AM|PM/)?.[0];

    if (period === "PM" && hours !== "12") {
      hours = (parseInt(hours) + 12).toString();
    } else if (period === "AM" && hours === "12") {
      hours = "00";
    }
    return `${hours}:${minutes}`;
  };

  const modalHandler = () => {
    setShowModal(false);
  };

  const isSlotFree = (slot: string) => {
    for (let booking of previouslyBooked) {
      let date = new Date(booking.startDateTime);

      let hours: number | string = date.getUTCHours();
      let minutes: number | string = date.getUTCMinutes();

      let suffix = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      hours = hours.toString().padStart(2, "0"); // Add leading zero if needed
      minutes = minutes.toString().padStart(2, "0"); // Add leading zero if needed

      let timeString = hours + ":" + minutes + " " + suffix;

      console.log(timeString);

      console.log(timeString);
      console.log("slot: ", slot);
      console.log("timeString: ", timeString);
      console.log(timeString === slot);
      if (timeString === slot) return false;
    }
    return true;
  };

  const dateConverter = (date: string | Date): string => {
    let convertedDate;
    if (typeof date === "string") {
      let currDate = new Date(date);
      convertedDate = currDate.toLocaleDateString("en-US");
    } else {
      convertedDate = date.toLocaleDateString("en-US");
    }
    return convertedDate;
  };

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
        teacherId,
        studentId: userData.id,
        date,
        startDateTime: isoString,
        endDateTime: endIsoString,
        bookedTime
      });
      console.log(response.data);
      setBookingInfo(response.data);
      setShowModal(true);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  if (times.length > 0) {
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
        {isLoading ? (
          <h1 className="loading">Loading...</h1>
        ) : (
          <>
            <div className="times">
              {arrayOfTimes.map((time, i) => {
                if (isSlotFree(time)) {
                  return (
                    <TimeButtons
                      key={i}
                      time={time}
                      bookHandler={bookHandler}
                    ></TimeButtons>
                  );
                } else return null;
              })}
            </div>

            <div className="book-btn-container">
              <button className="book-btn" onClick={confirmBooking}>
                Book
              </button>
            </div>
          </>
        )}
        {showModal && (
          <div className="modal-container">
            <div className="modal">
              <h1>Booking Confirmed!</h1>
              <h3>Confirmation Number: {bookingInfo.bookingId}</h3>
              <p>
                One lesson on <b>{dateConverter(date)}</b> at <b>{bookedTime}</b> with {bookingInfo.teacher.firstName} {bookingInfo.teacher.lastName}
              </p>
              <button onClick={modalHandler} className="modal-btn">
                Done
              </button>
            </div>
          </div>
        )}
      </>
    );
  } else return null;
};

export default TeacherTimes;
