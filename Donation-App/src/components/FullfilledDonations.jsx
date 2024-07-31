import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FulfilledDonations = () => {
  const initialDonations = [
    { id: 1, item: 'Books', donor: 'John Doe', dateFulfilled: '2022-05-01', status: 'Fulfilled', ContributionField: 'Education' },
    { id: 2, item: 'Medicine', donor: 'Jane Smith', dateFulfilled: '2022-05-03', status: 'Fulfilled', ContributionField: 'Medical' },
    { id: 3, item: 'Stationary', donor: 'Alice Johnson', dateFulfilled: '2022-05-05', status: 'Fulfilled', ContributionField: 'Education' },
    { id: 4, item: 'Medical Supplies', donor: 'Michael Brown', dateFulfilled: '2022-05-07', status: 'Fulfilled', ContributionField: 'Medical' },
    { id: 5, item: 'Medicine', donor: 'Emily Wilson', dateFulfilled: '2022-05-09', status: 'Fulfilled', ContributionField: 'Medical' }
  ];

  const [fulfilledDonations, setFulfilledDonations] = useState(initialDonations);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [detailsViewActive, setDetailsViewActive] = useState(false);
  const [filterField, setFilterField] = useState('');

  const getCustomMessage = (id) => {
    switch(id) {
      case 1:
        return ' Mr. John Doe (school principle) \nContact number : 123-456-7890 Email: john.doe@gmail.com ';
      case 2:
        return 'Mr. Jane Smith (Hospital Pharmacist) \nContact number : 987-654-3210 Email: jane.smith@gmail.com';
      case 3:
        return 'Mr. Alice Johnson (School Library) \nContact number : 987-654-3210 Email: alice.johnson@gmail.com ';
      case 4:
        return 'Mr. Michael Brown (Pharmacy Manager) \nContact number : 987-654-3210 Email: michael.brown@gmail.com';
      case 5:
        return 'Mr. Emily Wilson (Plastic surgeon) \nContact number : 987-654-3210 Email: emily.wilson@gmail.com' ;
      default:
        return ;
    }
  };
  
  const openModal = (donation) => {
    const message = getCustomMessage(donation.id);
    alert(message);
    setSelectedDonation(donation);
    setDetailsViewActive(true);
  };

  const closeModal = () => {
    setSelectedDonation(null);
    setDetailsViewActive(false);
  };

  const deleteFulfilledDonation = (id) => {
    setFulfilledDonations(fulfilledDonations.filter(donation => donation.id !== id));
  };

  const sortDonorsAscending = () => {
    const sorted = [...fulfilledDonations].sort((a, b) => a.donor.localeCompare(b.donor));
    setFulfilledDonations(sorted);
  };

  const handleFilterChange = (event) => {
    const field = event.target.value;
    setFilterField(field);
    if (field) {
      const filtered = initialDonations.filter(donation => donation.ContributionField === field);
      setFulfilledDonations(filtered);
    } else {
      setFulfilledDonations(initialDonations);
    }
  };

  return (
    <div className='container mt-5' style={{ maxWidth: "1500px"}} >
      <div className='card'>
        <div className='card-body'>
          <h2 className='mb-4'>Fulfilled Donation Posts</h2>
          <button onClick={sortDonorsAscending}>Sort Donor </button> &nbsp;
          <select onChange={handleFilterChange} value={filterField}>
            <option value="">All Fields</option>
            <option value="Education">Education</option>
            <option value="Medical">Medical</option>
          </select>
          <table className='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Item</th>
                <th>Donor</th>
                <th>Date Fulfilled</th>
                <th>Status</th>
                <th>Field</th>
              </tr>
            </thead>
            <tbody>
              {fulfilledDonations.map(donation => (
                <tr key={donation.id}>
                  <td>{donation.id}</td>
                  <td>{donation.item}</td>
                  <td>{donation.donor}</td>
                  <td>{donation.dateFulfilled}</td>
                  <td>{donation.status}</td>
                  <td>{donation.ContributionField}</td>
                  <td>
                  <div class="btn-group" role="group">
                    <button className='btn btn-dark' onClick={() => deleteFulfilledDonation(donation.id)}>Delete</button>
                    <button className='btn btn-dark' onClick={() => openModal(donation)}>View Details</button>
                    <Link className='btn btn-dark' to="http://localhost:5173/ScheduleDelivery">
                      <button className='btn btn-dark'>Schedule</button>
                    </Link>
                  </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {selectedDonation && detailsViewActive && (
            <div className="modal" onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={closeModal}>&times;</span>
                <h2>Donation Details</h2>
                <p><strong>ID:</strong> {selectedDonation.id}</p>
                <p><strong>Item:</strong> {selectedDonation.item}</p>
                <p><strong>Donor:</strong> {selectedDonation.donor}</p>
                <p><strong>Contribution Field:</strong> {selectedDonation.ContributionField}</p>
                <p><strong>Date Fulfilled:</strong> {selectedDonation.dateFulfilled}</p>
                <p><strong>Status:</strong> {selectedDonation.status}</p>
              </div>
            </div>
          )}
          <div>
            <Link className='btn btn-primary' to="/OrganizationHome">
              Back
            </Link>
                  
          </div>
        </div>
      </div>
    </div>
  );
};

export default FulfilledDonations;
