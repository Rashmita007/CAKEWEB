import React, { useState } from 'react';
import './ContactForm.css'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission 
    console.log(formData);

    // Alert message after form submission
    alert('Your request has been sent successfully! We will get back to you shortly.');

    // Clearing the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      occasion: '',
      budget: '',
      message: '',
    });
  };

  return (
    <div className="contact-form">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Message us for all enquiries about bulk or corporate orders. For any queries, reach out to us without any hesitation. Available on email/phone between 10:00 am - 6:00 pm only.</p>
        <p><strong>Phone:</strong> 7019811094</p>
        <p><strong>Central Kitchen:</strong></p>
        <p>Sahyadri Campus, Mangaluru, Adyar, Karnataka 575007</p>
        <p><strong>Email:</strong> sales@cakedelight.com</p>
        <p><b>Let’s talk cake! Reach out to us for all your dessert needs.</b></p>
      </div>

      <div className="contact-form-fields">
        <h2>Get in Touch with Us</h2>
        <p>We do not share this information with outside parties.</p>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="occasion">Occasion</label>
            <input
              type="text"
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
            />
            <label htmlFor="budget">Budget</label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message and Instructions for Order</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit">Send Request</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
