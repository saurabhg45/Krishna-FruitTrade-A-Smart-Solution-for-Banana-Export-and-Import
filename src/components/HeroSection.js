import React from 'react';
import { Truck, ShieldCheck, Globe2, Users } from 'lucide-react';
const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      
      {/* Hero Section */}
      <section id="home" className="pt-24 bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Global Banana Trade Excellence
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your trusted partner in premium banana imports and exports. Connecting farmers to global markets with quality and reliability.
              </p>
              <button className="bg-yellow-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors">
                Get Started
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80"
                alt="Fresh bananas"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Fresh Horizon</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1595475207225-428b62bda831?auto=format&fit=crop&q=80"
                alt="Banana plantation"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-gray-600 text-lg mb-6">
                Fresh Horizon is a leading banana import-export company with over 15 years of experience in the global fruit trade. We pride ourselves on maintaining the highest quality standards and building lasting relationships with farmers and distributors worldwide.
              </p>
              <p className="text-gray-600 text-lg">
                Our commitment to sustainable farming practices and fair trade ensures that we deliver not just premium products, but also contribute to the wellbeing of farming communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Truck className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Global Distribution</h3>
              <p className="text-gray-600">Efficient worldwide delivery network ensuring fresh produce reaches destinations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ShieldCheck className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous quality control measures at every stage of handling.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Globe2 className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Import/Export</h3>
              <p className="text-gray-600">Comprehensive import/export services with customs handling.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Partner Support</h3>
              <p className="text-gray-600">Dedicated support for our global network of partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Customer Feedback</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={`https://i.pravatar.cc/150?img=${i}`}
                    alt={`Customer ${i}`}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">John Doe {i}</h4>
                    <p className="text-gray-500">Fruit Distributor</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Fresh Horizon has been instrumental in growing our business. Their quality and reliability are unmatched in the industry."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default HeroSection;
