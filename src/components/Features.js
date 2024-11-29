import React from 'react';

const Features = () => {
  const features = [
    'Instant purchasing and order placement',
    'Container tracking and shipment updates',
    'Multi-currency support for global buyers',
    'Real-time price trends and insights',
    'Local language support for farmers'
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Why Choose Us</h2>
      <div className="row">
        {features.map((feature, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{`Feature ${index + 1}`}</h5>
                <p className="card-text">{feature}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
