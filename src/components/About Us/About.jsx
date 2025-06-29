import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PhoneCall, Star, MapPin } from "lucide-react";

const About = () => {
    return (
        <section className="mt-16 sm:mt-20">
            <div
                className="w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] px-4 sm:px-8 md:px-16 py-12 sm:py-16  bg-cover bg-center bg-no-repeat text-center flex justify-center items-center"
                style={{ backgroundImage: "url('/About_1.avif')" }}
            >
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                        About Us
                    </h1>

                    <nav className="text-sm sm:text-base text-gray-600 flex justify-center space-x-2 mt-2">
                        <Link to="/" className="hover:underline hover:text-yellow-600">
                            Home
                        </Link>
                        <span>›</span>
                        <span className="text-gray-800">About Us</span>
                    </nav>
                </motion.div>
            </div>


            {/* ====== 2 Section ====== */}

            <section className="px-4 md:px-16 py-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Left Text Content */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
                            Dear customers, we are proud to have been your partner for over 29
                            years. We continuously strive to optimize all of our customers'
                            experiences.
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque,
                            donec eget nulla turpis. Nullam commodo dignissim egestas. Sed a nisi
                            quis dui malesuada.
                        </p>
                    </div>

                    {/* Right Image & Card */}
                    <div className="flex flex-col gap-6">
                        <div className="relative rounded-xl  shadow-md">
                            <img
                                src="/about_2.webp"
                                alt="Travel"
                                className="w-full h-64 object-cover rounded-xl"
                            />

                            {/* Circle */}
                            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-36 h-36 rounded-full bg-white shadow-lg flex items-center justify-center text-center spin-slow">

                                    <div className="rotate-[20deg] text-[14px] font-semibold text-gray-600 leading-tight">
                                        <span className="block">Explore new lands</span>
                                        <span className="text-yellow-600 text-2xl">↑</span>
                                        <span className="block text-yellow-600 font-bold">GlobeTrek</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="flex flex-col sm:flex-row justify-between gap-6">
                            <div className="flex flex-col items-start gap-3">
                                <Star className="text-yellow-600 w-6 h-6" />
                                <div>
                                    <h4 className="font-semibold text-2xl text-gray-800">Best Travel Agents</h4>
                                    <p className="text-sm text-gray-500">
                                        Pellentesque habitant morbi tristique senectus netus et malesuada
                                        fames ac.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-3">
                                <MapPin className="text-yellow-600 w-6 h-6" />
                                <div>
                                    <h4 className="font-semibold text-2xl text-gray-800">Travel Guidelines</h4>
                                    <p className="text-sm text-gray-500">
                                        Pellentesque habitant morbi tristique senectus netus et malesuada
                                        fames ac.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Booking CTA */}
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
                            <div className="flex items-center gap-2 text-sm text-gray-700">
                                <PhoneCall className="text-yellow-600 w-8 h-8" />
                                <span className="flex flex-col text-l">
                                    Booking Number{" "}
                                    <span className="text-yellow-600 text-2xl font-semibold">
                                        (229) 555–0109
                                    </span>
                                </span>
                            </div>
                            <button className="bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-yellow-700 transition">
                                Booking Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>




        </section>

    );
};

export default About;
