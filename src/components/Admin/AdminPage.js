import React from "react";
import "../../css/Admin/AdminPage.css";
import axios from 'axios'
import sendEmail from '../../functions/send_email'
//import flutterlogo from "../images/flutter_logo.png";

function AdminPage(){
  const handleClick = async () => {
    const li = await axios.get(process.env.API_URL + '/send_emails')
    sendEmail(li, 'sent from rouji', 'guess what baby, your application has been accepted for the Flutter\'s thing.')
  }
  return(
  <div className="admin-page">
      <button className="contact-button" onClick={handleClick}>CONTACT PARTICIPANT</button>
      <img
        src="/assets/Dash.png" 
        alt="dash-piture"
        className="dash-picture"
      />
  </div>)
}

export default AdminPage;