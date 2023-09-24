import React from 'react';

const Contact = () => {
  return (
    <div className="p-4  container max-w-[1200px] mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="mb-2">If you have any questions or inquiries, please feel free to reach out to us:</p>
      <ul className="list-disc list-inside">
        <li>Email: contact@example.com</li>
        <li>Phone: +123-456-7890</li>
        <li>Address: 123 Main St, City, Country</li>
      </ul>
    </div>
  );
};

export default Contact;
