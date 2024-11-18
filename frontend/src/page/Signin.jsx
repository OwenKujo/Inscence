import React, { useState } from 'react';
import { LoadingAnimation } from "../components/community/Loading";
import { Link, useNavigate } from 'react-router-dom';
import shoepic from '/src/assets/login/student.jpg';
import { UserData } from "../context/UserContext";
import { PinData } from "../context/PinContext";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
  
    const { registerUser, btnLoading } = UserData();
    const navigate = useNavigate();
  
    const { fetchPins } = PinData();
  
    const submitHandler = (e) => {
      e.preventDefault();
      registerUser(name, email, password, navigate, fetchPins);
    };

    return (
        <div className='font-body'>
            <div className="bg-cover bg-center min-h-screen font-roboto" style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${shoepic})`
                }}>
                <h2 className="text-5xl font-bold mb-8 text-center invisible">ffd</h2>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-5 mx-auto my-32">
                    <h2 className="text-4xl font-bold mb-8 text-center">Sign In</h2>
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                            >
                            Username
                            </label>
                            <input 
                                className="rounded-md p-2 w-full border border-gray-300 block mb-5"
                                type="text" 
                                id="name" 
                                placeholder="Enter username"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label
                            htmlFor="passwor"
                            className="block text-sm font-medium text-gray-700 mb-1"
                            >
                            Password
                            </label>
                            <input 
                                className="rounded-md p-2 w-full border border-gray-300 mb-5"
                                type="password" 
                                id="password" 
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label
                            htmlFor="Email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                            >
                            Email
                            </label>
                            <input 
                                className="rounded-md  p-2 w-full border border-gray-300 mb-2"
                                type="Email" 
                                id="Email" 
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="common-btn" disabled={btnLoading}>
                            {btnLoading ? <LoadingAnimation /> : "Enter"}
                        </button>
                    </form>
                    <div className="form-group flex flex-col">
                        <Link to="/Login" className="text-[#24BAEC] text-sm hover:underline font-medium text-center block mt-5">Log in ?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
