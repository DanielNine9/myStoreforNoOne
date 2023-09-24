import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="footer-contact">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>Address: 123 Street, ABC City, XYZ</p>
          <p>Email: info@shopxyz.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="footer-social">
          <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
          <Link to="#" className="block mb-2">Facebook</Link>
          <Link to="#" className="block mb-2">Twitter</Link>
          <Link to="#" className="block mb-2">Instagram</Link>
        </div>
        <div className="footer-about">
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p>Shop XYZ is a store specialized in providing mobile phones and related accessories. We are committed to offering customers high-quality products and excellent service.</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2023 Shop XYZ. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
