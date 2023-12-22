// ImageTextComponent.jsx

import React from 'react';
import Description from './EventPanel'
import Form from './RegistrationsForm'
import Ending from './ending'
import '../../css/Client/clinetHome.css'
const ClientHome = () => {
  return (
    <div className="client-home">
        <Description />
        <Form />
        <Ending />
    </div>
  );
};

export default ClientHome;
