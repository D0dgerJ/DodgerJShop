import React, { useState, useEffect } from 'react';
import WishList from './WishList';
import ViewedProducts from './ViewedProducts';
import CardForm from '../account/CardForm';
import UserReviews from './UserReviews';

const ProfileSection = ({ selectedMenuItem, customerId }) => {
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '',
    date_of_birth: '',
    surname: '',
    gender: '',
    phone_number: '',
    email: '',
    login: '',
    password: '',
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('/api/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  const handleEditClick = () => setEditMode(true);

  const handleSaveClick = async () => {
    try {
      await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(profileData),
      });
      setEditMode(false);
    } catch (error) {
      console.error('Error saving profile data:', error);
    }
  };

  const handleCancelClick = () => setEditMode(false);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container">
      <div className="wrapper flexitem">
        <div className="profilee-section">
          {selectedMenuItem === 'profile' && (
            <div>
              {/* Профиль */}
              <div className="profilee-container">
                <div className="profilee-up center-text">Профиль</div>
                <div className="profilee-content">
                  <ul>
                    <li>
                      Name:{' '}
                      {editMode ? (
                        <input
                          type="text"
                          name="name"
                          value={profileData.name}
                          onChange={handleProfileChange}
                        />
                      ) : (
                        profileData.name
                      )}
                    </li>
                    <li>
                      Date of Birth:{' '}
                      {editMode ? (
                        <input
                          type="date"
                          name="date_of_birth"
                          value={profileData.date_of_birth}
                          onChange={handleProfileChange}
                        />
                      ) : (
                        profileData.date_of_birth
                      )}
                    </li>
                  </ul>
                  <ul>
                    <li>
                      Surname:{' '}
                      {editMode ? (
                        <input
                          type="text"
                          name="surname"
                          value={profileData.surname}
                          onChange={handleProfileChange}
                        />
                      ) : (
                        profileData.surname
                      )}
                    </li>
                    <li>
                      Gender:{' '}
                      {editMode ? (
                        <input
                          type="text"
                          name="gender"
                          value={profileData.gender}
                          onChange={handleProfileChange}
                        />
                      ) : (
                        profileData.gender
                      )}
                    </li>
                  </ul>
                  {editMode ? (
                    <div>
                      <button onClick={handleSaveClick}>Save</button>
                      <button onClick={handleCancelClick}>Cancel</button>
                    </div>
                  ) : (
                    <button onClick={handleEditClick}>Edit</button>
                  )}
                </div>
              </div>

              {/* Контакты */}
              <div className="profilee-container">
                <div className="profilee-up center-text">Контакты</div>
                <div className="profilee-content">
                  <ul>
                    <li>
                      Phone Number:{' '}
                      {editMode ? (
                        <input
                          type="text"
                          name="phone_number"
                          value={profileData.phone_number}
                          onChange={handleProfileChange}
                        />
                      ) : (
                        profileData.phone_number
                      )}
                    </li>
                    <li>
                      Email:{' '}
                      {editMode ? (
                        <input
                          type="text"
                          name="email"
                          value={profileData.email}
                          onChange={handleProfileChange}
                        />
                      ) : (
                        profileData.email
                      )}
                    </li>
                  </ul>
                  {editMode ? (
                    <div>
                      <button onClick={handleSaveClick}>Save</button>
                      <button onClick={handleCancelClick}>Cancel</button>
                    </div>
                  ) : (
                    <button onClick={handleEditClick}>Edit</button>
                  )}
                </div>
              </div>

              {/* Логин */}
              <div className="profilee-container">
                <div className="profilee-up center-text">Логин</div>
                <div className="profilee-content">
                  <ul>
                    <li>
                      Login:{' '}
                      {editMode ? (
                        <input
                          type="text"
                          name="login"
                          value={profileData.login}
                          onChange={handleProfileChange}
                        />
                      ) : (
                        profileData.login
                      )}
                    </li>
                    <li>
                      Password:{' '}
                      {editMode ? (
                        <input
                          type="password"
                          name="password"
                          value={profileData.password}
                          onChange={handleProfileChange}
                        />
                      ) : (
                        '******'
                      )}
                    </li>
                  </ul>
                  {editMode ? (
                    <div>
                      <button onClick={handleSaveClick}>Save</button>
                      <button onClick={handleCancelClick}>Cancel</button>
                    </div>
                  ) : (
                    <button onClick={handleEditClick}>Edit</button>
                  )}
                </div>
              </div>
            </div>
          )}

          {selectedMenuItem === 'wish list' && (
            <WishList />
          )}

          {selectedMenuItem === 'viewed products' && (
            <ViewedProducts />
          )}

          {selectedMenuItem === 'my wallet' && (
            <div>
              <CardForm customerId={customerId} />
            </div>
          )}

          {selectedMenuItem === 'my reviews' && (
            <div>
              <UserReviews customerId={customerId} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
