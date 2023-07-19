import React from "react";
import { DesktopTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const TeacherSignup = () => {
    
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <h2>Mondays</h2>
        From
        <DesktopTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
        To
        <DesktopTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
        <h2>Tuesdays</h2>
        From
        <DesktopTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
        To
        <DesktopTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
        <h2>Wednesdays</h2>
        From
        <DesktopTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
        To
        <DesktopTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
        <h2>Thursdays</h2>
        From
        <DesktopTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
        To
        <DesktopTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
        <h2>Fridays</h2>
        From
        <DesktopTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
        To
        <DesktopTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
        <h2>Saturdays</h2>
        From
        <DesktopTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
        To
        <DesktopTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
        <h2>Sundays</h2>
        From
        <DesktopTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
        To
        <DesktopTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
      </LocalizationProvider>
    </>
  );
};

export default TeacherSignup;
