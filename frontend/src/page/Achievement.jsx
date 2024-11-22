import React, { useState } from 'react';

const AchievementScreen = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const achievements = [
        {
            title: "Registration Successful (1/1)",
            description: "You have successfully completed your registration.",
            completed: true,
        },
        {
            title: "Check in followed Thai Series! (1/3)",
            description: "You followed the location of Thai series and share with us!",
            completed: false,
        },
        {
            title: "Check in followed BL Series! (1/3)",
            description: "You followed the location of Thai Boy Love series and share with us!",
            completed: false,
        },
    ];

    return (
        <div className="min-h-screen font-body bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                <h2 className="text-center text-2xl font-semibold mb-4">Achievement 1</h2>
                <p className="text-center font-medium text-gray-500 mb-8">Super Community Fan</p>
                
                <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                        <div 
                            key={index} 
                            onClick={() => achievement.completed && setIsModalOpen(true)}
                            className={`p-4 rounded-lg shadow-md cursor-pointer ${achievement.completed ? 'bg-blue-400' : 'bg-white'}`}
                        >
                            <div className="flex items-center">
                                <span 
                                    className={`inline-block w-8 h-8 rounded-full p-4 mr-4 ${achievement.completed ? 'bg-yellow-400' : 'bg-gray-400'}`}
                                ></span>
                                <div>
                                    <p className="font-bold">{achievement.title}</p>
                                    <p className="text-sm text-gray-600">{achievement.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center relative">
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-yellow-400 rounded-full border-4 border-black flex items-center justify-center">
                                <span className="text-3xl font-bold text-white">🏆</span>
                            </div>
                            <h3 className="text-xl font-bold mt-12 mb-4">Registration Successful (1/1)</h3>
                            <p className="text-gray-600 mb-6">You have successfully completed your registration.</p>
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="bg-yellow-500 text-white px-6 py-2 rounded-md font-bold hover:bg-yellow-600"
                            >
                                Share
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AchievementScreen;
