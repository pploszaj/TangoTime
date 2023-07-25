import React, { useEffect, useState } from "react";
import axios from "axios";

type TeacherTimesProp = {
  dayOfWeek: string;
  teacherId: string | undefined;
};

const TeacherTimes = ({dayOfWeek, teacherId}: TeacherTimesProp) => {
  const [times, setTimes] = useState<any>([]);
  useEffect(() => {
    const getTimes = async () => {
      try {
        const response = await axios.post("/getTimes", {
          teacherId,
          dayOfWeek
        });

        console.log("response: ", response.data);
        setTimes(response.data);
      } catch (e) {
        console.log("Error fetching times ", e);
      }
    };

    getTimes();
  }, [dayOfWeek]);

  if(times.length > 0){
    return (
        <div>
            {times.map((time: { startTime: string, availabilityId: string }) => {
                let date = new Date(time.startTime);
                let dateString = date.toLocaleString("en-US", { timeZone: "America/New_York", hour: '2-digit', minute: '2-digit' })
                return <h1 key={time.availabilityId}>{dateString}</h1>
            })}
        </div>
    )
  } else return null;
};

export default TeacherTimes;
