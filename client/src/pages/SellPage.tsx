import React, { useState } from 'react';
import '../styles/sell-page.css'; 

const SellPage: React.FC = () => {
  const [formData, setFormData] = useState<{
    propertyName: string;
    address: string;
    price: string;
    description: string;
    image: File | null;
  }>({
    propertyName: '',
    address: '',
    price: '',
    description: '',
    image: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files; // Extract files
    if (files && files[0]) { // Check if files is not null and has at least one file
      setFormData((prevData) => ({
        ...prevData,
        image: files[0],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add logic to handle form submission (e.g., send data to the backend)
  };

  return (
    <div className="sell-page-container">
      <h1>Sell Your Property</h1>
      <form className="sell-form" onSubmit={handleSubmit}>
        <label>
          Property Name:
          <input
            type="text"
            name="propertyName"
            value={formData.propertyName}
            onChange={handleChange}
            placeholder="Enter the property name"
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter the property address"
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter the property price"
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter a brief description of the property"
            required
          />
        </label>
        <label>
          Upload Image:
          <input type="file" name="image" onChange={handleImageChange} accept="image/*" />
        </label>
        <button type="submit" className="btn">
          Submit Property
        </button>
      </form>
    </div>
  );
};

export default SellPage;