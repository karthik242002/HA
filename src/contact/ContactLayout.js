import React from 'react'
import ContactPage from './ContactPage'
import ContactLogo from './ContactLogo';
import Contactinfo from './Contactinfo';
import QnA from './QnA';
import ContQuotes from './ContQuotes';
import Footer from '../aboutUs/Footer'
import '../App.css';

const ContactLayout = () => {
  return (
    <div>
      <ContactPage></ContactPage>
      <ContactLogo></ContactLogo>
      <Contactinfo></Contactinfo>
      <QnA></QnA>
      <ContQuotes></ContQuotes>
      <Footer></Footer>
    </div>
  )
}

export default ContactLayout