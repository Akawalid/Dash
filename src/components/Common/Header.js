import React from "react";
import "../../css/Admin/Header.css";

function Header(){
  return(
    <div>
       <img
        src="/assets/flutter_logo.png"
        alt="flutter-logo"
        className="flutter-logo"
      />
      <h1 className="event-name">Dash Flutterfiesta 2024</h1>
    </div>
  )
}

export default Header;
