import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row">
          {/* Fresh Horizons Section */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Fresh Horizons</h5>
            <p>Connecting farmers and buyers worldwide with fresh bananas.</p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="text-white text-decoration-none">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2">
                <Mail className="me-2" />
                <span>info@freshhorizons.com</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <Phone className="me-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="d-flex align-items-center">
                <MapPin className="me-2" />
                <span>123 Banana Street, Fruit City</span>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white">
                <Facebook />
              </a>
              <a href="#" className="text-white">
                <Twitter />
              </a>
              <a href="#" className="text-white">
                <Instagram />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-5 pt-3 border-top border-light">
          <p className="mb-0">
            © {new Date().getFullYear()} Fresh Horizons. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
