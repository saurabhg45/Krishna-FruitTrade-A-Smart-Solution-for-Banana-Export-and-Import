import React from "react";

const AdminFooter = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">&copy; 2024 Fresh Horizons. All Rights Reserved.</p>
        <p>
          <a href="#support" className="text-white text-decoration-none">
            Support
          </a>{" "}
          |{" "}
          <a href="#privacy" className="text-white text-decoration-none">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default AdminFooter;
