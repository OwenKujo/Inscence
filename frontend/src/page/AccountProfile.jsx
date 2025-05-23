import React from "react";
import { PinData } from "../context/PinContext";
import PinCard from "../components/community/PinCard";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserData } from "../context/UserContext";  // Import UserData

const Account = () => {
  const navigate = useNavigate();
  const { user, setIsAuth, setUser } = UserData();  // Get user from UserContext

  // Ensure that user is available before rendering the component
  if (!user) {
    return <div>Loading...</div>;  // Return a loading indicator if user data is not available
  }

  const logoutHandler = async () => {
    try {
      const { data } = await axios.get("/api/user/logout");
      toast.success(data.message);
      navigate("/login");
      setIsAuth(false);
      setUser(null);  // Set user to null after logging out
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed.");
    }
  };

  const { pins } = PinData();

  // Filter pins for the logged-in user
  let userPins = [];
  if (pins && user) {
    userPins = pins.filter((pin) => pin.owner === user._id);
  }

  return (
    <div className="mt-[60px]">
      <div className="flex flex-col items-center justify-center">
        <div className="p-4 w-full max-w-6xl">
          <div className="flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
              {/* Display the first letter of the user's name */}
              <span className="text-3xl text-gray-700">
                {user.name ? user.name.slice(0, 1) : "U"}
              </span>
            </div>
          </div>

          <h1 className="text-center text-2xl font-bold mt-4">{user.name}</h1>
          <p className="text-center text-gray-600 mt-2">{user.email}</p>
          <div className="flex justify-center mt-4 space-x-2">
            <button onClick={logoutHandler} className="bg-gray-200 px-4 py-2 rounded">
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {userPins && userPins.length > 0 ? (
              userPins.map((e) => <PinCard key={e._id} pin={e} />)
            ) : (
              <p>No Post Yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
