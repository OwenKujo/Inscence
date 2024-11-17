import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PinData } from "../context/PinContext";
import { UserData } from "../context/UserContext";
import PinCard from "../components/community/PinCard";
import Masonry from 'react-masonry-css'; // Import Masonry
import "../App.css"; // Include your App.css or custom styles

const UserProfile = ({ user: loggedInUser }) => {
  const params = useParams();
  const [user, setUser] = useState(null); // Start with null instead of an empty array

  // Fetch user data
  async function fetchUser() {
    try {
      const { data } = await axios.get(`/api/user/${params.id}`);
      setUser(data); // Set the fetched user data
    } catch (error) {
      console.log(error);
    }
  }

  const [isFollow, setIsFollow] = useState(false);
  const { followUser } = UserData();

  const followHandler = () => {
    setIsFollow(!isFollow);
    followUser(user._id, fetchUser);
  };

  useEffect(() => {
    if (user && loggedInUser && user.followers && loggedInUser._id) {
      if (user.followers.includes(loggedInUser._id)) setIsFollow(true);
    }
  }, [user, loggedInUser]);

  const { pins } = PinData();
  let userPins = [];

  if (pins && user) {
    userPins = pins.filter((pin) => pin.owner === user._id); // Filter pins based on user _id
  }

  useEffect(() => {
    fetchUser();
  }, [params.id]); // Ensure to re-fetch user data when params.id changes

  if (!user) {
    return <div>Loading...</div>; // Show loading until the user is fetched
  }

  // Define breakpoint columns for the masonry layout
  const breakpointColumnsObj = {
    default: 4,  // 4 columns by default
    1100: 3,     // 3 columns at 1100px
    700: 2,      // 2 columns at 700px
    500: 1,      // 1 column at 500px
  };

  return (
    <div>
      {user && (
        <div className="flex flex-col items-center justify-center">
          <div className="p-6 w-full">
            <div className="flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                {user.name && (
                  <span className="text-3xl text-gray-700">
                    {user.name.slice(0, 1)}
                  </span>
                )}
              </div>
            </div>

            <h1 className="text-center text-2xl font-bold mt-4">{user.name}</h1>
            <p className="text-center text-gray-600 mt-2">{user.email}</p>
            <p className="flex justify-center items-center text-center gap-3 text-gray-600 mt-2">
              {user.followers && <p>{user.followers.length} followers</p>}
              {user.following && <p>{user.following.length} followings</p>}
            </p>
            {user && loggedInUser && user._id === loggedInUser._id ? (
              ""
            ) : (
              <div className="flex justify-center mt-4 space-x-2">
                <button
                  onClick={followHandler}
                  className="bg-gray-200 px-4 py-2 rounded"
                >
                  {isFollow ? "Unfollow" : " Follow"}
                </button>
              </div>
            )}
            
            <div className="mt-4">
              {/* Masonry grid container */}
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid" // default Masonry CSS
                columnClassName="my-masonry-grid_column"
              >
                {userPins && userPins.length > 0 ? (
                  userPins.map((pin) => (
                    <div key={pin._id}>
                      <PinCard pin={pin} />
                    </div>
                  ))
                ) : (
                  <p>No post Yet</p>
                )}
              </Masonry>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
