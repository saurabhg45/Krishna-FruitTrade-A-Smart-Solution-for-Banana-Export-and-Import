import React from 'react'

export default function Feedback() {
    const feedbacks = [
        {
          name: "John Doe",
          message: "Excellent service! The team is responsive and the quality is top-notch.",
          rating: 5,
          imgSrc: "https://images.hindustantimes.com/img/2022/12/12/550x309/_38b36c44-c6e8-11e9-9ed0-dd7a6b36c3ad_1670826748640_1670826748640.jpg",
        },
        {
          name: "Jane Smith",
          message: "The best food export service I have experienced. Highly recommend it!",
          rating: 5,
          imgSrc: "https://images.hindustantimes.com/img/2022/12/12/550x309/_38b36c44-c6e8-11e9-9ed0-dd7a6b36c3ad_1670826748640_1670826748640.jpg",
        },
        {
          name: "Michael Clark",
          message: "Great quality products and timely delivery. I'm very satisfied.",
          rating: 4,
          imgSrc: "https://images.hindustantimes.com/img/2022/12/12/550x309/_38b36c44-c6e8-11e9-9ed0-dd7a6b36c3ad_1670826748640_1670826748640.jpg",
        },
      ];
    
      return (
        <div className="bg-white">
          <section className="mt-36">
            <div className="container mx-auto px-6">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-semibold text-gray-800">About Us</h2>
                <ul className="flex justify-center space-x-2 text-gray-600">
                  <li>
                    <a href="/home" title="home" className="hover:text-yellow-500">
                      Home
                    </a>
                  </li>
                  <li className="text-gray-400">/</li>
                  <li>What Our Customers Say</li>
                </ul>
              </div>
            </div>
          </section>

        <section className="feedback-section py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-8">
              {feedbacks.map((feedback, index) => (
                <div key={index} className="feedback-card max-w-xs bg-white p-6 rounded-lg shadow-lg hover:transform hover:translate-y-2 transition-transform duration-300">
                  <img 
                    src={feedback.imgSrc} 
                    alt={`User ${feedback.name}`} 
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-xl font-semibold text-gray-700">{feedback.name}</h4>
                  <p className="text-gray-500 mb-4">{feedback.message}</p>
                  <div className="rating mb-4">
                    {"★".repeat(feedback.rating)}
                    {"☆".repeat(5 - feedback.rating)}
                  </div>
                  <p className="text-sm text-gray-400">Rated: {feedback.rating}/5</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        </div>
      );
}
