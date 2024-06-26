import React, { useEffect, useState } from "react";
import { useStateContext } from "../Context/ContextProvider";
import axios from "axios";
import ImageUpload from "../Components/ImageUpload";

const UserProfilePage = () => {
  const [userType, setUserType] = useState();
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    stageName: "",
    career: "",
    genre: "",
    birthday: "",
    music: "",
    email: "",
    about: "",
    image: "",
    phoneNumber: "",
    currentPassword: "",
    newPassword: ""
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("weak");

  const { user } = useStateContext();

  useEffect(() => {
    if (user) {
      setUserType(user.userType);
    }
  }, [user]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (user && user._id) {
          const response = await axios.get(`${import.meta.env.VITE_SERVER_ENDPOINT}/profile/artist/${user._id}`);
          if (response.data) {
            console.log(response.data);
            setProfile(response.data);
          } else {
            console.warn('Profile not found');
          }
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));

    if (name === "newPassword") {
      const newStrength = calculatePasswordStrength(value);
      setPasswordStrength(newStrength);
    }
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };



  const saveProfile = async () => {
    try {
      console.log("Updated Profile:", profile);
      const response = await axios.put(`${import.meta.env.VITE_SERVER_ENDPOINT}/profile/artist`, profile);
      console.log("Response:", response);
      setIsEditMode(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };




  return (
    <div className="text-black poppins px-[12%] py-10">

      
      
      {userType === "Artist" && (
        <div className="container container-below-header">
          <div className="profile-section">
            <h2>Artist Profile</h2>
            <div className="profile-info">
              <div className="profile-container">
                <div className="profile-pic flex flex-col items-center justify-center">
                  <div className="">
                    <ImageUpload id={user._id} currentImg={profile.image}/>  
                  </div>        
                </div>
               
                <div className="profile-name">{user.username}</div>
              </div>
              <div className="info-row">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={profile.firstName}
                  readOnly={!isEditMode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="info-row">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={profile.lastName}
                  readOnly={!isEditMode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="info-row">
                <label htmlFor="stageName">Stage Name</label>
                <input
                  type="text"
                  id="stageName"
                  name="stageName"
                  value={profile.stageName}
                  readOnly={!isEditMode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="info-row">
                <label htmlFor="career">Career</label>
                <input
                  type="text"
                  id="career"
                  name="career"
                  value={profile.career}
                  readOnly={!isEditMode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="info-row">
                <label htmlFor="genre">Genre</label>
                <input
                  type="text"
                  id="genre"
                  name="genre"
                  value={profile.genre}
                  readOnly={!isEditMode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="info-row">
                <label htmlFor="birthday">Birthday</label>
                <input
                  type="text"
                  id="birthday"
                  name="birthday"
                  value={profile.birthday}
                  readOnly={!isEditMode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="info-row">
                <label htmlFor="music">Music</label>
                <input
                  type="text"
                  id="music"
                  name="music"
                  value={profile.music}
                  readOnly={!isEditMode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="info-row">
                <label htmlFor="about">About</label>
                <textarea
                  id="about"
                  name="about"
                  value={profile.about}
                  readOnly={!isEditMode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="info-row">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profile.email}
                  readOnly={!isEditMode}
                  onChange={handleInputChange}
                />
              </div>
              
              {isEditMode ? (
                <button id="saveProfileBtn" onClick={saveProfile}>
                  Save Profile
                </button>
              ) : (
                <button id="editProfileBtn" onClick={toggleEditMode}>
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default UserProfilePage