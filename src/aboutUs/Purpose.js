import React from 'react'
import dummy from '../home/CSS/dummy.png';


const Purpose = () => {
  const imageUrl ='https://www.shutterstock.com/shutterstock/photos/441117355/display_1500/stock-photo--d-illustration-of-a-rubber-stamp-with-the-text-high-quality-and-a-price-sticker-where-it-is-441117355.jpg';

  return (
    <div className='purpose'>
        <section>
         <h2>Our Purpose</h2>
      <p>Our mission is to offer affordable access to high-quality products, valuing nourishment and fulfillment for all. We believe in transforming lives through nourishment, spirituality, and knowledge, fostering a compassionate world. Our commitment to sustainability, inclusivity, and social impact is evident across our operations, from responsible sourcing to supporting diverse faiths. As a community united by a shared purpose, every purchase contributes to making lives better. Join us on this journey of kindness, creating a future woven with love, care, and positivity where sustenance, spirituality, and empowerment converge.</p>
        </section>
      
      <img src={imageUrl} alt="dummy" />
    </div>
  )
}

export default Purpose
