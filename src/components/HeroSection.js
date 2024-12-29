import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://pisumfoods.com/img/banner/banner-banana.jpg", // First slide (previous image)
    "https://www.shutterstock.com/image-photo/cargo-container-ship-vessel-carrying-260nw-2341638353.jpg", // Dummy banana image 1
    "https://www.shutterstock.com/image-photo/young-indian-farmer-banana-agriculture-600nw-2083696240.jpg", // Dummy banana image 2
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const varieties = [
    { name: "Dwarf Cavendish", description: "Widely grown, commercially important Cavendish cultivar.", image: "https://5.imimg.com/data5/GLADMIN/Default/2022/6/VR/GP/GZ/92368/bananas-250x250.jpg" },
    { name: "Basrai", description: "Leading commercial variety grown in Maharashtra.", image: "https://img1.exportersindia.com/product_images/bc-small/2024/2/4352642/fresh-green-bananas-1707803480-7291442.jpeg" },
    { name: "Robusta", description: "Large-sized bananas perfect for various culinary uses.", image: "https://smithfreshfarm.com/wp-content/uploads/2022/08/ROBUST.jpg" },
    { name: "Lal Velchi", description: "Sweet and aromatic variety, popular in Tamil Nadu and Kerala.", image: "https://cdn.ecommercedns.uk/files/7/237157/0/39713730/red-banana.jpg" },
    { name: "Safed Velchi", description: "Premium quality, medium-sized bananas from Maharashtra.", image: "	https://4.imimg.com/data4/KK/KK/GLADMIN-/product-9728_banana_yellaki-500x500.png" },
    { name: "Rajeli Nendran", description: "Starchy bananas with thick green skin turning buff yellow.", image: "https://5.imimg.com/data5/VG/DN/QY/SELLER-24045077/rajela-bananas-1000x1000.jpg" },
  ];

  const groupedVarieties = [];
  for (let i = 0; i < varieties.length; i += 2) {
    groupedVarieties.push(varieties.slice(i, i + 2));
  }

 

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Carousel */}
      <section id="home" className="relative w-full h-[75vh] overflow-hidden">
        <div className="absolute inset-0 flex transition-transform duration-700" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide})` }}
            ></div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl p-6 rounded-md">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Indian Banana Exporters
            </h1>
            <p className="text-lg md:text-xl">
              Connecting Indian farmers to global markets with top-quality bananas, sustaining growth, and building trust worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Our Export</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                The export of Fruits products from India is on the rise year after year. Banana export from India is one of the rapidly growing export markets. Being one of the largest banana exporters in the world, Indian farmers have successfully entered the global market. To meet export standards, health and quality standards are maintained throughout the process.
              </p>
              <p className="text-gray-600 text-lg">
                With premium quality assurance and sustainability, we deliver top-notch products worldwide. Our commitment to excellence has positioned us as a trusted name in the global banana trade.
              </p>
            </div>
            <div>
              <img
                src="https://pisumfoods.com/img/banner/ship.jpg"
                alt="Professional export shipping"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nutritional Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Nutritional Value of Bananas</h2>
          <div className="overflow-x-auto">
            <table className="w-1/2 mx-auto text-left text-gray-600 border-collapse border border-gray-200 mx-auto">
              <thead>
                <tr className="bg-yellow-50 text-gray-700">
                  <th className="px-4 py-2 border border-gray-200">Category</th>
                  <th className="px-4 py-2 border border-gray-200">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-yellow-100">
                  <td className="px-4 py-2 border border-gray-200">Nutrients</td>
                  <td className="px-4 py-2 border border-gray-200">Net Carbs - 24g, Fiber - 3.1g, Calories - 89g/100g</td>
                </tr>
                <tr className="hover:bg-yellow-100">
                  <td className="px-4 py-2 border border-gray-200">Minerals</td>
                  <td className="px-4 py-2 border border-gray-200">Potassium, Calcium, Magnesium, Iron, Manganese</td>
                </tr>
                <tr className="hover:bg-yellow-100">
                  <td className="px-4 py-2 border border-gray-200">Vitamins</td>
                  <td className="px-4 py-2 border border-gray-200">Vitamin B6, Vitamin B12</td>
                </tr>
                <tr className="hover:bg-yellow-100">
                  <td className="px-4 py-2 border border-gray-200">Protein</td>
                  <td className="px-4 py-2 border border-gray-200">1.1g/100g</td>
                </tr>
                <tr className="hover:bg-yellow-100">
                  <td className="px-4 py-2 border border-gray-200">Fats</td>
                  <td className="px-4 py-2 border border-gray-200">0.3g/100g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Banana Varieties Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Banana Varieties We Export</h2>
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {groupedVarieties.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className={`carousel-item ${groupIndex === currentSlide ? "active" : ""}`}
                >
                  <div className="flex justify-center space-x-6">
                    {group.map((variety, index) => (
                      <div key={index} className="w-[300px] bg-gray-50 p-6 rounded-lg shadow-md">
                        <img
                          src={variety.image}
                          alt={variety.name}
                          className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-3">{variety.name}</h3>
                        <p className="text-gray-600">{variety.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev absolute top-1/2 left-0 transform -translate-y-1/2 text-2xl text-gray-600"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true">&lt;</span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next absolute top-1/2 right-0 transform -translate-y-1/2 text-2xl text-gray-600"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true">&gt;</span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* Additional Content Below */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-4">Fresh Horizon - Your Trusted Partner in Banana Exports from India</h3>
            <p className="text-gray-600 text-lg">
              If you're looking to export premium-quality bananas from India, Fresh Horizon is your ideal partner! With over 5 years of experience in banana exports, Fresh Horizon connects farmers to markets worldwide, ensuring the finest bananas reach international shores. Due to the rising global demand, Fresh Horizon exports bananas to countries like Abu Dhabi, Saudi Arabia, Oman, and Bahrain. As one of the leading banana exporters from India, Fresh Horizon guarantees top-quality produce and seamless delivery. Looking to import the best bananas? Fresh Horizon is here to meet your needs!
            </p>
          </div>
        </div>
      </section>

      {/* Global Map */}
      
      {/* <section className="py-20 bg-[#001B3D]">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Global Country Where We Export Bananas
          </h3>
        </div>

        
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative">
            <img
              src="https://www.exportimportdata.in/content/images/export-import-countries.svg"
              alt="Global Trade Data"
              className="w-full"
              style={{
                filter: 'brightness(1.2)',
                mixBlendMode: 'lighten',
              }}
            />
          </div>
        </div>
      </div>
    </section> */}

    </div>
  );
};

export default HeroSection;
