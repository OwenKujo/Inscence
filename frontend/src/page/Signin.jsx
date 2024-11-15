import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shoepic from '/src/assets/login/student.jpg';
const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setmail] = useState('');
    const handleLogin = () => {
        alert(`Username: ${username}\nPassword: ${password}`);
    };

    return (
        <div>
            <div className="bg-cover bg-center min-h-screen font-roboto" style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${shoepic})`
                }}>
                <h2 className="text-5xl font-bold mb-8 text-center invisible">ffd</h2>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-5 mx-auto my-32">
                    <h2 className="text-5xl font-bold mb-8 text-center">Sign In</h2>
                    <div className="form-group">
                        <input 
                            className="rounded-md p-2 w-full border border-gray-300 block mb-10"
                            type="text" 
                            id="username" 
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            className="rounded-md p-2 w-full border border-gray-300 mb-10"
                            type="password" 
                            id="password" 
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            className="rounded-md  p-2 w-full border border-gray-300"
                            type="Email" 
                            id="Email" 
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group flex flex-col">
                       
                        <button className="p-2 bg-blue-400 text-white rounded-md hover:bg-black items-center mt-5" >Enter</button> 
                        <Link to="/Login" className="text-red-500 text-sm underline text-center block mt-5">Log in?</Link>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
