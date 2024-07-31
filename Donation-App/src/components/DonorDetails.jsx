import React, { useState } from 'react';

const DonorDetails = () => {
  // Sample donor data
  const [donors, setDonors] = useState([
    {
      firstName: 'Abdelrahman',
      lastName: 'Elzeiny',
      contributionField: 'Medical',
      email: 'abdelrahman.elzeiny@gmail.com',
      contactNumber: '778-543-7890'
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      contributionField: 'Medical',
      email: 'john.doe@gmail.com',
      contactNumber: '123-456-7890'
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      contributionField: 'Teaching',
      email: 'jane.smith@gmail.com',
      contactNumber: '987-654-3210'
    },
    {
      firstName: 'Alice',
      lastName: 'Johnson',
      contributionField: 'Medical',
      email: 'alice.johnson@gmail.com',
      contactNumber: '456-789-0123'
    },
    {
      firstName: 'Bob',
      lastName: 'Brown',
      contributionField: 'Teaching',
      email: 'bob.brown@gmail.com',
      contactNumber: '789-012-3456'
    },
    {
      firstName: 'Emily',
      lastName: 'Davis',
      contributionField: 'Medical',
      email: 'emily.davis@gmail.com',
      contactNumber: '012-345-6789'
    },
    {
      firstName: 'David',
      lastName: 'Wilson',
      contributionField: 'Teaching',
      email: 'david.wilson@gmail.com',
      contactNumber: '234-567-8901'
    },
    {
      firstName: 'Grace',
      lastName: 'Martinez',
      contributionField: 'Medical',
      email: 'grace.martinez@gmail.com',
      contactNumber: '567-890-1234'
    },
    {
      firstName: 'Michael',
      lastName: 'Anderson',
      contributionField: 'Teaching',
      email: 'michael.anderson@gmail.com',
      contactNumber: '890-123-4567'
    },
    {
      firstName: 'Olivia',
      lastName: 'Thomas',
      contributionField: 'Medical',
      email: 'olivia.thomas@gmail.com',
      contactNumber: '123-456-7890'
    },
    {
      firstName: 'Sophia',
      lastName: 'Garcia',
      contributionField: 'Teaching',
      email: 'sophia.garcia@gmail.com',
      contactNumber: '987-654-3210'
    },
    // Add 15 more donors here
    {
      firstName: 'Max',
      lastName: 'Smith',
      contributionField: 'Medical',
      email: 'max.smith@gmail.com',
      contactNumber: '345-678-9012'
    },
    {
      firstName: 'Emma',
      lastName: 'Clark',
      contributionField: 'Teaching',
      email: 'emma.clark@gmail.com',
      contactNumber: '678-901-2345'
    },
    {
      firstName: 'William',
      lastName: 'Taylor',
      contributionField: 'Medical',
      email: 'william.taylor@gmail.com',
      contactNumber: '901-234-5678'
    },
    {
      firstName: 'Sophie',
      lastName: 'Walker',
      contributionField: 'Teaching',
      email: 'sophie.walker@gmail.com',
      contactNumber: '234-567-8901'
    },
    {
      firstName: 'James',
      lastName: 'Hill',
      contributionField: 'Medical',
      email: 'james.hill@gmail.com',
      contactNumber: '567-890-1234'
    },
    {
      firstName: 'Liam',
      lastName: 'Moore',
      contributionField: 'Teaching',
      email: 'liam.moore@gmail.com',
      contactNumber: '890-123-4567'
    },
    {
      firstName: 'Isabella',
      lastName: 'King',
      contributionField: 'Medical',
      email: 'isabella.king@gmail.com',
      contactNumber: '123-456-7890'
    },
    {
      firstName: 'Mia',
      lastName: 'Lee',
      contributionField: 'Teaching',
      email: 'mia.lee@gmail.com',
      contactNumber: '987-654-3210'
    },
    {
      firstName: 'Benjamin',
      lastName: 'Allen',
      contributionField: 'Medical',
      email: 'benjamin.allen@gmail.com',
      contactNumber: '345-678-9012'
    },
    {
      firstName: 'Charlotte',
      lastName: 'Young',
      contributionField: 'Teaching',
      email: 'charlotte.young@gmail.com',
      contactNumber: '678-901-2345'
    },
    {
      firstName: 'Alexander',
      lastName: 'Scott',
      contributionField: 'Medical',
      email: 'alexander.scott@gmail.com',
      contactNumber: '901-234-5678'
    },
    {
      firstName: 'Ella',
      lastName: 'Turner',
      contributionField: 'Teaching',
      email: 'ella.turner@gmail.com',
      contactNumber: '234-567-8901'
    },
    {
      firstName: 'Jacob',
      lastName: 'Wright',
      contributionField: 'Medical',
      email: 'jacob.wright@gmail.com',
      contactNumber: '567-890-1234'
    },
    {
      firstName: 'Amelia',
      lastName: 'Green',
      contributionField: 'Teaching',
      email: 'amelia.green@gmail.com',
      contactNumber: '890-123-4567'
    },
    {
      firstName: 'Logan',
      lastName: 'Baker',
      contributionField: 'Medical',
      email: 'logan.baker@gmail.com',
      contactNumber: '123-456-7890'
    },
    {
      firstName: 'Ava',
      lastName: 'Evans',
      contributionField: 'Teaching',
      email: 'ava.evans@gmail.com',
      contactNumber: '987-654-3210'
    },
  ]);

  const [sortAscending, setSortAscending] = useState(true);
  const [filter, setFilter] = useState('');

  // Function to handle sorting by first name
  const handleSort = () => {
    const sortedDonors = [...donors];
    sortedDonors.sort((a, b) => {
      if (sortAscending) {
        return a.firstName.localeCompare(b.firstName);
      } else {
        return b.firstName.localeCompare(a.firstName);
      }
    });
    setDonors(sortedDonors);
    setSortAscending(!sortAscending);
  };

  // Function to handle filtering by contribution field
  const handleFilter = (field) => {
    setFilter(field);
  };

  // Reset filter
  const handleReset = () => {
    setFilter('');
  };

  // Filter donors based on filter value
  const filteredDonors = filter ? donors.filter(donor => donor.contributionField === filter) : donors;

  // Function to generate random surgeries or free lessons
  const generateContribution = (field) => {
    if (field === 'Medical') {
      const numSurgeries = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
      return `${numSurgeries} Surgeries`;
    } else if (field === 'Teaching') {
      const numLessons = Math.floor(Math.random() * 20) + 1; // Random number between 1 and 20
      return `${numLessons} Free Lessons`;
    } else {
      return '';
    }
  };

  return (
    <div>
      <h2>Donor Details</h2>
      <div className="mb-3">
        <button className="btn btn-primary me-2" onClick={handleSort}>
          Sort by First Name {sortAscending ? '▲' : '▼'}
        </button>
        <button className="btn btn-primary me-2" onClick={() => handleFilter('Medical')}>Filter Medical</button>
        <button className="btn btn-primary me-2" onClick={() => handleFilter('Teaching')}>Filter Teaching</button>
        <button className="btn btn-secondary" onClick={handleReset}>Reset</button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Contribution Field</th>
            <th scope="col">Contribution</th>
            <th scope="col">Email</th>
            <th scope="col">Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredDonors.length > 0 ? (
            filteredDonors.map((donor, index) => (
              <tr key={index}>
                <td>{donor.firstName}</td>
                <td>{donor.lastName}</td>
                <td>{donor.contributionField}</td>
                <td>{generateContribution(donor.contributionField)}</td>
                <td>{donor.email}</td>
                <td>{donor.contactNumber}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">No donors found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DonorDetails;
