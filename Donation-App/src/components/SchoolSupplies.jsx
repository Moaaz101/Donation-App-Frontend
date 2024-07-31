import React, { useState } from 'react';

const SchoolSupplies = () => {
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [count, setCount] = useState('');

  const handleSubmitbutton = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    window.location.href = '/OrganizationHome'; // Redirect to the specified URL
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const schoolSuppliesDetails = { type, name, count };
    console.log(schoolSuppliesDetails); // You can use this data as needed, for example, send it to the server
    // Clear form fields
    setType('');
    setName('');
    setCount('');
  };

  return (
    <div className="container rounded p-5" style={{ color: "white", backgroundColor: "#34404b" }}>
  <h2 className="mb-4">School Supplies Donation Form</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="type" className="form-label">Type:</label>
      <select className="form-select" id="type" value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Select</option>
        <option value="Stationary">Stationary</option>
        <option value="Books">Books</option>
      </select>
    </div>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name:</label>
      <input type="text" className="form-control" placeholder="Name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    <div className="mb-3">
      <label htmlFor="count" className="form-label">Count:</label>
      <input type="number" className="form-control" placeholder="Count" id="count" value={count} onChange={(e) => setCount(e.target.value)} />
    </div>
    <button type="submit" className="btn btn-primary mb-3" onClick={handleSubmitbutton}>Submit For Approval</button>
  </form>
  <button className="btn btn-secondary" onClick={() => window.location.href = 'http://localhost:5173/PendingPosts'}>
    View Pending Posts
  </button>
</div>

  );
};

export default SchoolSupplies;
