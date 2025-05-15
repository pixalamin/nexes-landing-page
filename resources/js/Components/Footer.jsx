import GuestLayout from '@/Layouts/GuestLayout';
import { Link } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const Footer = () => {
    const [show, setShow] = useState(true);

    return (
        <AnimatePresence>
            {show && (
                <motion.footer
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-900 text-white py-6 mt-10"
                >
                    <div className="container mx-auto px-4 text-center">
                        <p className="mb-2">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                        <div className="flex justify-center space-x-4">
                            <Link href="/" className="hover:underline text-gray-300">Home</Link>
                            <Link href="/about" className="hover:underline text-gray-300">About</Link>
                            <Link href="/contact" className="hover:underline text-gray-300">Contact</Link>
                        </div>
                    </div>
                </motion.footer>
            )}
        </AnimatePresence>
    );
}

export default Footer;
