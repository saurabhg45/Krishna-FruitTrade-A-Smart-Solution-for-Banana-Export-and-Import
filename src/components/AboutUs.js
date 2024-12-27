import React, { useState } from 'react'
import { Target, Eye,CheckCircle, Award, ShieldCheck, Clock, Lightbulb } from 'lucide-react';

export default function AboutUs() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
  
    // Function to validate email format
    const validateEmail = (email) => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(email);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
      setEmailError(""); // Clear error message when email is modified
    };
  
    const handleEnquireNowClick = () => {
      if (!validateEmail(email)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setIsModalOpen(true);
      }
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
    return (
        <div className="bg-white">
          {/* About Banner Section */}
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
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </section>
    
          {/* About Story Section */}
          <section className="pt-24 pb-24 mx-auto">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Image Section */}
                <div>
                  <div className="story-img">
                    <img
                      src="https://pisumfoods.com/img/banner/ship.jpg"
                      alt="Ship transporting goods"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>
    
                {/* Text Details Section */}
                <div className="flex flex-col justify-center mt-8 lg:mt-0">
                  <div className="story-details">
                    <h2 className="text-3xl font-semibold text-gray-800">
                      WELCOME TO <span className="text-yellow-500">FRESH HORIZON</span>
                    </h2>
                  </div>
                  <div className="story-details-bottom mt-4">
                    <p className="text-lg text-gray-600 leading-relaxed">
                     
Fresh Horizon Exports was established in 2018 with a mission to deliver the finest quality bananas and fresh produce to international markets. Over the past 5+ years, Fresh Horizon has grown into a trusted name in the agricultural export industry. With strong ties to farmers across India, we specialize in exporting premium bananas and fresh fruits to countries like Abu Dhabi, Saudi Arabia, Kuwait, Oman, and Bahrain.
At Fresh Horizon, we are committed to connecting Indian farmers with global markets, ensuring fresh and quality produce reaches every corner of the world. Our extensive experience and dedication to excellence make us one of the leading exporters in the industry. Whether you're looking for reliable fruit exports or premium Indian produce, Fresh Horizon is your trusted partner!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

            {/* About Vision/Mission Section */}
            <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center text-center">
          
          {/* Mission Section */}
          <div className="flex flex-col items-center">
            <div className="bg-yellow-100 p-6 rounded-full mb-6 transition-transform transform hover:scale-110">
              <Target className="h-12 w-12 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">OUR MISSION</h3>
            <p className="text-gray-600">
            To connect Indian farmers with global markets <br/> by exporting the highest quality bananas and fresh produce,<br/> ensuring freshness, sustainability,  and excellence in every shipment.
            </p>
          </div>
          
          {/* Vision Section */}
          <div className="flex flex-col items-center">
            <div className="bg-yellow-100 p-6 rounded-full mb-6 transition-transform transform hover:scale-110">
              <Eye className="h-12 w-12 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">OUR VISION</h3>
            <p className="text-gray-600">
            To become a globally trusted name in banana exports,<br/> enriching lives worldwide by delivering farm-fresh produce and <br/>fostering long-term relationships across borders.
            </p>
          </div>

        </div>
      </div>
    </section>

    {/* About Values Section */}   
    <section className="mt-12 pt-12 px-6">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <div className="mb-12">
          <div className="flex justify-center items-center mb-4">
            <img
              className="w-12 h-12"
              src="https://pisumfoods.com/img/icon-img/49.png" // Replace with the actual path for your leaf icon
              alt="Leaf icon"
            />
           </div>
          <h2 className="text-3xl font-bold text-gray-800 inline-block border-b-4 border-green-500 pb-1">
            Values
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Best Quality Services */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition transform">
            <div className="flex items-center justify-center mb-4 text-yellow-500">
              <CheckCircle className="h-12 w-12" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Best Quality Produce</h4>
            <p className="text-gray-600">
            
            We ensure only the freshest and highest quality bananas are exported, preserving taste and nutrition at every step.
            </p>
          </div>

          {/* Vast Experience in Food Trading */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition transform">
            <div className="flex items-center justify-center mb-4 text-yellow-500">
              <Award className="h-12 w-12" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Extensive Export Experience</h4>
            <p className="text-gray-600">
            
            With over 5 years in banana exports, Fresh Horizon is the trusted choice for connecting Indian farmers to global markets.
            </p>
          </div>

          {/* Trusted & Legally Approved Certified Services */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition transform">
            <div className="flex items-center justify-center mb-4 text-yellow-500">
              <ShieldCheck className="h-12 w-12" />
            </div>
            <h4 className="text-xl font-semibold mb-2">
            Certified & Reliable Services
            </h4>
            <p className="text-gray-600">
            As a certified exporter, we guarantee transparency, reliability, and adherence to international quality standards.
            </p>
          </div>

          {/* Commitment & Time Adherence */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition transform sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-center mb-4 text-yellow-500">
              <Clock className="h-12 w-12" />
            </div>
            <h4 className="text-xl font-semibold mb-2">On-Time Delivery</h4>
            <p className="text-gray-600">
            Timely delivery is our priority, ensuring that fresh produce reaches you without delays.
            </p>
          </div>

          {/* Innovation */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition transform sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-center mb-4 text-yellow-500">
              <Lightbulb className="h-12 w-12" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Innovative Practices</h4>
            <p className="text-gray-600">
            We use advanced packaging and storage techniques to maintain freshness and extend shelf life.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* About us Section */}

     <section className="mt-12 px-6 container mx-auto">
      {/* Who We Are Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-4">
          <img
            src="https://pisumfoods.com/img/icon-img/49.png" // Replace with your actual leaf icon path
            alt="Leaf icon"
            className="w-12 h-12"
          />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 inline-block border-b-4 border-green-500 pb-1">Who We Are?</h2><br /><br />
        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
        Fresh Horizon is driven by a passionate team dedicated to connecting Indian farmers with global markets. With a focus on banana exports, we believe in showcasing India's rich agricultural produce to the world. Our goal is to empower farmers while contributing to the growth of India’s agricultural export industry.
        </p>
      </div>

      {/* What We Do Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-4">
          <img
            src="https://pisumfoods.com/img/icon-img/49.png" // Replace with your actual leaf icon path
            alt="Leaf icon"
            className="w-12 h-12"
          />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 inline-block border-b-4 border-green-500 pb-1">What We Do?</h2><br /><br />
        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
        At Fresh Horizon, we specialize in exporting premium-quality bananas from India to markets across the globe. From sourcing fresh produce directly from farms to handling packaging and international shipping, we provide end-to-end export solutions. Whether your market is in the Middle East, Europe, or beyond, we ensure seamless delivery and superior service, making global trade simple and efficient.
        </p>
      </div>
    </section>
    
        {/*Enquiry section */}

        <section className="newsletter-area bg-green-100 py-12 flex justify-center items-center">
      <div className="container mx-auto">
      <div className="flex justify-center items-center w-full">
  <div className="flex justify-between items-center w-full max-w-4xl">
    {/* Left Section */}
    <div className="text-left w-full sm:w-1/2">
      <span className="text-green-700 font-semibold text-lg">
        Submit Your Requirements
      </span>
      <h3 className="text-2xl font-bold text-gray-800 mt-2">
        Just One Step Ahead
      </h3>
    </div>

    {/* Right Section */}
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0 w-full sm:w-1/2">
      <input
        type="email"
        name="EMAIL"
        placeholder="Enter Email Address"
        className="px-6 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 w-full sm:w-80"
        value={email}
        onChange={handleEmailChange}
      />
      <button
        onClick={handleEnquireNowClick}
        className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition duration-300 w-full sm:w-auto"
      >
        Enquire Now
      </button>
    </div>
  </div>
</div>
        {/* Display error message if email is invalid */}
        {emailError && <p className="text-red-500 mt-2 text-center">{emailError}</p>}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          aria-labelledby="contact-form-modal-title"
          aria-hidden="true"
        >
          <div className="bg-white rounded-lg shadow-lg w-3/4 max-w-4xl">
            <div className="modal-header flex justify-between items-center p-4 border-b">
              <h4 className="text-lg font-bold text-gray-800">Connect With Us</h4>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-black text-xl"
              >
                &times;
              </button>
            </div>
            <div className="modal-body p-6">
              <form
                className="space-y-4"
                method="POST"
                action="https://kwes.io/api/foreign/forms/auNcdNbohnWnDLO83hJq"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-gray-600">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-gray-600">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      value={email}
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-gray-600">
                      Country Code <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="countryCode"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      required
                    >
                      <option value="91">India (+91)</option>
                      {/* Add more countries here */}
                      <option data-countryCode="DZ" value="213">Algeria (+213)</option>
                          <option data-countryCode="AD" value="376">Andorra (+376)</option>
                          <option data-countryCode="AO" value="244">Angola (+244)</option>
                          <option data-countryCode="AI" value="1264">Anguilla (+1264)</option>
                          <option data-countryCode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
                          <option data-countryCode="AR" value="54">Argentina (+54)</option>
                          <option data-countryCode="AM" value="374">Armenia (+374)</option>
                          <option data-countryCode="AW" value="297">Aruba (+297)</option>
                          <option data-countryCode="AU" value="61">Australia (+61)</option>
                          <option data-countryCode="AT" value="43">Austria (+43)</option>
                          <option data-countryCode="AZ" value="994">Azerbaijan (+994)</option>
                          <option data-countryCode="BS" value="1242">Bahamas (+1242)</option>
                          <option data-countryCode="BH" value="973">Bahrain (+973)</option>
                          <option data-countryCode="BD" value="880">Bangladesh (+880)</option>
                          <option data-countryCode="BB" value="1246">Barbados (+1246)</option>
                          <option data-countryCode="BY" value="375">Belarus (+375)</option>
                          <option data-countryCode="BE" value="32">Belgium (+32)</option>
                          <option data-countryCode="BZ" value="501">Belize (+501)</option>
                          <option data-countryCode="BJ" value="229">Benin (+229)</option>
                          <option data-countryCode="BM" value="1441">Bermuda (+1441)</option>
                          <option data-countryCode="BT" value="975">Bhutan (+975)</option>
                          <option data-countryCode="BO" value="591">Bolivia (+591)</option>
                          <option data-countryCode="BA" value="387">Bosnia Herzegovina (+387)</option>
                          <option data-countryCode="BW" value="267">Botswana (+267)</option>
                          <option data-countryCode="BR" value="55">Brazil (+55)</option>
                          <option data-countryCode="BN" value="673">Brunei (+673)</option>
                          <option data-countryCode="BG" value="359">Bulgaria (+359)</option>
                          <option data-countryCode="BF" value="226">Burkina Faso (+226)</option>
                          <option data-countryCode="BI" value="257">Burundi (+257)</option>
                          <option data-countryCode="KH" value="855">Cambodia (+855)</option>
                          <option data-countryCode="CM" value="237">Cameroon (+237)</option>
                          <option data-countryCode="CA" value="1">Canada (+1)</option>
                          <option data-countryCode="CV" value="238">Cape Verde Islands (+238)</option>
                          <option data-countryCode="KY" value="1345">Cayman Islands (+1345)</option>
                          <option data-countryCode="CF" value="236">Central African Republic (+236)</option>
                          <option data-countryCode="CL" value="56">Chile (+56)</option>
                          <option data-countryCode="CN" value="86">China (+86)</option>
                          <option data-countryCode="CO" value="57">Colombia (+57)</option>
                          <option data-countryCode="KM" value="269">Comoros (+269)</option>
                          <option data-countryCode="CG" value="242">Congo (+242)</option>
                          <option data-countryCode="CK" value="682">Cook Islands (+682)</option>
                          <option data-countryCode="CR" value="506">Costa Rica (+506)</option>
                          <option data-countryCode="HR" value="385">Croatia (+385)</option>
                          <option data-countryCode="CU" value="53">Cuba (+53)</option>
                          <option data-countryCode="CY" value="90392">Cyprus North (+90392)</option>
                          <option data-countryCode="CY" value="357">Cyprus South (+357)</option>
                          <option data-countryCode="CZ" value="42">Czech Republic (+42)</option>
                          <option data-countryCode="DK" value="45">Denmark (+45)</option>
                          <option data-countryCode="DJ" value="253">Djibouti (+253)</option>
                          <option data-countryCode="DM" value="1809">Dominica (+1809)</option>
                          <option data-countryCode="DO" value="1809">Dominican Republic (+1809)</option>
                          <option data-countryCode="EC" value="593">Ecuador (+593)</option>
                          <option data-countryCode="EG" value="20">Egypt (+20)</option>
                          <option data-countryCode="SV" value="503">El Salvador (+503)</option>
                          <option data-countryCode="GQ" value="240">Equatorial Guinea (+240)</option>
                          <option data-countryCode="ER" value="291">Eritrea (+291)</option>
                          <option data-countryCode="EE" value="372">Estonia (+372)</option>
                          <option data-countryCode="ET" value="251">Ethiopia (+251)</option>
                          <option data-countryCode="FK" value="500">Falkland Islands (+500)</option>
                          <option data-countryCode="FO" value="298">Faroe Islands (+298)</option>
                          <option data-countryCode="FJ" value="679">Fiji (+679)</option>
                          <option data-countryCode="FI" value="358">Finland (+358)</option>
                          <option data-countryCode="FR" value="33">France (+33)</option>
                          <option data-countryCode="GF" value="594">French Guiana (+594)</option>
                          <option data-countryCode="PF" value="689">French Polynesia (+689)</option>
                          <option data-countryCode="GA" value="241">Gabon (+241)</option>
                          <option data-countryCode="GM" value="220">Gambia (+220)</option>
                          <option data-countryCode="GE" value="7880">Georgia (+7880)</option>
                          <option data-countryCode="DE" value="49">Germany (+49)</option>
                          <option data-countryCode="GH" value="233">Ghana (+233)</option>
                          <option data-countryCode="GI" value="350">Gibraltar (+350)</option>
                          <option data-countryCode="GR" value="30">Greece (+30)</option>
                          <option data-countryCode="GL" value="299">Greenland (+299)</option>
                          <option data-countryCode="GD" value="1473">Grenada (+1473)</option>
                          <option data-countryCode="GP" value="590">Guadeloupe (+590)</option>
                          <option data-countryCode="GU" value="671">Guam (+671)</option>
                          <option data-countryCode="GT" value="502">Guatemala (+502)</option>
                          <option data-countryCode="GN" value="224">Guinea (+224)</option>
                          <option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>
                          <option data-countryCode="GY" value="592">Guyana (+592)</option>
                          <option data-countryCode="HT" value="509">Haiti (+509)</option>
                          <option data-countryCode="HN" value="504">Honduras (+504)</option>
                          <option data-countryCode="HK" value="852">Hong Kong (+852)</option>
                          <option data-countryCode="HU" value="36">Hungary (+36)</option>
                          <option data-countryCode="IS" value="354">Iceland (+354)</option>
                          <option data-countryCode="ID" value="62">Indonesia (+62)</option>
                          <option data-countryCode="IR" value="98">Iran (+98)</option>
                          <option data-countryCode="IQ" value="964">Iraq (+964)</option>
                          <option data-countryCode="IE" value="353">Ireland (+353)</option>
                          <option data-countryCode="IL" value="972">Israel (+972)</option>
                          <option data-countryCode="IT" value="39">Italy (+39)</option>
                          <option data-countryCode="JM" value="1876">Jamaica (+1876)</option>
                          <option data-countryCode="JP" value="81">Japan (+81)</option>
                          <option data-countryCode="JO" value="962">Jordan (+962)</option>
                          <option data-countryCode="KZ" value="7">Kazakhstan (+7)</option>
                          <option data-countryCode="KE" value="254">Kenya (+254)</option>
                          <option data-countryCode="KI" value="686">Kiribati (+686)</option>
                          <option data-countryCode="KP" value="850">Korea North (+850)</option>
                          <option data-countryCode="KR" value="82">Korea South (+82)</option>
                          <option data-countryCode="KW" value="965">Kuwait (+965)</option>
                          <option data-countryCode="KG" value="996">Kyrgyzstan (+996)</option>
                          <option data-countryCode="LA" value="856">Laos (+856)</option>
                          <option data-countryCode="LV" value="371">Latvia (+371)</option>
                          <option data-countryCode="LB" value="961">Lebanon (+961)</option>
                          <option data-countryCode="LS" value="266">Lesotho (+266)</option>
                          <option data-countryCode="LR" value="231">Liberia (+231)</option>
                          <option data-countryCode="LY" value="218">Libya (+218)</option>
                          <option data-countryCode="LI" value="417">Liechtenstein (+417)</option>
                          <option data-countryCode="LT" value="370">Lithuania (+370)</option>
                          <option data-countryCode="LU" value="352">Luxembourg (+352)</option>
                          <option data-countryCode="MO" value="853">Macao (+853)</option>
                          <option data-countryCode="MK" value="389">Macedonia (+389)</option>
                          <option data-countryCode="MG" value="261">Madagascar (+261)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold text-gray-600">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="mobile"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold text-gray-600">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-600">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-6 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
    
        </div>
      );
}

