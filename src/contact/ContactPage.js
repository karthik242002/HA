import React, { useState } from 'react';
import location from './placeholder--image@2x.png'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data submitted:', formData);
 
  };

  return (
    <div className='contact-head'>
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Our dedicated Customer Support team is here to assist you with any inquiries or assistance you may need</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" >Name:</label>
          <div className='lab-inp'>
            <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          </div>
          
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <div className='lab-inp'>
            <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          </div>
          
        </div>
        <div className="form-group">
          <label htmlFor="message" >Message:</label>
          <div className='lab-inp'>
             <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <div className='contact-loc'><img src={location} alt="" /></div>
    </div>
  );
};

export default ContactPage;