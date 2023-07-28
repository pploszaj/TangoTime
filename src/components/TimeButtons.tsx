import React from 'react'

type TimeButtonsProps = {
    time: string;
    bookHandler: (event: any) => void;
}

const TimeButtons = ({time, bookHandler}: TimeButtonsProps) => {
  return (
    <button className='time-btn' value={time} onClick={bookHandler}>{time}</button>
  )
}

export default TimeButtons
