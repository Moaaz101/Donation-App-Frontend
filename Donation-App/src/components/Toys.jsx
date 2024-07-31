import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const Toys = () => {
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [count, setCount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const toyDetails = { category, type, age, gender, count };
    console.log(toyDetails); // You can use this data as needed, for example, send it to the server
    // Clear form fields
    setCategory('');
    setType('');
    setAge('');
    setGender('');
    setCount('');
  };


    const handleSubmitbutton = (event) => {
      event.preventDefault(); // Prevent default form submission behavior
      window.location.href = '/OrganizationHome'; // Redirect to the specified URL
    };
  

  return (
    <div className="container rounded p-5" style={{ color: "white", backgroundColor: "#34404b" }}>
      <h2 className="mb-4">Toys Donation Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category:</label>
          <input type="text" className="form-control" id="category" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">Type:</label>
          <input type="text" className="form-control" id="type" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age:</label>
          <input type="number" className="form-control" id="age" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender:</label>
          <select className="form-select" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="count" className="form-label">Count:</label>
          <input type="number" className="form-control" id="count" placeholder="Count" value={count} onChange={(e) => setCount(e.target.value)} />
        </div>
        
        <button type="submit" className="btn btn-primary mb-3" onClick={handleSubmitbutton}>Submit For Approval</button>
        
      </form>
      <button className="btn btn-secondary" onClick={() => window.location.href = 'http://localhost:5173/PendingPosts'}>
        View Pending Posts
      </button>
    </div>
  );
};

export default Toys;
