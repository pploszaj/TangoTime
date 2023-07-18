import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../client/UserContext";

const SelectRole = () => {
  const [role, setRole] = useState<string>('')
  const navigate = useNavigate();
  const { userData, updateUserData } = useContext(UserContext);

  const handleSubmit = () => {
    //add role to state
    if(role){
      updateUserData({role})
      navigate('/signup')
    }
  }

  return (
    <div>
        <h1>I am a...</h1>
        <div>
            <button onClick={() => setRole('STUDENT')}>Student</button>
        </div>
        <div>
            <button onClick={() => setRole('TEACHER')}>Teacher</button>
        </div>
        <div>
            <button onClick={handleSubmit}>Continue</button>
        </div>
    </div>
  )
}

export default SelectRole;
