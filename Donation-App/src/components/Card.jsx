import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Card.css';
import markerIcon1 from '../assets/markerIcon1.png'
import { useLocation } from 'react-router-dom';



function Card({ data }) {
  const {id, category, image, title, description, attributes } = data;
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const userType = new URLSearchParams(location.search).get('userType');

  // State to manage the input value
  const [inputValue, setInputValue] = useState(0);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setInputValue(value > attributes.count ? attributes.count : value);
  };



  const handleDonateClick = () => {
    // Close the modal
    setShowModal(false);
  
    // Redirect only if inputValue is greater than 0
    if (inputValue > 0) {
      let redirectUrl = '/Transportation';
      if (userType) {
        redirectUrl += `?userType=${userType}`;
      }
      // Redirect to the constructed URL
      window.location.href = redirectUrl;
    } else {
      // Show an alert indicating that the donation amount should be greater than 0
      alert('Please enter a donation amount greater than 0.');
    }
  };
  const generateURL = (id) => {
    // Define your URL patterns based on card IDs
    const urlMap = {
      9: 'https://www.google.com/maps/place/Air+Force+Specialized+Hospital/@30.0175187,31.4341446,15z/data=!4m6!3m5!1s0x14583cd75153e123:0xd6d98616e2c385f7!8m2!3d30.0175187!4d31.4341446!16s%2Fg%2F11b5wl4hdk?entry=ttu',
      19: 'https://www.google.com/maps/place/As-Salam+International+Hospital/@30.0074928,31.4109687,15z/data=!4m10!1m2!2m1!1shospitals!3m6!1s0x14583cc14cc7bc5d:0x4ecacb256c01c377!8m2!3d30.0074928!4d31.4284478!15sCglob3NwaXRhbHNaCyIJaG9zcGl0YWxzkgEIaG9zcGl0YWyaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTTVNRWxEVldOUkVBReABAA!16s%2Fg%2F11c6qrtmj3?entry=ttu',
      20: 'https://www.google.com/search?sca_esv=57708bdfdc131420&rlz=1C1GCEA_enEG1054EG1054&tbs=lf:1,lf_ui:2&tbm=lcl&q=Hospitals&rflfq=1&num=10&sa=X&ved=2ahUKEwil696RxfWFAxUzQ6QEHe4ABa4QjGp6BAgdEAE&biw=1707&bih=791&dpr=1.5#rlfi=hd:;si:7218305102350060276,l,CglIb3NwaXRhbHNIlrHO7eWAgIAIWhUQABgAIglob3NwaXRhbHMqBAgDEACSAQhob3NwaXRhbJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VNMWRFNDNWbE5CRUFFqgFKCggvbS8waHBuchABKg0iCWhvc3BpdGFscygAMh4QASIahBUzy1HmMGP9mw5B2aGwIS6ecPHy1IIqjzkyDRACIglob3NwaXRhbHM;mv:[[30.1309085,31.526140499999997],[29.9705932,31.2043982]];start:20',
      24: 'https://www.google.com/maps/place/Shifa+Hospital/@30.0147278,31.4004411,15z/data=!4m10!1m2!2m1!1sHospitals!3m6!1s0x14583d88cd9c546b:0xff07161aab2bc7db!8m2!3d30.0207462!4d31.435384!15sCglIb3NwaXRhbHNaCyIJaG9zcGl0YWxzkgEIaG9zcGl0YWyaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUnhPSFpNWm0xblJSQULgAQA!16s%2Fg%2F11fkvt_kgl?entry=ttu',
      32: 'https://www.google.com/maps/place/Nasr+City,+Al+Manteqah+Al+Oula,+Nasr+City,+Cairo+Governorate+4450113/@30.0566281,31.3197864,15z/data=!3m1!4b1!4m6!3m5!1s0x14583e5d94c66301:0xddddf100de42206c!8m2!3d30.0566104!4d31.3301076!16s%2Fg%2F11xcyk3j2?entry=ttu',
      33: 'https://www.google.com/maps/place/New+Cairo+City,+Cairo+Governorate/@30.0251474,31.3888471,11z/data=!3m1!4b1!4m6!3m5!1s0x145822cffcd270e7:0x98b73d687889fd8!8m2!3d30.0362899!4d31.4758292!16s%2Fm%2F03c3r2b?entry=ttu',
      34: 'https://www.google.com/maps/place/Heliopolis,+Al+Matar,+El+Nozha,+Cairo+Governorate+4470351/@30.1123327,31.3335295,15z/data=!3m1!4b1!4m6!3m5!1s0x145815dcc3e4e599:0x6c67c22e4aa39206!8m2!3d30.112315!4d31.3438507!16zL20vMGM1cTA3?entry=ttu',
      35: 'https://www.google.com/maps/place/Alexandria,+Alexandria+Governorate/@31.2242313,29.8723129,12z/data=!3m1!4b1!4m6!3m5!1s0x14f5c49126710fd3:0xb4e0cda629ee6bb9!8m2!3d31.2000924!4d29.9187387!16zL20vMDEzZzM?entry=ttu',
      36: 'https://www.google.com/maps/place/Banha,+Qism+Banha,+Banha,+Al-Qalyubia+Governorate/@30.4589484,31.1494958,14z/data=!3m1!4b1!4m6!3m5!1s0x145875f6592ee989:0xa0f7a3872335c0ce!8m2!3d30.4659929!4d31.1848307!16zL20vMDhic2t4?entry=ttu',
      37: 'https://www.google.com/maps/place/Port+Said,+Port+Fouad+City,+Port+Said+Governorate/@31.2387448,32.2438839,13z/data=!3m1!4b1!4m6!3m5!1s0x14f99c3e939e6b99:0x4cae04550f7d4cb3!8m2!3d31.2652893!4d32.3018661!16zL20vMDFkM2hn?entry=ttu',
      38: 'https://www.google.com/maps/place/Nasr+City,+Al+Manteqah+Al+Oula,+Nasr+City,+Cairo+Governorate+4450113/@30.0566281,31.3197864,15z/data=!3m1!4b1!4m6!3m5!1s0x14583e5d94c66301:0xddddf100de42206c!8m2!3d30.0566104!4d31.3301076!16s%2Fg%2F11xcyk3j2?entry=ttu',
      39: 'https://www.google.com/maps/place/New+Cairo+City,+Cairo+Governorate/@30.0251474,31.3888471,11z/data=!3m1!4b1!4m6!3m5!1s0x145822cffcd270e7:0x98b73d687889fd8!8m2!3d30.0362899!4d31.4758292!16s%2Fm%2F03c3r2b?entry=ttu',
      40: 'https://www.google.com/maps/place/Heliopolis,+Al+Matar,+El+Nozha,+Cairo+Governorate+4470351/@30.1123327,31.3335295,15z/data=!3m1!4b1!4m6!3m5!1s0x145815dcc3e4e599:0x6c67c22e4aa39206!8m2!3d30.112315!4d31.3438507!16zL20vMGM1cTA3?entry=ttu',
      41: 'https://www.google.com/maps/place/Shifa+Hospital/@30.0147278,31.4004411,15z/data=!4m10!1m2!2m1!1sHospitals!3m6!1s0x14583d88cd9c546b:0xff07161aab2bc7db!8m2!3d30.0207462!4d31.435384!15sCglIb3NwaXRhbHNaCyIJaG9zcGl0YWxzkgEIaG9zcGl0YWyaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUnhPSFpNWm0xblJSQULgAQA!16s%2Fg%2F11fkvt_kgl?entry=ttu',
      42: 'https://www.google.com/maps/place/Shifa+Hospital/@30.0147278,31.4004411,15z/data=!4m10!1m2!2m1!1sHospitals!3m6!1s0x14583d88cd9c546b:0xff07161aab2bc7db!8m2!3d30.0207462!4d31.435384!15sCglIb3NwaXRhbHNaCyIJaG9zcGl0YWxzkgEIaG9zcGl0YWyaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUnhPSFpNWm0xblJSQULgAQA!16s%2Fg%2F11fkvt_kgl?entry=ttu',

      
      // Add more URL patterns as needed for other card IDs
    };
    // Return the URL based on the card ID, or a default URL if not found
    return urlMap[id] || '/';
  };

  return (
    <>
      <div className="card" style={{ width: '250px' , height : '250px'}} onClick={openModal}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
      {showModal && (
        <>
          <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header d-flex justify-content-between">
                  <h5 className="modal-title">{title}</h5>
                  <button type="button" className="btn btn-danger" aria-label="Close" onClick={closeModal}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>{description}</p>
                  <ul className="list-unstyled" style={{ margin: 0, padding: 0 }}>
                  {Object.keys(attributes).map((key) => (
                    <li key={key}>
                      {key === 'Image' ? (
                        <div className="d-flex justify-content-center">
                          <img src={attributes[key]} alt={title} style={{ maxWidth: '50%', height: 'auto' }} />
                        </div>
                      ) : (
                        <>
                          <strong>{key}:</strong> {attributes[key]}
                          {(key === 'Count') && (
                            <div className="d-flex mt-2">
                              <input
                                type="number"
                                className="form-control me-2"
                                defaultValue={0} // Set the default value to zero
                                value={inputValue}
                                min={0}
                                max={attributes.Count}
                                onChange={handleInputChange}
                              />
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleDonateClick}
                              >
                                Donate
                              </button>
                            </div>
                          )}
                          {(key.includes('Amount')) && (
                            <div className="d-flex mt-2">
                              <input
                                type="number"
                                className="form-control me-2"
                                defaultValue={0} // Set the default value to zero
                                value={inputValue}
                                min={0}
                                max={attributes['Amount in KG']}
                                onChange={handleInputChange}
                              />
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleDonateClick}
                              >
                                Donate
                              </button>
                            </div>
                          )}
                          {key === 'Google'  && (
                            <div className="d-flex flex-column align-items-center mt-2">
                            <div className="d-flex justify-content-center">
                              <a href={generateURL(id)}>
                                <button type="button" className="btn btn-outline-primary">
                                  <img src={markerIcon1} alt="Description" style={{ width: '40px', height: '40px', backgroundColor: '#0E46A3', '--bs-btn-hover-bg': '#0033ff' }}  />
                                </button>
                              </a>
                            </div>
                            <div>
                              <h6>Fulfill and view location</h6>
                            </div>
                          </div>
                          )}
                          
                          
                        </>
                      )}
                    </li>
                  ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" onClick={closeModal}></div>
        </>
      )}
    </>
  );
}

export default Card;
