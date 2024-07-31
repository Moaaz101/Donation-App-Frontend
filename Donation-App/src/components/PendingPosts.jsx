import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PendingPosts = () => {
  const [pendingPosts, setPendingPosts] = useState([
    { id: 1, item: 'Clothes', quantity: '22', submissionDate: '2022-07-09', status: 'Pending' },
    { id: 2, item: 'Toys', quantity: '11', submissionDate: '2022-10-03', status: 'Pending'  },
    { id: 3, item: 'Food', quantity: '23', submissionDate: '2022-05-21', status: 'Pending' },
    { id: 4, item: 'Medical Supplies', quantity: '3', submissionDate: '2022-05-23', status: 'Pending' },
    { id: 5, item: 'School Supplies', quantity: '13', submissionDate: '2022-05-30', status: 'Pending' },
  ]);

  const [selectedDonation, setSelectedDonation] = useState(null);

  const openModal = (donation) => {
    setSelectedDonation(donation);
  };

  const closeModal = () => {
    setSelectedDonation(null);
  };

  const deletePendingPosts = (id) => {
    setPendingPosts(pendingPosts.filter(donation => donation.id !== id));
  };

  // Function to handle editing a pending post
  const editPendingPost = (id) => {
    // Add your logic to handle editing the post (e.g., redirect to edit page)
    console.log(`Editing post with ID ${id}`);
  };

  return (
    <div style={{color:"white"}}>
      <h2>Pending Posts</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pendingPosts.map(donation => (
            <tr key={donation.id} onClick={() => openModal(donation)}>
              <td>{donation.id}</td>
              <td>{donation.item}</td>
              <td>{donation.quantity}</td>
              <td>{donation.submissionDate}</td>
              <td>{donation.status}</td>
              <td>
                    <button className='btn btn-dark' onClick={() => deletePendingPosts(donation.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    {selectedDonation && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Donation Details</h2>
            <p><strong>ID:</strong> {selectedDonation.id}</p>
            <p><strong>Item:</strong> {selectedDonation.item}</p>
            <p><strong>Submission Date:</strong> {selectedDonation.submissionDate}</p>
            <p><strong>Status:</strong> {selectedDonation.status}</p>
          </div>
        </div>
      )}
      <Link to="http://localhost:5173/FullfilledDonations">
        <button>Fulfilled Donations</button>
      </Link>
    </div>
  );
};

export default PendingPosts;
