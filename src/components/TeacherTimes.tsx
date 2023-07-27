import React, { useEffect, useState } from "react";
import axios from "axios";
import TimeButtons from "./TimeButtons";

type TeacherTimesProp = {
  dayOfWeek: string;
  teacherId: string | undefined;
};

const TeacherTimes = ({ dayOfWeek, teacherId }: TeacherTimesProp) => {
  const [times, setTimes] = useState<any>([]);
  useEffect(() => {
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

    getTimes();
  }, [dayOfWeek]);

  if (times.length > 0) {
    console.log("times", times);
    let s = new Date(times[0].startTime);
    let e = new Date(times[0].endTime);
    console.log(s.toTimeString().slice(0, 5));
    const arrayOfTimes = [];
    while (s < e) {
      arrayOfTimes.push(
        s.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
      );
      s.setMinutes(s.getMinutes() + 45);
    }

    return (
      <div className="times">
        {arrayOfTimes.map((time, i) => {
          return <TimeButtons key={i} time={time}></TimeButtons>;
        })}
      </div>
    );
  } else return null;
};

export default TeacherTimes;
