import React, { ChangeEvent, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../axios'
import { createProduct } from '../../redux/apiRequest';
import { useSelector } from 'react-redux';

const CreateProduct = () => {
  const navigate = useNavigate()
  const currentUser = useSelector((state: any) => state.auth.login?.currentUser)

  useEffect(() => {
    if (!currentUser) {
      navigate('/')
    }
  }, [])

  const [product, setProduct] = useState({
    name: 'iphone22',
    price: 1000,
    source: 'asd',
    type: 'PHONE',
    desc: 'asd',
    discount: 0.1,
    image: 'https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg'
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      createProduct(product, currentUser.access_token, navigate) // Gửi dữ liệu thông qua POST request
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10">
      <div className="bg-white p-8 rounded shadow-md w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Create Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              value={product.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Price</label>
            <input
              type="number"
              name="price"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              value={product.price}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Source</label>
            <input
              type="text"
              name="source"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              value={product.source}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Type</label>
            <select
              name="type"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              value={product.type}
              onChange={handleInputChange}
            >
              <option value="PHONE">Phone</option>
              <option value="PC">PC</option>
              <option value="ACCESSORY">Accessory</option>
              <option value="LAPTOP">Laptop</option>
              {/* ... thêm các tùy chọn khác */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Description</label>
            <textarea
              name="desc"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              value={product.desc}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Discount</label>
            <input
              type="number"
              name="discount"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              value={product.discount}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Image</label>
            <input
              type="text"
              name="image"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              value={product.image}
              onChange={handleInputChange}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
      <Link to="/" className="absolute left-4 top-4">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-3 py-1 rounded">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default CreateProduct;
