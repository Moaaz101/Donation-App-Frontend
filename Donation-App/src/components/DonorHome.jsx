import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from './NavBar';
import FilterBar from './FilterBar';
import { useLocation } from 'react-router-dom';
import Card from './Card'; // Import the Card component
import './styles.css';
import {allData,docData,teacherData} from './Data';

function DonorHome() {
  // Define sample card data (replace with actual data)

  const [cardData, setCardData] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);


  const location = useLocation();
  const userType = new URLSearchParams(location.search).get('userType');

  const handleCategoryFilter = (category) => {
    let userData;
  switch (userType) {
    case 'doctor':
      userData = docData;
      break;
    case 'teacher':
      userData = teacherData;
      break;
    default:
      userData = allData;
  }
    const filteredData = userData.filter(item => item.category === category);
    setCardData(filteredData);
    setCurrentCategory(category);
    console.log(currentCategory)


  };


  
  const handleFilter = (filters) => {
    console.log(filters)
    let userData;
  switch (userType) {
    case 'doctor':
      userData = docData;
      break;
    case 'teacher':
      userData = teacherData;
      break;
    default:
      userData = allData;
  }
    let filteredData;

    if (currentCategory === 'Clothes') {
        filteredData = userData.filter((item) => {
            return (
              item.category === currentCategory &&
              (!filters.age || filters.age === 'All' || item.attributes.Age === filters.age) &&
              (!filters.gender || item.attributes.Gender === filters.gender) &&
              (!filters.season || item.attributes.Season === filters.season)
            );
        });
    } 
    else if(currentCategory === 'Food'){
      filteredData = userData.filter((item) => {
        return (
            item.category === currentCategory &&
            (!filters.foodType || item.attributes.Type === filters.foodType)
        );
    });

    }
    else if(currentCategory === 'Medical Supplies'){
      filteredData = userData.filter((item) => {
        return (
            item.category === currentCategory &&
            (!filters.medicalType || item.attributes.Type === filters.medicalType)
        );
    });

    }
    else if(currentCategory === 'School Supplies'){
      filteredData = userData.filter((item) => {
        return (
            item.category === currentCategory &&
            (!filters.schoolType || item.attributes.Type === filters.schoolType)
        );
    });

    }
    else if(currentCategory === 'Blood Donations'){
      filteredData = userData.filter((item) => {
        return (
          item.category === currentCategory &&
          (!filters.hospitalName || item.attributes['Hospital Name'].toLowerCase().includes(filters.hospitalName.toLowerCase())) &&
          (!filters.hospitalAddress || item.attributes['Address'].toLowerCase().includes(filters.hospitalAddress.toLowerCase())) 
      );
    });

    }
    else if(currentCategory === 'Toys'){
      filteredData = userData.filter((item) => {
        return (
          item.category === currentCategory &&
          (!filters.age || item.attributes.Age === filters.age) &&
          (!filters.gender || item.attributes.Gender === filters.gender) &&
          (!filters.toyType || item.attributes.Category === filters.toyType)
      );
    });

    }
    else if(currentCategory === 'Teaching Posts'){
      filteredData = userData.filter((item) => {
        return (
          item.category === currentCategory &&
          (!filters.address || item.attributes.Address.toLowerCase().includes(filters.address.toLowerCase())) &&
          (!filters.subject ||  item.attributes.Subjects.toLowerCase().includes(filters.subject.toLowerCase()))
         
      );
    });

    }
    else if(currentCategory === 'Medical Visits'){
      filteredData = userData.filter((item) => {
        return (
          item.category === currentCategory &&
          (!filters.address || item.attributes.Address.toLowerCase().includes(filters.address.toLowerCase())) &&
          (!filters.speciality ||  item.attributes.Specialty === filters.speciality) && 
          (!filters.organizationName || item.attributes['Organization Name'].toLowerCase().includes(filters.organizationName.toLowerCase()))
         
      );
    });

    }

  else {
    // For other categories, filter based on category only
    filteredData = cardData.filter((item) => item.category === currentCategory);
} 
    setCardData(filteredData);
};
  const renderFilterBar = () => {
    if (currentCategory) {
      return <FilterBar currentCategory={currentCategory} onFilter={handleFilter} />;
    }
    return null;
  };
  useEffect(() => {
    // Set card data based on user type
    switch (userType) {
      case 'doctor':
        setCardData(docData);
        break;
      case 'teacher':
        setCardData(teacherData);
        break;
      default:
        setCardData(allData);
    }
  }, [userType]);



  
  return (
    <body style={{ margin: 0, display: 'block', minWidth: '100vw', minHeight: '100vh', backgroundColor: '#e1e6ea' }}>
      <div className="dashboard-container" style={{ backgroundColor: '#e1e6ea' }}>
      <NavBar handleCategoryFilter={handleCategoryFilter} userType={userType} />
        <div className="dashboard-content" style={{ textAlign: 'left',backgroundColor: '#e1e6ea' }}>
          <div className="sidebar" style={{ width: '70px', padding: '80px' }}>  {/*if the sidebar is not needed remove this div*/}
              <label style={{ marginBottom: '30px' }}><a href="#"></a></label>
              <label style={{ marginBottom: '30px' }}><a href="#"></a></label>
              <label style={{ marginBottom: '30px' }}><a href="#"></a></label>
              <label style={{ marginBottom: '30px' }}><a href="#"></a></label>
              <label style={{ marginBottom: '30px' }}><a href="#"></a></label>
              <label style={{ marginBottom: '30px' }}><a href="#"></a></label>
              {/* Add more sidebar items as needed */}
                  </div>
                  <div className="main-content">
                    {/* Main content area */}
                    {renderFilterBar()}
                    <h1>{currentCategory ? currentCategory : 'All Requests'}</h1>                    
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5">
          {cardData.map((card) => (
            <div className="col mb-2" key={card.id}>
              <Card data={card} />
            </div>
          ))}
        </div>
                  </div>
                </div>
              </div>
            </body>
  );
}

export default DonorHome;
