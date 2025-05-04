import React, { useState, useEffect } from "react";
import { FaStar, FaLock } from "react-icons/fa";

const LessonMap = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    // Mock data directly in component
    const mockLessons = [
      { id: 1, title: "Basics 1", stars: 3, locked: false, icon: "📘" },
      { id: 2, title: "Greetings", stars: 2, locked: false, icon: "👋" },
      { id: 3, title: "Food", stars: 0, locked: true, icon: "🍎" },
      { id: 4, title: "Animals", stars: 0, locked: true, icon: "🐶" },
    ];

    setLessons(mockLessons);
  }, []);

  return (
    <div className="flex flex-col items-center p-6 bg-[#f0f4ff] min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Language Journey</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className={`flex flex-col items-center justify-center w-28 h-28 rounded-full shadow-md
              ${lesson.locked ? "bg-gray-300" : "bg-yellow-300 hover:scale-105 transition-transform duration-300"}
            `}
          >
            <div className="text-2xl font-bold">
              {lesson.locked ? <FaLock /> : lesson.icon}
            </div>
            <p className="text-sm mt-2 text-center">{lesson.title}</p>
            <div className="flex mt-1">
              {[...Array(lesson.stars)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 text-xs" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonMap;
