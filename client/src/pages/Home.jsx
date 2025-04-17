import React from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='home-container'>
        <h1>Bienvenido</h1>
        <div className='navigation-buttons'>
            <Link to="/login" className='btn btn-primary'>Comenzar</Link>
            <Link to="/register" btn className='btn btn-secondary'>Registrarse</Link>
        </div>
    </div>
  )
}

export default Home;