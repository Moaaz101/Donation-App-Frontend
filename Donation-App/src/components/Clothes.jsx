import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Clothes = () => {
  const [type, setType] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [season, setSeason] = useState('');
  const [material, setMaterial] = useState('');
  const [count, setCount] = useState('');

  const handleSubmitbutton = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    window.location.href = '/OrganizationHome'; // Redirect to the specified URL
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const clothesDetails = { type, age, gender, season, material, count };
    console.log(clothesDetails); // You can use this data as needed, for example, send it to the server
    // Clear form fields
    setType('');
    setAge('');
    setGender('');
    setSeason('');
    setMaterial('');
    setCount('');
  };

  return (
    <div className="container rounded p-3" style={{ color: "white", backgroundColor: "#34404b" }}>
      <h2 className="mb-4">Clothes Donation Form</h2>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="season" className="form-label">Season:</label>
          <select className="form-select" id="season" value={season} onChange={(e) => setSeason(e.target.value)}>
            <option value="">Select</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="material" className="form-label">Material:</label>
          <input type="text" className="form-control" id="material" placeholder="Material" value={material} onChange={(e) => setMaterial(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="count" className="form-label">Count:</label>
          <input type="number" className="form-control" id="count" placeholder="Count" value={count} onChange={(e) => setCount(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary mb-3" onClick={handleSubmitbutton}>Submit For Approval</button>
      </form>
      <Link to="http://localhost:5173/PendingPosts" className="btn btn-secondary">
        View Pending Posts
      </Link>
    </div>
  );
};

export default Clothes;
