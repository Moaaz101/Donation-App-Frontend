import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const DonationPost = () => {
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to submit post for approval (e.g., send data to server)
    const postData = {
      category,
      quantity,
      type,
      name
    };
    console.log(postData); // Just for demonstration, you would send this data to the server
    setSubmitted(true);
    // Reset form fields
    setCategory('');
    setQuantity('');
    setType('');
    setName('');
  };

  return (
    <div className="container-fluid p-5 m-0" style={{ width: '100vw', height: '100vh',color: 'white' }}>
      <h2 className='display-3 mb-5' style={{ fontWeight: 400 }}>Create a New Donation Post</h2>

    <div style={{paddingLeft:"50px",paddingRight:"50px" ,color:"white", backgroundColor: "#34404b"}} className='container rounded-5 center-text  ' >
    <br />
      <form onSubmit={handleSubmit}>

      <div className='row '>

            <label className='custom-text'>
            Choose item category &nbsp;
            <select className='form-control' value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select</option>
                <option value="clothes">Clothes</option>
                <option value="toys">Toys</option>
                <option value="food">Food</option>
                <option value="medicalSupplies">Medical Supplies</option>
                <option value="schoolSupplies">School Supplies</option>
                <option value="bloodDonations">Blood Donations</option>
            </select>
            </label>
      </div>

        <br />
      <div className='row'>
      <label className='custom-text'>
          Enter item quantity &nbsp;
          <input
            className='form-control'
            placeholder='Quantity' 
            type="number" 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)} 
            min="1" // Optionally, set a minimum value
            step="1" // Optionally, set the step to 1 for integers
          />
        </label>
        <br />
        <label>
          Enter item type:
          <input 
            type="text" 
            value={type} 
            onChange={(e) => setType(e.target.value)} 
          />
        </label>
        <br />
        <label>
          Enter item name:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </label>
      </div>
      <br />
      <div className='row'>
        <div className='col'>
            <button type="submit" style={{width:"200px"}}>Submit for Approval</button>
        </div>
        <div className='col'>
            <Link to="http://localhost:5173/PendingPosts">
                <button style={{width:"200px"}}>Pending Posts</button>
            </Link>
        </div> 
      </div>
      <br />


        
        
       
      
      </form>
      
    </div>
    </div>

  );
};

export default DonationPost;
