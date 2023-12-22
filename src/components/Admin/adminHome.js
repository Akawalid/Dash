import React from "react";
import ReactDom from "react-dom"
import Header from '../Common/Header.js'
import AdminPage from './AdminPage';
import "../../css/Admin/AdminHome.css";

function AdminHome() {
    return(
    <div className="admin-home">
       <Header/>
       <AdminPage/>
    </div>)
  }
  
  export default AdminHome;