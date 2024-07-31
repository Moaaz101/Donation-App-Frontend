import React from 'react';
import { Link } from 'react-router-dom';

const DonationCategory = () => {
  return (
    <div className="rounded p-4" style={{backgroundColor:"#34404b", color:"white"}}>
        <h2 className="card-title">Choose Donation Category</h2>
        <div className="d-flex flex-wrap">
          <Link to="http://localhost:5173/Toys" className="btn btn-primary m-2">Toys</Link>
          <Link to="http://localhost:5173/Clothes" className="btn btn-primary m-2">Clothes</Link>
          <Link to="http://localhost:5173/Food" className="btn btn-primary m-2">Food</Link>
          <Link to="http://localhost:5173/MedicalSupplies" className="btn btn-primary m-2">Medical Supplies</Link>
          <Link to="http://localhost:5173/SchoolSupplies" className="btn btn-primary m-2">School Supplies</Link>
          <Link to="http://localhost:5173/BloodDonation" className="btn btn-primary m-2">Blood Donations</Link>
        </div>
    </div>
  );
};

export default DonationCategory;
