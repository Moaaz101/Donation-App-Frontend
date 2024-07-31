import React, { useState } from 'react';

const Food = () => {
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmitbutton = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    window.location.href = '/OrganizationHome'; // Redirect to the specified URL
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const foodDetails = { type, name, amount };
    console.log(foodDetails); // You can use this data as needed, for example, send it to the server
    // Clear form fields
    setType('');
    setName('');
    setAmount('');
  };

  return (
    <div className="container rounded p-5" style={{ color: "white", backgroundColor: "#34404b" }}>
      <h2>Food Donation Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">Type:</label>
          <select className="form-select" id="type" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Select</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Canned Foods">Canned Foods</option>
            <option value="Fresh Meals">Fresh Meals</option>
            <option value="Baked Goods">Baked Goods</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" placeholder="Name" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount (in Kgs):</label>
          <input type="number" placeholder="Amount" className="form-control" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary mb-3" onClick={handleSubmitbutton}>Submit For Approval</button>
      </form>
      <br />
      <button className="btn btn-secondary" onClick={() => window.location.href = 'http://localhost:5173/PendingPosts'}>
        View Pending Posts
      </button>
    </div>
  );
};

export default Food;
