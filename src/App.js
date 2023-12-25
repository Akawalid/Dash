// App.js

import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'; // Make sure to import BrowserRouter as Router
import AdminHome from './components/Admin/adminHome'; // Replace with the actual path to your React component
import ClientHomeV2 from './components/Client/ClientHomeV2'; // Replace with the actual path to your HTML page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminHome />} />
        <Route path="/*" element={<ClientHomeV2 />} />
      </Routes>
    </Router>
  );
}

export default App;
