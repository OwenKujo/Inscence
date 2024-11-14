import React, { useState } from 'react';
import shoepic from '/src/assets/login/student.jpg';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
                    <h2 className="text-5xl font-bold mb-8 text-center">Log In</h2>
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
                            className="rounded-md p-2 w-full border border-gray-300"
                            type="password" 
                            id="password" 
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group flex flex-col">
                        <div className="text-gray-500 text-sm underline items-right text-right block mb-5 invisible">Forgot password</div>
                        <button className="p-3 bg-blue-400 text-white rounded-md hover:bg-black items-center" onClick={handleLogin}>Enter</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
