import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './HomeStyle.css'; 
import Donations2 from '../assets/Donations2.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


function NavBar({ handleCategoryFilter, userType }) {
  const handleCategoryClick = (category) => {
    // Call the parent component's function to filter the card data
    handleCategoryFilter(category);
  };
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a href="/" style={{ marginLeft: '20px' }}>
        <img src={Donations2} alt="NGODA Logo" style={{ width: '40px', height: 'auto' }} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto "> {/* Add margin to the start */}
          <li className="nav-item ms-5">
          <Link className="nav-link" to={{ pathname: "/DonorHome", search: `?userType=${userType}` }} onClick={() => window.location.reload()}> {/* Modify the anchor tag to Link */}
                Home
              </Link>
          </li>
          <li className="nav-item ">
          <Link className="nav-link" to={{ pathname: "/Notification", search: `?userType=${userType}` }} > {/* Modify the anchor tag to Link */}
                Notifications
              </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Category
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" onClick={() => handleCategoryClick('Clothes')}>Clothes</a></li>
                <li><a className="dropdown-item" onClick={() => handleCategoryClick('Food')}>Food</a></li>
                <li><a className="dropdown-item" onClick={() => handleCategoryClick('Medical Supplies')}>Medical Supplies</a></li>
                <li><a className="dropdown-item" onClick={() => handleCategoryClick('School Supplies')}>School Supplies</a></li>
                <li><a className="dropdown-item" onClick={() => handleCategoryClick('Blood Donations')}>Blood Donations</a></li>
                <li><a className="dropdown-item" onClick={() => handleCategoryClick('Toys')}>Toys</a></li>
                {userType === 'doctor' && (
                  <li><a className="dropdown-item" href="#" onClick={() => handleCategoryClick('Medical Visits')}>Medical Visits</a></li>
                )}
                {userType === 'teacher' && (
                  <li><a className="dropdown-item" href="#" onClick={() => handleCategoryClick('Teaching Posts')}>Teaching Posts</a></li>
                )}
              </ul>
          </li>
          <li className="nav-item ">
          <Link className="nav-link" to={{ pathname: "/RegisteredOrgs", search: `?userType=${userType}` }} > {/* Modify the anchor tag to Link */}
                View Organizations
              </Link>
          </li>
          <li className="nav-item ">
          <Link className="nav-link" to={{ pathname: "/AccountManagement", search: `?userType=${userType}` }} > {/* Modify the anchor tag to Link */}
                Account Management
              </Link>
          </li>
          <li className="nav-item ">
          <Link className="nav-link" to={{ pathname: "/DonorLogin"}}> {/* Modify the anchor tag to Link */}
                Logout
              </Link>
          </li>
         
        </ul>
        
      </div>
    </div>
  </nav>

  )
}

export default NavBar