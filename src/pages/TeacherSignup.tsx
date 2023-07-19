import React from 'react'
import { DesktopTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const TeacherSignup = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
    </LocalizationProvider>

    
  )
}

export default TeacherSignup;