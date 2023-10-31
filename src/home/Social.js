import React from 'react';
import { Link } from 'react-router-dom'; 
import './CSS/Social.css';
import dummy from './CSS/dummy.png';

const Social = () => {
  const imageUrl = 'https://socialinitiative.se/wp-content/uploads/2018/08/social_logo_top-1-scaled.jpg'; 

  return (
    <div className='socialwrap-home'>
      <section className='social-home'>
        <h2>Learn More About Social Initiatives</h2>
        <p>Explore our Subsidized Food program, ensuring affordable meals for those in need. Read impact stories, understand kindness's global impact, and join our journey for a meaningful difference.</p>
        <Link to="/social-initiatives"> {/* Use Link component to navigate */}
          <button className='learnmore-home'>Learn More</button>
        </Link>

      </section>
      <section className='socialimage-home'>
        <img src={imageUrl} alt="image-home" />
      </section>
    </div>
  );
}

export default Social;
