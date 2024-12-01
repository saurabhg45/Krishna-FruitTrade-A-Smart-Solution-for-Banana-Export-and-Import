import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container text-center">
        <p>&copy; 2024 Fresh Horizons. All rights reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/privacy" className="text-light">
              Privacy Policy
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/terms" className="text-light">
              Terms of Service
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/contact" className="text-light">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
