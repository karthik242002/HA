import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/home.css';
import logo from './CSS/logo.png';
import backgroundImage from './CSS/yugaas-logo.png';

const Home = () => {
  return (
    <div className="app-container">

      {/* <a href="#" className="link-with-background"></a> */}
      <h1 className='title one'>Hari Arunachala</h1>
      <h1 className='title two'>Nourishing Lives, Enriching Souls</h1>
      <p className='three'>we extend our warmest greetings to you. Step into a world where compassion meets quality, and spirituality meets sustenance. Our journey began with a profound vision to serve people and make a positive impact in their lives, and we are delighted to have you join us on this transformative path.</p>
      <Link to="/about"> {/* Use Link component to navigate */}
        <button className='learnmore'>Learn More</button>
      </Link>
    </div>


  );
}

export default Home;