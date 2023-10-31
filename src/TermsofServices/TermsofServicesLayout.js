import React from 'react';
import TermsOfServices from './TOScont'; 
import TOSHeader from './TOSHeader';
import TOSfooter from './TOSfooter';
import "./TOS.css";

const TermsOfServicesLayout = () => {
  return (
    <div>
    <TOSHeader></TOSHeader>
    <TermsOfServices></TermsOfServices>
    <TOSfooter></TOSfooter>
</div>
  )
}

export default TermsOfServicesLayout
