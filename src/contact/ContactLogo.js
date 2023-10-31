import React from 'react'
import logo from '../home/CSS/logo.png'

const ContactLogo = () => {
  return (
    <div className='CL-wrap'>
      <div>
        <h5>Feel free to reach out to us through the following channels:</h5>
      </div>
      <div className='CL-right'>
        <img src={logo} alt="logo" />
        <p>Nourishing Lives, Enriching Souls</p>
      </div>
    </div>
  )
}

export default ContactLogo