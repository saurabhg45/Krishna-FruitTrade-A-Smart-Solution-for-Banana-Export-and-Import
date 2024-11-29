import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: "John Doe", feedback: "This platform simplified my export business." },
    { name: "Amit Kumar", feedback: "As a farmer, I now get fair prices for my produce." },
    { name: "Jane Smith", feedback: "Seamless and user-friendly experience." }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">What Our Users Say</h2>
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="text-center">
                <p className="lead">"{testimonial.feedback}"</p>
                <h5>- {testimonial.name}</h5>
              </div>
            </div>
          ))}
        </div>
        <button 
          className="carousel-control-prev" 
          type="button" 
          data-bs-target="#testimonialCarousel" 
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button 
          className="carousel-control-next" 
          type="button" 
          data-bs-target="#testimonialCarousel" 
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
