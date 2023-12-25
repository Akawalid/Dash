import React, { useState } from 'react';
import axios from 'axios'
import validator from '../../validaitons/user_data_validator'
import '../../css/Client/flutter.css'


function ClientHomeV2() {
    const [name, setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [level, setLevel] = useState('');
    const [liErr, setLi] = useState([]);
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validator(email, phone, firstName, name, companyName, level);
      
        if (errors.length === 0) {
          setLi([]);
      
          try {
            const response = await axios.post('http://localhost:5000/api/registrations', {
              name: name,
              last_name: firstName,
              email: email,
              telephone: phone,
              company_name: companyName,
              level: 0
            });
      
            // Handle the successful response
            console.log(response.data);
          } catch (err) {
            // Handle the error
            if (err.response && err.response.status === 400) {
              setLi(['Email already exists']);
            } else {
              console.error(err);
            }
          }
        } else {
          setLi(errors);
        }
      };
      
  return(
        <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Flutter Dash</title>
        <link rel="stylesheet" href="./src/css/flutter.css" />

            <div className="page">
            {/*section 1*/}
            <div
                className="rectangle rec1"
                style={{ alignItems: "start", justifyContent: "start" }}
            >
                <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "start"
                }}
                >
                <div
                    style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "start"
                    }}
                    className="container"
                >
                    <div className="dash">
                    <h1>Dash FlutterFiesta 2024</h1>
                    </div>
                    <p className="text">
                    Get ready to witness the convergence of
            
                    innovation, inspiration, and the unmistakable
         
                    charm of Dash at "FlutterFiesta 2023"!
                    We are thrilled to welcome you to a celebration <br />
                    where the boundaries of technology Dissolve,
                    and the future unfolds with boundless
                    possibilities
                    Get ready to witness the convergence of
            
                    innovation, inspiration, and the unmistakable
        
                    charm of Dash at "FlutterFiesta 2023"!
                    We are thrilled to welcome you to a celebration <br />
                    where the boundaries of technology Dissolve,
                    and the future unfolds with boundless
                    possibilities
                    Get ready to witness the convergence of
                    
                    innovation, inspiration, and the unmistakable
        
                    charm of Dash at "FlutterFiesta 2023"!
                    We are thrilled to welcome you to a celebration <br />
                    where the boundaries of technology Dissolve,
                    and the future unfolds with boundless
                    possibilities
                    
                    </p>
                </div>
                <div style={{ height: "auto", width: "50%", minWidth: 200 }}>
                    <img src="/assets/flutter.png" alt="flutter" />
                </div>
                </div>
                <span
                className="timing"
                >
                <div className="item">
              
                    <img src="/assets/clock.svg" alt="clock" className="img1"/>
                    <p>08:30 AM</p>
                </div>
                <div className="item">
              
                    <img src="/assets/location.png" alt="location" className="img1"/>
                    <p>Esi, Oued Smar</p>
                </div>
                <div className="item">
          
                    <img src="/assets/agenda.png" alt="agenda" className="img1"/>
                    <p>01-01-2024</p>
                </div>
            </span>
            </div>
            {/*Section 2*/}
      
            {/*Section 3*/}
            {/*Use grid here */}
            <form id="target2" className="rectangle rec2" onSubmit={handleSubmit}>
                <div className="columns2" >
                    <div className="column">
                    <div className="coolinput">
                        <label htmlFor="firstName" className="text">
                        Your First Name *
                        </label>
                        <input
                        type="text"
                        
                        name="firstName"
                        className="input"
                        value={name} onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="coolinput">
                        <label htmlFor="lastName" className="text">
                        Your Last Name *
                        </label>
                        <input
                        type="text"
                        
                        name="lastName"
                        className="input"
                        value={firstName} onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="coolinput">
                        <label htmlFor="email" className="text">
                        Your Email *
                        </label>
                        <input
                        type="email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        className="input"
                        />
                    </div>
                    </div>
                    <div className="column">
                    <div className="coolinput">
                        <label htmlFor="phoneNumber" className="text">
                        Your Phone Number *
                        </label>
                        <input
                        type="tel"
                        value={phone} onChange={(e) => setPhone(e.target.value)}
                        name="phoneNumber"
                        className="input"
                        />
                    </div>
                    <div className="coolinput">
                        <label htmlFor="company" className="text">
                        Your Company *
                        </label>
                        <input
                        type="text"
                        value={companyName} onChange={(e) => setCompanyName(e.target.value)}
                        name="company"
                        className="input"
                        />
                    </div>
                    <div className="coolinput">
                        <label htmlFor="flutterExperience" className="text">
                        Your Flutter Experience Level *
                        </label>
                        <input
                        type="text"
                        value={level} onChange={(e) => setLevel(e.target.value)}
                        name="company"
                        className="input"
                        />
                    </div>
                    </div>
                    
                    <div className="flutterimg">
                        <img src="/assets/desk-flutter.png" alt="desk-flutter" />
                    </div>

                </div>
                <div className="sbmt">
                    <div style={{display:'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', marginLeft: '14%'}}>
                        <button className="btn1" type="submit">
                            SUBMIT
                        </button>
                        <div style={{display: "flex", flexDirection: "column", alignItems: 'center', width: '200px'}}>
                            {liErr.length > 0 &&liErr.map(e =>{
                                return <span key={e} style={{color: 'red', fontFamily:'RobotoC, sans-serif'}}>{e}</span>
                            })}
                        </div>
                    </div>
                </div>

            </form>
            <div className="rectangle rec3">
            <div className="by">
                <div className="byflutter">
                    <img src="/assets/byflutter.png" alt="byflutter" />
                </div>
                <p className="txtby">
                    Thank You for
                    Registering with
                    Dash FlutterFiesta
                    2024!
                </p>
            </div>
            </div>
            </div>
    
        </>

  );
}

export default ClientHomeV2;