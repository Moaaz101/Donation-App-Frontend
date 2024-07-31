import React from 'react'
import Donations2 from '../assets/Donations2.png';

function Vision() {
  return (
    <body style={{ margin: 0, display: 'block', minWidth: '100vw', minHeight: '100vh', backgroundColor: '#e1e6ea' }}> 
    <div className="container">
      <img src={Donations2} alt="NGODA Logo" style={{ width: '200px', height: 'auto' }} />
      <p style={{color: '#1e2c38', fontFamily: 'Arial, sans-serif', marginTop:'20px'}}>Empowering Change, Transforming Lives</p>
      <div style={{marginTop: '50px'}}>
      <h2>About Us</h2>


      <p style={{color: '#1e2c38'}}>At ENGO, we envision a future where the barriers to success are dismantled, and every person has access to the resources and support they need to lead fulfilling lives. We see a world where communities come together in solidarity, uplifting one another and fostering a culture of empathy and inclusion.</p>




      <p style={{color: '#1e2c38'}}>Together, we can create a world where compassion reigns supreme, where generosity knows no bounds, and where every person has the opportunity to thrive. Join us on this journey of transformation, and together, let's build a brighter tomorrow for all.</p>
      <a href="/DonorLogin">
        <button type="button" className="btn btn-success">Start Making A Difference</button>
      </a>      </div>
    </div>
    </body>
  )
}

export default Vision