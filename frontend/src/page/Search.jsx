import React, { useState } from 'react';
import Card_recommend from '../components/Card_recommend'
import Card_All_show from '../components/Card_All_show'
const Search = () => {
  const [IsdropdownOpen, setIsdropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('All');
  const setdropdown = () => {
    setIsdropdownOpen(!IsdropdownOpen);
  };
  const optionvalues = [
    { Name: "All", Value: "all" },
    { Name: "Name of Series and Movie", Value: "Seriesandmovie" },
    { Name: "Actor", Value: "actor" },
    { Name: "Location", Value: "Location" },
  ];
  
  return (
    <div className="min-h-screen  py-10 px-4 ">
      <form className="max-w-lg mx-auto mt-20">
        <div className="flex ">
          <label htmlFor="search-dropdown" className="sr-only text-sm font-medium text-gray-900 dark:text-white">
            Search
          </label>
          <button
            id="dropdown-button"
            className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button"
            onClick={setdropdown}
          >
           {selectedOption}
            <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

         

          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Searching..."
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-500 rounded-e-lg border border-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
        <div
            id="dropdown"
            className={`z-10 ${IsdropdownOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
  {optionvalues.map((option) => (
    <li key={option.Value}>
      <button
        type="button"
        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={() => {
          setSelectedOption(option.Name);
          setIsdropdownOpen(false);
        }}
      >
        {option.Name}
      </button>
    </li>
  ))}
</ul>
          </div>
      </form>
      <div className="max-w-lg mx-auto mt-4">
  <ul className="flex justify-center gap-6 text-gray-500 text-sm">
    <li className="font-semibold text-black cursor-pointer">All</li>
    <li className="cursor-pointer hover:text-black">Restaurant</li>
    <li className="cursor-pointer hover:text-black">Thai Old town</li>
    <li className="cursor-pointer hover:text-black">Sea</li>
    <li className="cursor-pointer hover:text-black">Mountain</li>
    <li className="cursor-pointer hover:text-black">Thai Food</li>
  </ul>
</div>
<div className="mt-5 ">
<h1 className='text-[20px] font-body font-bold text-[#000000] mb-4 '>
            Result
          </h1>
<Card_recommend /></div>
    </div>
  );
};

export default Search;
