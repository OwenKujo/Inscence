import React, { useState } from 'react';
import { LoadingAnimation } from "../components/community/Loading";
import shoepic from '/src/assets/login/student.jpg';
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../context/UserContext";
import { PinData } from "../context/PinContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { loginUser,btnLoading } = UserData();
    const navigate = useNavigate();
    const { fetchPins } = PinData();

    const submitHandler = (e) => {
        e.preventDefault();
        loginUser(email, password, navigate, fetchPins);
    };

    return (
        <div>
            <div className="bg-cover bg-center min-h-screen font-body" style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${shoepic})`
            }}>
                <h2 className="text-5xl font-bold mb-8 text-center invisible">ffd</h2>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-5 mx-auto my-32">
                    <h2 className="text-4xl font-bold mb-8 text-center">Log In</h2>
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                            >
                            Email
                            </label>
                            <input 
                                className="rounded-md p-2 w-full border border-gray-300 block mb-10"
                                type="email" 
                                id="email" 
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                            >
                            Password
                            </label>
                            <input 
                                className="rounded-md p-2 w-full border border-gray-300 mb-3"
                                type="password" 
                                id="password" 
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="common-btn" disabled={btnLoading}>
                            {btnLoading ? <LoadingAnimation /> : "Enter"}
                        </button>
                    </form>


                    
                    <div className="form-group flex flex-col">
                        <div className='t-4 text-center text-sm mt-5'>
                            <span>
                                Not a member?
                                <Link to="/signin" className="text-[#24BAEC] font-medium text-pinterest hover:underline"> Signin</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
