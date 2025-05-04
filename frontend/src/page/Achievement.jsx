import React, { useState } from 'react';
import initialAchievements from '../components/testjson/achievement.json'; 

const AchievementScreen = () => {
    const [achievements, setAchievements] = useState(initialAchievements);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeAchievement, setActiveAchievement] = useState(null);
    const incrementAchievementCount = () => {
        const updated = achievements.map(ach => {
            if (ach.title === activeAchievement.title) {
                const newCount = ach.count + 1;
                return {
                    ...ach,
                    count: newCount,
                    completed: newCount >= ach.goal
                };
            }
            return ach;
        });
    
        setAchievements(updated);

        const updatedActive = updated.find(ach => ach.title === activeAchievement.title);
        setActiveAchievement(updatedActive);
    };
    const simulateLogin = () => {
        const updated = achievements.map(ach => {
            if (ach.type === 'login' && !ach.completed) {
                const newCount = ach.count + 1;
                return {
                    ...ach,
                    count: newCount,
                    completed: newCount >= ach.goal
                };
            }
            return ach;
        });
        setAchievements(updated);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-white py-10 px-4 mt-15">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-2 mt-20">🎯 Your Achievements</h1>
                <p className="text-center text-gray-600 mb-10">Track your progress and unlock new badges!</p>

                <div className="grid gap-6">
                {achievements.map((achievement, index) => {
    const progressPercent = Math.min((achievement.count / achievement.goal) * 100, 100);

    return (
        <div 
            key={index}
            onClick={() =>  (() => {
                setActiveAchievement(achievement);
                setIsModalOpen(true);
            })()}
            className={`transition-shadow p-5 rounded-xl shadow-md hover:shadow-xl cursor-pointer bg-white border-l-4`}
            style={{ borderLeftColor: achievement.color }}
        >
            <div className="flex items-center space-x-4">
                <div
                    className="w-14 h-14 flex items-center justify-center rounded-full text-2xl font-bold text-white"
                    style={{ backgroundColor: achievement.color }}
                >
                    {achievement.completed ? '🏆' : '🔓'}
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-800">
                        {achievement.title} ({achievement.count}/{achievement.goal})
                    </h3>
                    <p className="text-sm text-gray-500">{achievement.description}</p>
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                        <div
                            className="h-full rounded-full"
                            style={{ width: `${progressPercent}%`, backgroundColor: achievement.color }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
})}

                </div>

               

                {/* Modal */}
                {isModalOpen && activeAchievement && (
    activeAchievement.completed ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-2xl w-[90%] max-w-sm text-center animate-fade-in">
                <div
                    className="w-20 h-20 mx-auto rounded-full border-4 border-black flex items-center justify-center mb-4 text-white text-4xl"
                    style={{ backgroundColor: activeAchievement.color }}
                >
                    🏆
                </div>
                <h3 className="text-2xl font-bold mb-2">{activeAchievement.title} ({activeAchievement.count}/{activeAchievement.goal})</h3>
                <p className="text-gray-600 mb-6">{activeAchievement.description}</p>
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="hover:bg-yellow-600 text-white px-5 py-2 rounded-lg font-semibold"
                    style={{ backgroundColor: activeAchievement.color }}
                >
                    Receive Reward!!
                </button>
            </div>
        </div>
    ) : (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-2xl w-[90%] max-w-sm text-center animate-fade-in">
                <div
                    className="w-20 h-20 mx-auto rounded-full border-4 border-black flex items-center justify-center mb-4 text-white text-4xl"
                    style={{ backgroundColor: activeAchievement.color }}
                >
                    🔓
                </div>
                <h3 className="text-2xl font-bold mb-2">{activeAchievement.title} ({activeAchievement.count}/{activeAchievement.goal})</h3>
                <p className="text-gray-600 mb-6">{activeAchievement.description}</p>
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="hover:bg-yellow-600 text-white px-5 py-2 rounded-lg font-semibold"
                    style={{ backgroundColor: activeAchievement.color }}
                >
                    Close
                </button>
                <button
                    onClick={incrementAchievementCount}
                    className="hover:bg-yellow-600 text-white px-5 py-2 rounded-lg font-semibold ml-5"
                    style={{ backgroundColor: activeAchievement.color }}
                >
                    Add one
                </button>
            </div>
        </div>
    )
)}

            </div>
        </div>
    );
};

export default AchievementScreen;