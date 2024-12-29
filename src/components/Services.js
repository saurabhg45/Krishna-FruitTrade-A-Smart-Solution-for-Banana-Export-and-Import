import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVmGK-MDWpCt4pXZPdiVx8zYinY3jtJLf8u2HPYbHk-2KEZrxxGI3ctbEgDLipUS-RI-Y&usqp=CAU",
      title: "Global Export Solutions",
      description: "Seamless international shipping with temperature-controlled containers, ensuring bananas stay fresh across long distances."
    },
    {
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
      title: "Efficient Local Distribution",
      description: "Strong local networks guarantee timely delivery of fresh produce to ports and buyers across India."
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      title: "Market Insights & Analysis",
      description: "Up-to-date global market trends, price tracking, and demand analysis to help farmers and buyers make informed decisions."
    },
    {
      image: "https://media.istockphoto.com/id/1494763483/photo/banana-concept.jpg?s=612x612&w=0&k=20&c=ZeVP-L6ClmyT-i0N-QAbDK7q37uHhrzg7KOzMkaOtg4=",
      title: "tringent Quality Control",
      description: "Every shipment undergoes rigorous quality checks and certification to meet international export standards."
    },
    {
      image: "https://us.123rf.com/450wm/adsniks/adsniks2009/adsniks200900315/154883558-indian-farmer-talking-on-mobile-phone-at-agriculture-field.jpg?ver=6",
      title: "24/7 Farmer Support",
      description: "Dedicated helpline providing continuous guidance and assistance to farmers throughout the export process."
    },
    {
      image: "https://www.inboundlogistics.com/wp-content/uploads/cold-storage-warehouse-1024x682.jpg",
      title: "Advanced Cold Storage",
      description: "State-of-the-art cold storage facilities available for rent, ensuring bananas retain their quality and freshness."
    },
    {
      image: "https://s3-eu-west-1.amazonaws.com/yara-links/rmzq.jpg",
      title: "Expert Farming Consultation",
      description: "Specialized advice and training on banana cultivation, helping farmers improve yield and quality."
    }
  ];

  return (
    <div className="bg-white">
          {/* About Banner Section */}
          <section className="mt-36">
            <div className="container mx-auto px-6">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-semibold text-gray-800">Our Services</h2>
                <ul className="flex justify-center space-x-2 text-gray-600">
                  <li>
                    <a href="/home" title="home" className="hover:text-yellow-500">
                      Home
                    </a>
                  </li>
                  <li className="text-gray-400">/</li>
                  <li>Our Services</li>
                </ul>
              </div>
            </div>
          </section>



    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Services;