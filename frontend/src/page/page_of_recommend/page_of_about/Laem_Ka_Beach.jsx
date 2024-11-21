import img1 from '../../../assets/sunset_about_you/Laem_Ka_Beach/img1.jpg';
import img2 from '../../../assets/sunset_about_you/Laem_Ka_Beach/img2.jpg';
import img3 from '../../../assets/sunset_about_you/Laem_Ka_Beach/img3.jpg';
import img4 from '../../../assets/sunset_about_you/Laem_Ka_Beach/img4.jpg';



const Laem_Ka_Beach = () => {
  const images = [img1, img2, img3, img4];
  const reviews = [
    {
      id: 1,
      user: "Jane Doe",
      avatar: "https://via.placeholder.com/50?text=JD",
      review:
        "A beautiful and serene beach! The water is crystal clear, and the atmosphere is so peaceful. Highly recommend for a relaxing day.",
      rating: 5,
    },
    {
      id: 2,
      user: "John Smith",
      avatar: "https://via.placeholder.com/50?text=JS",
      review:
        "Great spot for swimming and relaxing. The beach is clean, and there are plenty of shady spots under the trees.",
      rating: 4,
    },
    {
      id: 3,
      user: "Emily White",
      avatar: "https://via.placeholder.com/50?text=EW",
      review:
        "The beach is gorgeous, but it gets a bit crowded during the weekends. Go early to grab a good spot.",
      rating: 4,
    },
    {
      id: 4,
      user: "Michael Brown",
      avatar: "https://via.placeholder.com/50?text=MB",
      review:
        "Perfect for families! My kids loved playing in the calm water, and we had a great picnic by the shore.",
      rating: 5,
    },
  ];
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
        </div>

        {/* Image Gallery */}
        <div className="mt-6 flex space-x-2 overflow-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-24 h-24 bg-gray-200 rounded-md flex-shrink-0"
            >
              <img
                src={image}
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
            This Cape is located approximately 16 kilometers from the town
            center at the extreme southwest end of Chalong Bay. Ideal for
            swimming, the Beach is clean, quiet, and dotted with rocks.
          </p>
        </div>

        {/* Reviews */}
        <div className="mt-6">
          <h2 className="text-lg font-bold">Reviews</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-gray-100 p-4 rounded-lg shadow-md flex items-start space-x-4"
              >
                <img
                  src={review.avatar}
                  alt={review.user}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{review.user}</p>
                  <p className="text-gray-600 text-sm mt-1">{review.review}</p>
                  <p className="text-yellow-500 mt-1">⭐ {review.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laem_Ka_Beach;
