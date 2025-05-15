import React, { useEffect, useState } from 'react';
import { usePage, Head } from '@inertiajs/react';
import Footer from '../Components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const GuestLayout = ({ children }) => {
    const { title } = usePage().props;
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            // Show button when page is scrolled down 300px
            if (window.scrollY > 300) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [title]);

    // Function to scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Use Inertia's Head component to set the title */}
            <Head title={title || "Nexes AI"} />

         

            {/* Main content */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer Section */}
            <Footer />

            {/* Scroll to top button */}
            <AnimatePresence>
                {showScrollButton && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-6 p-3 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700 focus:outline-none z-50"
                        aria-label="Scroll to top"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 15l7-7 7 7"
                            />
                        </svg>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GuestLayout;
