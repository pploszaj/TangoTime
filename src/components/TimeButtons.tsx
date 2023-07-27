import React from 'react'

type TimeButtonsProps = {
    time: string;
}

const TimeButtons = ({time}: TimeButtonsProps) => {
  return (
    <button className='time-btn'>{time}</button>
  )
}

export default TimeButtons
