import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Notification() {
    const location = useLocation();
    const userType = new URLSearchParams(location.search).get('userType');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      datetime: new Date(),
      eta: 600,
      message: 'Jackets Donation',
    },
    {
      id: 2,
      datetime: new Date(),
      eta: 900,
      message: 'Canned Beans Donations',
    },
    {
        id: 3,
        message: 'Your Driver is ready to pick up your Tshirts Donation',
      },
      {
        id: 3,
        datetime: new Date(),
        eta: 900,
        message: 'Canned Beans Donations',
      },
      {
        id: 5,
        datetime: new Date(),
        eta: 900,
        message: 'Canned Beans Donations',
      },
      {
        id: 6,
        datetime: new Date(),
        eta: 900,
        message: 'Canned Beans Donations',
      },
  ]);

  const updateETA = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => {
        if (notification.datetime && notification.eta) {
          const updatedETA = notification.eta - 1;
          return { ...notification, eta: updatedETA };
        }
        return notification;
      })
    );
  };

  useEffect(() => {
    const interval = setInterval(updateETA, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatETA = (etaInSeconds) => {
    const days = Math.floor(etaInSeconds / (3600 * 24));
    const hours = Math.floor((etaInSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((etaInSeconds % 3600) / 60);
    const seconds = etaInSeconds % 60;
    return `${days} day(s) ${hours} hour(s) ${minutes} minute(s) ${seconds} second(s)`;
  };

  const handleGoHome = () => {
    let redirectUrl = '/DonorHome';
      if (userType) {
        redirectUrl += `?userType=${userType}`;
      }
      // Redirect to the constructed URL
      window.location.href = redirectUrl;
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h2>Notifications</h2>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {notifications.map((notification) => (
              <li key={notification.id} className="list-group-item">
                <div>{notification.message}</div>
                {notification.datetime && notification.eta && (
                  <div>ETA: {formatETA(notification.eta)}</div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" onClick={handleGoHome}>Go Home</button>
        </div>
      </div>
    </div>
  );
}

export default Notification;
