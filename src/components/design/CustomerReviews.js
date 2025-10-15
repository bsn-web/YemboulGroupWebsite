"use client";
import { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaUserAlt } from 'react-icons/fa';

const CustomerReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Amina",
      role: "IT Engineer",
      rating: 5,
      review: "The team transformed our outdated home into a modern masterpiece. Their attention to detail and creative solutions exceeded all our expectations. We couldn't be happier with the results!",
    },
    {
      id: 2,
      name: "Maria",
      role: "Business Owner",
      rating: 5,
      review: "Our office renovation was completed on time and within budget. The design perfectly balances functionality with aesthetic appeal. Highly recommend their services.",
    },
    {
      id: 3,
      name: "Meriem",
      role: "Hotel Manager",
      rating: 5,
      review: "The boutique hotel restoration preserved our building's historic charm while incorporating all modern comforts. Guests constantly compliment the beautiful design.",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400 w-4 h-4" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 w-4 h-4" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400 w-4 h-4" />);
      }
    }

    return stars;
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light tracking-tight text-gray-900 mb-2 text-center">
          Client <span className="font-medium">Testimonials</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Hear what our clients say about our exceptional services 
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="relative h-64 md:h-auto md:w-1/3 flex justify-center items-center">
                <div className="bg-principal rounded-full p-6 flex justify-center items-center z-20">
                  <FaUserAlt className="text-white w-24 h-24 md:w-32 md:h-32" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-principal to-principal md:bg-gradient-to-r md:from-principal md:to-principal z-10"></div>
                <div className="absolute bottom-6 left-6 md:bottom-auto md:top-6 md:left-auto md:right-6 z-30">
                  <div className="text-white">
                    <h3 className="text-xl font-medium">{reviews[currentReview].name}</h3>
                    <p className="text-gray-200 text-sm">{reviews[currentReview].role}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:w-2/3">
                <div className="flex mb-4">
                  {renderStars(reviews[currentReview].rating)}
                  <span className="ml-2 text-sm text-gray-600">
                    {reviews[currentReview].rating.toFixed(1)}
                  </span>
                </div>

                <FaQuoteLeft className="text-gray-300 text-2xl mb-4" />

                <p className="text-gray-700 mb-6 italic">
                  {reviews[currentReview].review}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Review {currentReview + 1} of {reviews.length}
                  </span>

                  <div className="flex space-x-2">
                    <button
                      onClick={prevReview}
                      className="p-2 rounded-full bg-principal text-white hover:bg-bleufonce transition-colors"
                      aria-label="Previous review"
                    >
                      <FaChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextReview}
                      className="p-2 rounded-full bg-principal text-white hover:bg-bleufonce transition-colors"
                      aria-label="Next review"
                    >
                      <FaChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${currentReview === index ? 'bg-principal' : 'bg-blue-300'}`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
