import React from 'react';
import Card from './Card';
import Donor from '../assets/Donor.png';

function Test() {
  const cardData = [
    {
      image: Donor,
      title: 'Card 1',
      description: 'Description for Card 1',
      attributes: {
        attribute1: 'Value 1',
        count: 2
      },
    },
    {
      image: Donor,
      title: 'Card 2',
      description: 'Description for Card 2',
      attributes: {
        count: 7,
        attribute2: 'Value 2',
      },
    },
    // Add more card data as needed
  ];

  return (
    <div className="container">
      <h1>Test Component</h1>
      <div className="row">
        {cardData.map((data, index) => (
          <div className="col-md-6" key={index}>
            <Card data={data} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;
