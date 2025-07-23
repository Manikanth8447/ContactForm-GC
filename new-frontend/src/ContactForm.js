import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';
import logo from './assets/gc.jpeg'; // Adjust path based on your structure

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/contacts', formData);
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="logo-container">
                    <img src={logo} alt="Greatcoder Logo" className="logo" />
                    <h1>Greatcoder Trainings LLP</h1>
                </div>
                <h2>Contact Us</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit</button>
                {submitted && <p className="success-message">Thank you! Your message has been sent.</p>}
            </form>
        </div>
    );
}

export default ContactForm;
