// src/components/About Us/About.jsx
import React from "react";

export default function About() {
return (
<main className="bg-white text-gray-800 py-12 px-6 lg:px-24 mt-8">
  {/* Brand Origins */}
  <section className="mb-12 text-center">
    <h1 className="text-4xl font-bold text-yellow-500 mb-4">Our Journey</h1>
    <p className="text-lg max-w-3xl mx-auto">
      Via-Bhraman was born from a shared passion for travel and discovery. What began as a backpacking blog has grown
      into a platform that helps people across the globe plan unforgettable adventures with ease and confidence.
    </p>
  </section>

  {/* Mission & Values */}
  <section className="mb-12">
    <h2 className="text-3xl font-semibold text-yellow-500 mb-4">Mission & Values</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>🌍 Mission: To make travel accessible, enriching, and meaningful for everyone.</li>
      <li>💛 Values: Trust, sustainability, transparency, and a love for exploration.</li>
    </ul>
  </section>

  {/* Unique Selling Proposition & Target Audience */}
  <section className="mb-12 grid md:grid-cols-2 gap-8">
    <div>
      <h2 className="text-3xl font-semibold text-yellow-500 mb-4">Why We're Unique</h2>
      <p className="text-lg">
        We don’t just book trips — we craft experiences. Our eco-friendly travel plans, personalized itineraries, and
        local partnerships make us stand out from the crowd.
      </p>
    </div>
    <div>
      <h2 className="text-3xl font-semibold text-yellow-500 mb-4">Our Travelers</h2>
      <p className="text-lg">
        Whether you're a budget backpacker, luxury explorer, or thrill-seeking adventurer — our platform is designed
        with you in mind.
      </p>
    </div>
  </section>

  {/* Team Section */}
  <section className="mb-12">
    <h2 className="text-3xl font-semibold text-yellow-500 mb-6 text-center">Meet the Team</h2>
    <div className="grid md:grid-cols-3 gap-6 text-center">
      <div>
        <img src="/images/founder.jpg" alt="Founder"
          className="rounded-full w-32 h-32 mx-auto mb-2 object-cover shadow-md" />
        <h3 className="font-bold">Sumit Sahu</h3>
        <p className="text-sm text-gray-500">Founder & Travel Expert</p>
      </div>
      <div>
        <img src="/images/designer.jpg" alt="Designer"
          className="rounded-full w-32 h-32 mx-auto mb-2 object-cover shadow-md" />
        <h3 className="font-bold">Isha Bairagi</h3>
        <p className="text-sm text-gray-500">UI/UX Designer</p>
      </div>
      <div>
        <img src="/images/guide.jpg" alt="Guide"
          className="rounded-full w-32 h-32 mx-auto mb-2 object-cover shadow-md" />
        <h3 className="font-bold">Ravi Sharma</h3>
        <p className="text-sm text-gray-500">Operations & Tours</p>
      </div>
    </div>
  </section>

  {/* What We Offer */}
  <section className="mb-12">
    <h2 className="text-3xl font-semibold text-yellow-500 mb-4">What We Offer</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>✈️ Flight and hotel bookings at the best prices</li>
      <li>🚗 Car rentals and guided tours</li>
      <li>📍 Curated destination guides and travel plans</li>
      <li>🌱 Focus on sustainable and responsible travel</li>
    </ul>
  </section>

  {/* Why Choose Us */}
  <section className="mb-12">
    <h2 className="text-3xl font-semibold text-yellow-500 mb-4">Why Choose Via-Bhraman?</h2>
    <p className="text-lg mb-2">
      We're travelers first — we understand your needs and care about your experience. Our service is personal, our team
      is passionate, and our mission is honest.
    </p>
    <p className="text-lg mb-4">
      Still wondering? Reach out and let us show you why thousands choose Via-Bhraman to plan their perfect escape.
    </p>
    <a href="/contact">
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded">
        Contact Us
      </button>
    </a>
  </section>
</main>
);
}