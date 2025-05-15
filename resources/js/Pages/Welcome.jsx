import GuestLayout from '@/Layouts/GuestLayout';
import { Link } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion'; 
import { useState, useEffect } from 'react';
// import Image from "next/image"
import { Play, Check, X } from "lucide-react"

const Welcome = () => {
    // Countdown timer state
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 2,
        minutes: 56,
        seconds: 40
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                let { days, hours, minutes, seconds } = prevTime;
                
                if (seconds > 0) {
                    seconds--;
                } else {
                    seconds = 59;
                    if (minutes > 0) {
                        minutes--;
                    } else {
                        minutes = 59;
                        if (hours > 0) {
                            hours--;
                        } else {
                            hours = 23;
                            if (days > 0) {
                                days--;
                            }
                        }
                    }
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        }
    };


    const featureVariant = {
        hidden: { opacity: 0, x: -10 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3 }
        }
    };

    return (
        <GuestLayout>

            {/* Analytics Section with Animation */}
            <motion.div
                className=""
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                 <div className="flex flex-col min-h-screen">
                    <header className="bg-purple-600 text-white py-3">
                        <div className="container mx-auto px-4 flex justify-between items-center">
                        <div className="flex items-center">
                            <span className="font-bold text-xl text-white">
                            <img src="/logo.png" alt="Nexes.ai" className="w-40" />
                            </span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-4 text-md">50% অফার টি শেষ হওয়ার বাকি আর মাত্র</span>
                            <div className="flex space-x-1">
                            <div className="bg-[#9E77ED] px-2 py-1 text-center" style={{ width: '40px', height: '52px' }}>
                                <div className="text-sm font-bold" style={{fontSize:'20px',marginTop:'2px'}}>{String(timeLeft.days).padStart(2, '0')}</div>
                                <div className="text-xs" style={{ fontSize: '8px',marginTop:'5px' }}>দিন</div>
                            </div>
                            <div className="bg-[#9E77ED] px-2 py-1 text-center" style={{ width: '40px', height: '52px' }}>
                                <div className="text-sm font-bold" style={{fontSize:'20px',marginTop:'2px'}}>{String(timeLeft.hours).padStart(2, '0')}</div>
                                <div className="text-xs" style={{ fontSize: '8px',marginTop:'5px' }}>ঘন্টা</div>
                            </div>
                            <div className="bg-[#9E77ED] px-2 py-1 text-center" style={{ width: '40px', height: '52px' }}>
                                <div className="text-sm font-bold" style={{fontSize:'20px',marginTop:'2px'}}>{String(timeLeft.minutes).padStart(2, '0')}</div>
                                <div className="text-xs" style={{ fontSize: '8px',marginTop:'5px' }}>মিনিট</div>
                            </div>
                            <div className="bg-[#9E77ED] px-2 py-1 text-center" style={{ width: '40px', height: '52px' }}>
                                <div className="text-sm font-bold" style={{fontSize:'20px',marginTop:'2px'}}>{String(timeLeft.seconds).padStart(2, '0')}</div>
                                <div className="text-xs" style={{ fontSize: '8px',marginTop:'5px' }}>সেকেন্ড</div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </header>

                     {/* Hero Section */}
                    <section className="py-16">
                        <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            যখনই প্রশ্ন, তখনই উত্তর <br />
                            <span className="inline-flex items-center" style={{marginTop:'20px'}}>
                            ২৪/৭ &nbsp;<span>
                                <img src="/assets/images/nexes-background.png" alt="Nexes.ai" className="w-50" style={{width:'240px'}}/>
                               </span> &nbsp; আপনার পাশে
                            </span>
                        </h1>
                        <p className="text-lg mb-8 mx-auto text-gray-700" style={{width:'774px!important',height:'72px!important',fontWeight:'500'}}>
                        ভিডিও দেখে কিছুই মাথায় ঢুকছে না? PDF খুললেই ঘুম পাচ্ছে? ঠিক এখানেই আপনার প্রয়োজন  <strong>Nexes AI</strong>, যেকোনো  <br/> <strong>Book, Document, Video Link বা Class Recording</strong> থেকে <strong>মাত্র ১ মিনিটেই </strong> তৈরি করুন<br/>  <strong>Note, Summary, Quiz, Flashcard</strong>!!
                        </p>
                        <button className="bg-purple-600 text-white font-medium py-3 px-8 rounded-md hover:bg-purple-700 transition duration-300" style={{width:'618px!important',height:'60px!important',fontWeight:'600',fontSize:'18px'}}>
                        Student দের জন্য ৫০% ডিসকাউন্ট, এখনই রেজিস্টার করুন
                        </button>
                        </div>
                    </section>

                    <main className="flex-grow">
                        {/* Video Section */}
                        <section className="py-16">
                        <div className="container mx-auto px-4 text-center">
                            <div className="relative max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
                            <div className="aspect-w-16 aspect-h-9 bg-purple-100 flex items-center justify-center">
                                <div className="text-center">
                                <p className="text-purple-600 mb-4">How to get started</p>
                                <button className="bg-white rounded-full p-4 shadow-md hover:shadow-lg transition duration-300">
                                    <Play className="h-8 w-8 text-purple-600" />
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </section>

                        {/* Partners Section */}
                        <section className="py-12">
                        <div className="container mx-auto px-4 text-center">
                            <h2 className="text-xl font-semibold mb-8">Nexes এর সাথে যারা কাজ করছে তারা কিভাবে?</h2>
                            <div className="grid grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
                            {[...Array(10)].map((_, i) => (
                                <div key={i} className="flex items-center justify-center">
                                {/* <Image
                                    src={`/placeholder.svg?height=40&width=80`}
                                    alt="Partner logo"
                                    width={80}
                                    height={40}
                                    className="opacity-70 hover:opacity-100 transition duration-300"
                                /> */}
                                </div>
                            ))}
                            </div>
                        </div>
                        </section>

                        {/* Features Section */}
                        <section className="py-16">
                        <div className="container mx-auto px-4">
                            <h2 className="text-2xl font-bold text-center mb-12">শিক্ষা, গবেষণা, ব্যবসায় প্রতিটি ক্ষেত্রে সমস্যার সমাধান</h2>
                            <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/2">
                                <div className="bg-gray-200 h-64 rounded-lg"></div>
                            </div>
                            <div className="md:w-1/2">
                                <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                                    <X className="h-4 w-4 text-red-500" />
                                    </div>
                                    <div>
                                    <p className="font-medium">Struggling with endless research?</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                                    <X className="h-4 w-4 text-red-500" />
                                    </div>
                                    <div>
                                    <p className="font-medium">Can't keep up with deadlines?</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                                    <X className="h-4 w-4 text-red-500" />
                                    </div>
                                    <div>
                                    <p className="font-medium">Struggling with content creation?</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                                    <Check className="h-4 w-4 text-green-500" />
                                    </div>
                                    <div>
                                    <p className="font-medium">AI-powered research tools make essays</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                                    <Check className="h-4 w-4 text-green-500" />
                                    </div>
                                    <div>
                                    <p className="font-medium">Organize your deadlines</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                                    <Check className="h-4 w-4 text-green-500" />
                                    </div>
                                    <div>
                                    <p className="font-medium">Get better grades</p>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </section>

                        {/* CTA Banner */}
                        <section className="bg-purple-600 text-white py-4">
                        <div className="container mx-auto px-4 text-center">
                            <button className="text-sm font-medium hover:underline">এখনই সাবস্ক্রাইব করুন</button>
                        </div>
                        </section>

                        {/* Popular Features */}
                        <section className="py-16">
                        <div className="container mx-auto px-4">
                            <h2 className="text-2xl font-bold mb-12">
                            <span className="mr-2">Popular</span>
                            <span className="text-purple-600">Feature</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-purple-500 text-white rounded-lg p-6">
                                <h3 className="font-bold text-lg mb-4">AI Sessions</h3>
                                <p className="mb-6">Get instant answers to your questions with our AI-powered sessions</p>
                                <div className="h-32 bg-purple-400 bg-opacity-30 rounded-lg"></div>
                            </div>
                            <div className="bg-blue-500 text-white rounded-lg p-6">
                                <h3 className="font-bold text-lg mb-4">Explore Books</h3>
                                <p className="mb-6">Access thousands of books and resources for your research</p>
                                <div className="h-32 bg-blue-400 bg-opacity-30 rounded-lg"></div>
                            </div>
                            <div className="bg-indigo-500 text-white rounded-lg p-6">
                                <h3 className="font-bold text-lg mb-4">AI Chat</h3>
                                <p className="mb-6">Chat with our AI assistant to help with your studies and research</p>
                                <div className="h-32 bg-indigo-400 bg-opacity-30 rounded-lg"></div>
                            </div>
                            </div>
                        </div>
                        </section>

                        {/* Testimonials */}
                        <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <h2 className="text-2xl font-bold mb-12 text-center">Nexes AI দিয়ে স্মার্ট পড়াশুনা করছে ৫০০+ শিক্ষার্থী</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="mb-12">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                                    <div>
                                    <p className="font-medium">ছাত্র নাম</p>
                                    <p className="text-sm text-gray-500">বিশ্ববিদ্যালয়</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    আমি Nexes AI ব্যবহার করে আমার পড়াশুনা আরও সহজ করেছি। এটি আমাকে সময় বাঁচাতে এবং আরও ভালো ফলাফল পেতে সাহায্য করেছে।
                                </p>
                                <div className="bg-purple-100 rounded-lg p-4 flex items-center justify-center">
                                    <p className="text-purple-600">How to get started</p>
                                </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        </section>

                        {/* Comparison */}
                        <section className="py-16">
                        <div className="container mx-auto px-4">
                            <h2 className="text-2xl font-bold mb-12 text-center">ChatGPT vs Nexes AI</h2>
                            <p className="text-center mb-12 max-w-3xl mx-auto">
                            আমাদের AI সল্যুশন ব্যবহার করে আপনার শিক্ষা ও গবেষণা আরও সহজ করুন। সময় বাঁচান, দক্ষতা বাড়ান এবং নতুন সম্ভাবনা আবিষ্কার করুন।
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-green-600 font-bold">C</span>
                                </div>
                                <h3 className="font-bold">ChatGPT</h3>
                                </div>
                                <ul className="space-y-4">
                                {["AI Chat", "Document", "Project Management", "Workflow Management", "AI Writing Assistance"].map(
                                    (item, i) => (
                                    <li key={i} className="flex items-center">
                                        <div className="w-4 h-4 mr-3 flex-shrink-0">
                                        {i < 2 ? (
                                            <Check className="h-4 w-4 text-green-500" />
                                        ) : (
                                            <X className="h-4 w-4 text-red-500" />
                                        )}
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                    ),
                                )}
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-purple-600 font-bold">N</span>
                                </div>
                                <h3 className="font-bold">Nexes AI</h3>
                                </div>
                                <ul className="space-y-4">
                                {["AI Chat", "Document", "Project Management", "Content Management", "AI Writing Assistance"].map(
                                    (item) => (
                                    <li key={item} className="flex items-center">
                                        <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                    ),
                                )}
                                </ul>
                            </div>
                            </div>
                        </div>
                        </section>

                        {/* CTA Banner */}
                        <section className="bg-purple-600 text-white py-4">
                        <div className="container mx-auto px-4 text-center">
                            <button className="text-sm font-medium hover:underline">এখনই সাবস্ক্রাইব করুন</button>
                        </div>
                        </section>

                        {/* Pricing */}
                        <section className="py-16">
                        <div className="container mx-auto px-4">
                            <h2 className="text-2xl font-bold mb-12">
                            <span className="bg-purple-100 px-3 py-1 rounded-lg text-purple-600 mr-2">Pricing</span>
                            <span>plan</span>
                            </h2>
                            <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/2">
                                <div className="mb-6">
                                <h3 className="text-3xl font-bold">৳৫</h3>
                                <p className="text-gray-500">প্রতি দিন / প্রতি ব্যবহারকারী</p>
                                </div>
                                <ul className="space-y-4 mb-8">
                                <li className="flex items-center">
                                    <Check className="h-4 w-4 text-green-500 mr-3" />
                                    <span>সীমাহীন AI চ্যাট</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-4 w-4 text-green-500 mr-3" />
                                    <span>সীমাহীন ডকুমেন্ট</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="h-4 w-4 text-green-500 mr-3" />
                                    <span>প্রিমিয়াম সাপোর্ট</span>
                                </li>
                                </ul>
                            </div>
                            <div className="md:w-1/2">
                                <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold mb-4">প্ল্যান ফিচার</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                    <Check className="h-4 w-4 text-green-500 mr-3" />
                                    <span>সীমাহীন AI চ্যাট</span>
                                    </li>
                                    <li className="flex items-center">
                                    <Check className="h-4 w-4 text-green-500 mr-3" />
                                    <span>সীমাহীন ডকুমেন্ট</span>
                                    </li>
                                    <li className="flex items-center">
                                    <Check className="h-4 w-4 text-green-500 mr-3" />
                                    <span>প্রিমিয়াম সাপোর্ট</span>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </section>

                        {/* Billing Section */}
                        <section className="py-16">
                        <div className="container mx-auto px-4">
                            <h2 className="text-2xl font-bold mb-12 text-center">ক্রেডিট কার্ডে সহজিক তথ্য দিয়ে নিতে পারেন পূর্ণ সুবিধা</h2>
                            <div className="max-w-3xl mx-auto">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/2">
                                <h3 className="font-bold mb-4">Billing details</h3>
                                <form className="space-y-4">
                                    <div>
                                    <label className="block text-sm mb-1">আপনার ইমেইল</label>
                                    <input type="email" className="w-full border rounded-md p-2" />
                                    </div>
                                    <div>
                                    <label className="block text-sm mb-1">আপনার নাম</label>
                                    <input type="text" className="w-full border rounded-md p-2" />
                                    </div>
                                </form>
                                </div>
                                <div className="md:w-1/2">
                                <h3 className="font-bold mb-4">Your order</h3>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                    <div className="flex justify-between mb-2">
                                    <span>Product</span>
                                    <span>Subtotal</span>
                                    </div>
                                    <div className="flex justify-between border-t pt-2">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-2">
                                        <span className="text-purple-600 font-bold">N</span>
                                        </div>
                                        <span>Nexes AI Premium</span>
                                    </div>
                                    <span>৳ 5 / day</span>
                                    </div>
                                </div>
                                <div className="flex justify-between mb-4">
                                    <span>Subtotal</span>
                                    <span>৳150.00</span>
                                </div>
                                <div className="flex justify-between font-bold">
                                    <span>Total</span>
                                    <span>৳150.00</span>
                                </div>
                                <button className="w-full bg-purple-600 text-white py-3 rounded-md mt-6 hover:bg-purple-700 transition duration-300">
                                    Place your order
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </section>

                        {/* Final CTA */}
                        <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4 text-center">
                            <h2 className="text-2xl font-bold mb-6">আপনার পড়াশুনা আরও সহজ করতে আজই শুরু করুন Nexes AI এর সাথে</h2>
                            <button className="bg-purple-600 text-white font-medium py-3 px-8 rounded-md hover:bg-purple-700 transition duration-300">
                            এখনই সাবস্ক্রাইব করুন
                            </button>
                        </div>
                        </section>

                        {/* Contact Section */}
                        <section className="py-16 bg-gray-900 text-white">
                        <div className="container mx-auto px-4 text-center">
                            <h2 className="text-2xl font-bold mb-8">যেকোনো প্রয়োজনে কল করুন</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <div className="flex items-center justify-center mb-4">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-2">
                                    <span className="text-purple-600 font-bold">📞</span>
                                </div>
                                <span>কাস্টমার সাপোর্ট</span>
                                </div>
                                <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300">
                                কল করুন
                                </button>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <div className="flex items-center justify-center mb-4">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-2">
                                    <span className="text-purple-600 font-bold">💬</span>
                                </div>
                                <span>লাইভ চ্যাট</span>
                                </div>
                                <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300">
                                চ্যাট করুন
                                </button>
                            </div>
                            </div>
                        </div>
                        </section>
                    </main>

                    <footer className="bg-purple-600 text-white py-6">
                        <div className="container mx-auto px-4 text-center">
                        <p>&copy; {new Date().getFullYear()} Nexes AI. All rights reserved.</p>
                        </div>
                    </footer>
                    </div>
            </motion.div>

        </GuestLayout>
    );
};

export default Welcome;