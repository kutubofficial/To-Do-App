import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.patch(
          "http://localhost:9001/v1/users/update-profile",
          { userId: "12345" },
          { withCredentials: true } 
        );

        console.log("User Data:", response.data.user);
        setUserData(response.data.user);
        toast.success("welcom to your profile.!!")
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUserData();
  }, []);
// console.log(userData);
  return (
    <div className="profile">
      <div className="heading">
      <h2>User Profile</h2>
      </div>
      <div className="profile-container">
      {userData ? (
        <div>
          <img
            src={userData.profilePicture}
            alt="Profile"
            style={{ width: "150px", height: "150px",borderRadius: "50%" }}
          />
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Role:</strong> {userData.role}
          </p>
          <p>
            <strong>Total Tasks:</strong> {userData.totalNumberOfTasks}
          </p>
          <button>update profile</button>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
    </div>
  );
};

export default Profile;
