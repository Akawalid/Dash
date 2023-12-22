import React, { useState } from 'react';
import axios from 'axios'
import validator from '../../validaitons/user_data_validator'
import '../../css/Client/RegistrationsForm.css'

const ParticipantForm = () => {
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [level, setLevel] = useState('');
  const [liErr, setLi] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validator(email, phone, firstName, name, companyName, level);
    console.log('aaaaaaaaaaaaaaaaaaa')
    if(errors.length == 0){
      setLi([]);
      await axios.post(process.env.API_URL+'/registrations', {            
        name: name, 
        last_name:firstName,
        email: email,
        telephone: phone,
        company_name: companyName,
        level: 0})
    } else {
      setLi(errors);
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        </div>
        <br />
        <div className="form-row">
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        </div>
        <br />
        <div className="form-row">
        <label>
          Company Name:
          <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        </label>
        <br />
        <label>
          Level:
          <input type="text" value={level} onChange={(e) => setLevel(e.target.value)} />
        </label>
        </div>
        <br />
        {liErr.length > 0 &&
          liErr.map(e => 
            <span style={{color: "red", margin: '5px'}}>e</span>)
        }
        <button type="submit">Submit</button>
      </form>
      <div className='pic-cont'>
        <img src='/assets/registrations.png' alt='shit' className='picture-reg'></img>
      </div>
    </div>
  );
};

export default ParticipantForm;
