import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../client/styles.scss'

const Home = () => {
    const navigate = useNavigate();

  return (
    <div>
        <h1>LET'S DANCE</h1>
        <button className="book-me-btn"onClick={() => navigate('/login')}>Get Started</button>
    </div>
  )
}

export default Home;