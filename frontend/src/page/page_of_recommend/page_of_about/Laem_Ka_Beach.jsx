// import React from 'react'
// import About_You from '../../About_moreDetail'

const Laem_Ka_Beach = () => {
  return (
    <div>
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold">Laem Ka Beach</h1>
        <p className="text-gray-500">Mueang Phuket District, Phuket</p>
      </div>

      {/* Location Details */}
      <div className="mt-4 flex justify-between items-center">
        <p className="text-gray-700 font-semibold">Thailand</p>
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500 font-bold">⭐ 4.7</span>
          <span className="text-gray-500">(2498)</span>
        </div>
        <p className="text-gray-700 font-semibold">850 THB/person</p>
      </div>

      {/* Image Gallery */}
      <div className="mt-6 flex space-x-2 overflow-auto">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="w-24 h-24 bg-gray-200 rounded-md flex-shrink-0"
          >
            {/* Replace with actual images */}
            <img
              src={`https://via.placeholder.com/100?text=Image+${index + 1}`}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className="mt-6">
        <h2 className="text-lg font-bold">About Laem Ka</h2>
        <p className="text-gray-600 mt-2">
          This Cape is located approximately 16 kilometers from the town center
          at the extreme southwest end of Chalong Bay. Ideal for swimming, the
          Beach is clean, quiet, and dotted with rocks.
        </p>
      </div>

      {/* Reviews */}
      <div className="mt-6">
        <h2 className="text-lg font-bold">Reviews</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md flex items-start space-x-4"
            >
              <img
                src={`https://via.placeholder.com/50?text=User`}
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">User {index + 1}</p>
                <p className="text-gray-600 text-sm mt-1">
                  Sample review text goes here for this placeholder.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Laem_Ka_Beach