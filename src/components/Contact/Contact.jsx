import React, { useState } from "react";
import axios from "axios";
import {
TextField,
Button,
Typography,
Accordion,
AccordionSummary,
AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Contact() {
const [form, setForm] = useState({ name: "", email: "", message: "" });
const [success, setSuccess] = useState(false);

const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
e.preventDefault();

if (!form.name || !form.email || !form.message) {
alert("Please fill all fields");
return;
}

try {
const res = await axios.post("https://via-bhraman-backend.onrender.com/api/contact", form);
if (res.status === 200 || res.status === 201) {
setSuccess(true);
setForm({ name: "", email: "", message: "" });
setTimeout(() => setSuccess(false), 500);
} else {
alert("Message could not be sent. Try again later.");
}
} catch (error) {
console.error("API Error:", error.response?.data || error.message);
alert("There was an error sending your message. Please try again.");
}
};

return (
<main className="min-h-screen bg-white text-gray-800 py-12 px-4 md:px-8 mt-8">
  <Typography variant="h4" align="center" className="text-yellow-500 font-bold mb-10">
    Contact Us
  </Typography>

  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
    {/* Contact Form */}
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>

      {success && (
      <div className="bg-green-100 text-green-700 p-3 mb-4 rounded">
        ✅ Message sent successfully!
      </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField fullWidth label="Your Name" name="name" variant="outlined" value={form.name}
          onChange={handleChange} />
        <TextField fullWidth label="Your Email" name="email" type="email" variant="outlined" value={form.email}
          onChange={handleChange} />
        <TextField fullWidth label="Your Message" name="message" multiline rows={4} variant="outlined"
          value={form.message} onChange={handleChange} />
        <Button type="submit" fullWidth variant="contained"
          className="!bg-yellow-500 hover:!bg-yellow-600 text-white font-semibold">
          Send Message
        </Button>
      </form>
    </div>

    {/* Contact Info + Map */}
    <div className="flex flex-col gap-6">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
        <p className="mb-2">📞 <strong>Phone:</strong> +91 98765 43210</p>
        <p className="mb-2">📧 <strong>Email:</strong> contact@travelnow.com</p>
        <p>📍 <strong>Address:</strong> 123 Travel Street, Indore, Madhya Pradesh</p>
        <p className="mt-4">🕒 <strong>Hours:</strong> Mon–Sat, 9am–6pm</p>
      </div>

      <div className="rounded-lg overflow-hidden shadow-md">
        <iframe title="Map" className="w-full h-64" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.434933375726!2d75.85772677509836!3d22.71956867939085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad3323cb69%3A0x75a4a3b130b235e!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1688301111111!5m2!1sen!2sin"></iframe>
      </div>
    </div>
  </div>

  {/* FAQ Section */}
  <div className="max-w-4xl mx-auto mt-16">
    <Typography variant="h5" className="text-yellow-500 font-semibold mb-4 text-center">
      Frequently Asked Questions
    </Typography>

    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} className="font-medium">
      What is the best time to travel?
      </AccordionSummary>
      <AccordionDetails>
        It depends on your destination. For hill stations, summer is great. For beaches, try winter!
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} className="font-medium">
      Can I cancel or reschedule my trip?
      </AccordionSummary>
      <AccordionDetails>
        Yes! Based on your package terms. Contact us anytime.
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} className="font-medium">
      How can I get discounts?
      </AccordionSummary>
      <AccordionDetails>
        We offer discounts during festivals and for early birds. Subscribe to get updates!
      </AccordionDetails>
    </Accordion>
  </div>

  {/* Helpful Travel Tips */}
  <div className="max-w-4xl mx-auto mt-12 text-center">
    <Typography variant="h5" className="text-yellow-500 font-semibold mb-4">
      Helpful Travel Tips
    </Typography>
    <ul className="list-disc list-inside text-gray-700 text-left space-y-2">
      <li>Always carry copies of your ID and documents.</li>
      <li>Pack according to destination climate and activities.</li>
      <li>Buy local SIMs for cheap connectivity.</li>
      <li>Check visa and health rules before flying.</li>
      <li>Travel insurance is always a smart idea!</li>
    </ul>
  </div>

  {/* Social Media Links */}
  <div className="max-w-4xl mx-auto mt-12 text-center">
    <Typography variant="h6" className="text-gray-700 font-medium mb-3">
      Connect with us:
    </Typography>
    <div className="flex justify-center gap-6 text-yellow-500 text-xl">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">🌐 Facebook</a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
    </div>
  </div>
</main>
);
}