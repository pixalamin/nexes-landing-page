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
                            <img
                                src="/assets/images/video-thumbnail.png"
                                alt="How to get started with Nexes AI"
                                width={1200}
                                height={675}
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="bg-white/80 rounded-full p-4 shadow-md hover:bg-white hover:shadow-lg transition duration-300">
                                <Play className="h-8 w-8 text-purple-600" />
                                </button>
                            </div>
                            </div>
                        </div>
                        </section>

                        {/* Partners Section */}
                        <section className="py-12">
                        <div className="container mx-auto px-4 text-center">
                            <h2 className="text-xl font-semibold mb-8">১,২০০+ স্কুল, কলেজ ও বিশ্ববিদ্যালয়ের শিক্ষার্থী স্মার্টভাবে পড়াশোনার জন্য বেছে নিয়েছে Nexes AI</h2>
                            <div className="grid mx-auto">
                         
                                <div className="flex items-center justify-center">
                                <img
                                    src="/assets/images/institue.png"
                                    alt="Institute-logo"
                                    className="hover:opacity-100 transition duration-300"
                                />
                                </div>
                           
                            </div>
                        </div>
                        </section>

                         {/* Study, Note, Revision Section */}
                         <section className="py-16 bg-gray-50">
                         <div className="container mx-auto px-4 text-center">
                            <div className="container mx-auto px-4">
                                <div className="text-center mb-10">
                                <div className="inline-block bg-purple-100 px-6 py-2 rounded-lg mb-4">
                                    <h2 className="text-3xl font-bold">Study, Note, Revision</h2>
                                </div>
                                <p className="text-2xl font-semibold">সময় বাঁচানো কি এখন বড় Challenge?</p>
                                </div>

                                <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
                                <div className="md:w-1/2">
                                    <img
                                    src="/assets/images/student-with-laptop.png"
                                    alt="Student using Nexes AI"
                                    width={470}
                                    height={456}
                                    className="rounded-lg"
                                    />
                                </div>

                                <div className="bg-[#FFFAEB] left-image" style={{width:'50% !important'}}>
                                    <div style={{padding:'20px'}}>
                                    <h3 className="text-purple-600 font-medium mb-4 text-left">Pain points</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                        <div className="rounded-full flex-shrink-0">
                                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="0.654297" width="28" height="28" rx="14" fill="#F04438"/>
                                                <path d="M17.75 10.9043L10.25 18.4043M10.25 10.9043L17.75 18.4043" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <span className="text-left">Note, Summary, Quiz তৈরি করতে হলে যায় সারাদিন</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                        <div className="rounded-full flex-shrink-0">
                                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="0.654297" width="28" height="28" rx="14" fill="#F04438"/>
                                                <path d="M17.75 10.9043L10.25 18.4043M10.25 10.9043L17.75 18.4043" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <span className="text-left">বিভিন্ন Source থেকে তথ্য নিয়ে পড়া আরও কঠিন, ও সময়সাপেক্ষ</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                        <div className="rounded-full flex-shrink-0">
                                           
                                            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="0.654297" width="28" height="28" rx="14" fill="#F04438"/>
                                                <path d="M17.75 10.9043L10.25 18.4043M10.25 10.9043L17.75 18.4043" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>

                                        </div>
                                        <span className="text-left">জটিল টপিক সহজভাবে বুঝতে প্রয়োজন 24/7 Support</span>
                                        </li>
                                    </ul>
                                    </div>

                                    <div style={{padding:'20px'}}>
                                    <h3 className="text-purple-600 font-medium mb-4 text-left">Solutions</h3>
                                    <ul className="space-y-4">
                                       <li className="flex items-start gap-3">
                                         <div className="rounded-full flex-shrink-0">
                                            <img src="/assets/images/Frame 2134281259.svg" alt="Check"  />
                                        </div>
                                        <span>মাত্র ১ মিনিটেই কম সময় তৈরি হবে Note, Summary, Quiz</span>
                                        </li>
                                       <li className="flex items-start gap-3">
                                         <div className="rounded-full flex-shrink-0">
                                            <img src="/assets/images/Frame 2134281259.svg" alt="Check"  />
                                        </div>
                                        <span className="text-left block">PDF, Video Link, Live Recording থেকে সহজ Study Material</span>
                                        </li>
                                       <li className="flex items-start gap-3">
                                         <div className="rounded-full flex-shrink-0">
                                            <img src="/assets/images/Frame 2134281259.svg" alt="Check"  />
                                        </div>
                                        <span className="text-left block">24/7 সাপোর্ট নিয়ে সব প্রশ্নের উত্তর, জটিল টপিক সহজ করবে</span>
                                        </li>
                                    </ul>
                                    </div>
                                </div>

                                
                                </div>

                               
                            </div>
                            <div className="flex justify-center mt-10">
                              <button
                                className="
                                  bg-purple-600 text-white font-bold
                                  py-4 px-8
                                  rounded-md
                                  hover:bg-purple-700 transition duration-300
                                  w-full
                                  max-w-[618px]
                                  text-lg
                                  sm:text-xl
                                  sm:py-4
                                  sm:px-8
                                  sm:w-[618px]
                                  h-[60px]
                                  shadow-md
                                "
                                style={{ fontWeight: 600, fontSize: '18px' }}
                              >
                                ৫০% ডিসকাউন্ট পেতে এখনই রেজিস্টার করুন
                              </button>
                            </div>
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

                       {/* Pricing Plan Section (after footer, 100% responsive, matches screenshot) */}
                       <section className="w-full   py-16 flex justify-center items-center">
                      <div className="w-full max-w-7xl mx-auto rounded-2xl shadow-lg flex flex-col md:flex-row items-stretch gap-8 px-4 md:px-12 py-10" style={{background:'#F6F2FF'}}>
                        {/* Left: Pricing Info */}
                        <div className="flex-1 flex flex-col justify-center items-start mb-8 md:mb-0">
                          <div className="mb-6">
                            <span className="inline-block bg-[#D6BBFB] px-4 py-2 rounded-lg text-4xl md:text-5xl font-bold text-[#1C2B36] mb-2 mr-2" style={{lineHeight:'1.1'}}>Pricing</span>
                            <span className="text-4xl md:text-5xl font-bold text-[#1C2B36]">Plan</span>
                          </div>
                          <hr className="w-32 border-[#E9D7FE] mb-6" />
                          <div className="flex items-end mb-2">
                            <span className="text-3xl md:text-4xl font-bold text-[#1C2B36] mr-2">6000</span>
                            <span className="text-base text-[#667085] font-medium mb-1">tk/year</span>
                          </div>
                          <div className="text-[#7F56D9] font-bold text-base md:text-lg mb-2">4,00,000 words</div>
                        </div>
                        {/* Right: Features List */}
                        <div className="flex-1 flex flex-col justify-center">
                          <ul className="space-y-4 text-[#1C2B36] text-base md:text-lg">
                            <li className="flex items-start gap-3">
                                <span className="mt-1"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#7F56D9"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                             </span>AI Chat
                             </li>
                            <li className="flex items-start gap-3"><span className="mt-1"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#7F56D9"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg></span>AI Generator <span className="text-xs md:text-sm text-gray-600 mt-1 text-xs text-[#667085]">
                                (PPT, YouTube/Audio/Video Transcript, Mind Map & more)
                            </span>
                            </li>
                            <li className="flex items-start gap-3"><span className="mt-1"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#7F56D9"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>File Upload 
                            <span className="text-xs md:text-sm text-gray-600 mt-1">(Support for PDF, MP3, MP4, Articles, YouTube/Vimeo, PowerPoint, Text)</span></li>

                            <li className="flex items-start gap-3"><span className="mt-1"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#7F56D9"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Library <span className="text-xs md:text-sm text-gray-600 mt-1 text-xs text-[#667085]">(Save all Documents, Notes, Sessions, Flashcards, and Questions/Answers)</span></li>


                            <li className="flex items-start gap-3"><span className="mt-1"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#7F56D9"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Workflow <span className="text-xs md:text-sm text-gray-600 mt-1 text-xs text-[#667085]">(Custom Workflow)</span></li>

                            <li className="flex items-start gap-3"><span className="mt-1"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#7F56D9"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Template <span className="text-xs md:text-sm text-gray-600 mt-1 text-xs text-[#667085]">(Pre-build Template)</span></li>

                            
                            <li className="flex items-start gap-3"><span className="mt-1"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#7F56D9"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Custom Template <span className="text-xs md:text-sm text-gray-600 mt-1 text-xs text-[#667085]">(Create Manual Template)</span></li>
                          </ul>
                        </div>
                      </div>
                    </section>
                    {/* Order/Payment Section (added as per screenshot) */}
                    <section className="w-full py-16">
                      <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{lineHeight: '1.2'}}>
                          <span className="bg-[#F6F2FF] px-4 py-2 rounded">অর্ডার</span> করতে সঠিক তথ্য<br />
                          দিয়ে নিচের ফর্ম পূরণ করুন
                        </h2>
                        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
                          {/* Left: Billing details & Payment Gateway */}
                          <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-md p-8 mb-8 lg:mb-0">
                            <h3 className="text-xl font-bold text-[#7F56D9] mb-6">Billing details</h3>
                            <form className="space-y-6">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">আপনার ইমেইল দিন, যেই ইমেইলে আপনি অ্যাক্সেস চান <span className="text-red-500">*</span></label>
                                <input type="email" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#7F56D9]" placeholder="example@your.com" />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">আপনার হোয়াটসঅ্যাপ নাম্বার দিন <span className="text-red-500">*</span></label>
                                <input type="text" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#7F56D9]" placeholder="+88 01711 000222" />
                              </div>
                              <div className="mt-8">
                                <div className="font-bold text-lg text-[#7F56D9] mb-2 flex items-center gap-2">
                                  <span className="text-xl">&#128179;</span> Payment Getway
                                  <span className="ml-auto"><img src="/dummy-sslcommerz.png" alt="SSLCommerz" className="inline h-6" /></span>
                                </div>
                                <div className="bg-white border border-[#E5E7EB] rounded-lg p-4 flex flex-wrap gap-3 items-center justify-start">
                                  {/* Dummy payment icons */}
                                  <img src="/dummy-visa.png" alt="Visa" className="h-8" />
                                  <img src="/dummy-mastercard.png" alt="Mastercard" className="h-8" />
                                  <img src="/dummy-nagad.png" alt="Nagad" className="h-8" />
                                  <img src="/dummy-bkash.png" alt="bKash" className="h-8" />
                                  <img src="/dummy-rocket.png" alt="Rocket" className="h-8" />
                                  <img src="/dummy-upay.png" alt="Upay" className="h-8" />
                                  <img src="/dummy-amex.png" alt="Amex" className="h-8" />
                                  <span className="text-gray-400 font-semibold ml-2">+ More</span>
                                </div>
                                <div className="flex flex-wrap gap-3 mt-4">
                                  <img src="/dummy-bkash2.png" alt="bKash" className="h-8" />
                                  <img src="/dummy-mycash.png" alt="MyCash" className="h-8" />
                                  <img src="/dummy-okk.png" alt="OK Wallet" className="h-8" />
                                  <img src="/dummy-rocket2.png" alt="Rocket" className="h-8" />
                                  <img src="/dummy-ab.png" alt="AB Bank" className="h-8" />
                                  <img src="/dummy-surecash.png" alt="SureCash" className="h-8" />
                                  <img src="/dummy-tcash.png" alt="Tcash" className="h-8" />
                                  <img src="/dummy-dmoney.png" alt="Dmoney" className="h-8" />
                                </div>
                              </div>
                              <button type="submit" className="w-full bg-[#7F56D9] text-white font-bold py-4 rounded-md mt-8 text-lg flex items-center justify-center gap-2 disabled:opacity-60">
                                <span className="material-icons">lock</span> অর্ডার করুন ৳ ১৯৯.০০
                              </button>
                            </form>
                          </div>
                          {/* Right: Order summary */}
                          <div className="w-full lg:w-1/3 bg-[#F9F5FF] rounded-xl shadow-md p-8">
                            <h3 className="text-xl font-bold text-[#7F56D9] mb-6">Your order</h3>
                            <div className="bg-white rounded-lg p-4 mb-4">
                              <div className="flex justify-between mb-2 text-gray-700 font-semibold">
                                <span>Product</span>
                                <span>Subtotal</span>
                              </div>
                              <div className="flex justify-between items-center border-t pt-3">
                                <div className="flex items-center gap-2">
                                  <img src="/dummy-product.png" alt="Product" className="w-10 h-10 rounded" />
                                  <span className="font-medium">বেসিক প্যাকেজ ( Lifetime)</span>
                                </div>
                                <span className="font-bold text-[#7F56D9]">x 1 ৳199.00</span>
                              </div>
                            </div>
                            <div className="flex justify-between mb-2 text-gray-700">
                              <span>Subtotal</span>
                              <span>৳199.00</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg">
                              <span>Total</span>
                              <span>৳199.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    
                      {/* Hero CTA Section (Responsive) */}
                      <section className="w-full bg-[#F6F2FF] py-10">
                      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Left: Text */}
                        <div className="md:w-2/3 w-full text-left">
                          <h2 className="text-2xl md:text-3xl font-bold text-[#1C2B36] mb-2">
                            Nexes AI- এর সাথে এখন ঘরে বসেই <br/> পড়াশোনা হোক দ্রুত, স্মার্ট ও সহজ!
                          </h2>
                          <p className="text-base md:text-lg text-[#4B5563] mb-2">
                            পড়াশোনা আরও সহজ, দ্রুত ও কার্যকর করতে আজই যুক্ত হন  <br/> Nexes AI- এর সাথে
                          </p>
                        </div>
                        {/* Right: Button */}
                        <div className="md:w-1/3 w-full flex md:justify-end justify-center">
                          <button className=" bg-purple-600 text-white font-bold text-white font-semibold py-4 px-8 rounded-md text-base md:text-lg w-full md:w-auto   hover:bg-purple-700 transition duration-300">
                            ৫০% ডিসকাউন্ট পেতে এখনই রেজিস্ট্রেশন করুন
                          </button>
                        </div>            
                      </div>
                    </section>

                      {/* Contact Section (added) */}
                      <section className="bg-[#0B1320] py-12">
                        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
                            {/* Left: Text and contact info */}
                            <div className="flex-1 text-white mb-8 md:mb-0">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">যেকোনো প্রয়োজনে<br />যোগাযোগ করো এখানেই</h2>
                                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                                    <div className="bg-black/80 rounded-md px-5 py-3 text-base font-medium w-full sm:w-auto text-white">example@nexes.com</div>
                                    <div className="bg-black/80 rounded-md px-5 py-3 text-base font-medium w-full sm:w-auto text-white">+880 255454 5464</div>
                                </div>
                            </div>
                            {/* Right: WhatsApp box */}
                            <div className="flex-1 flex justify-center md:justify-end w-full">
                                <div className="bg-[#E9FBF0] rounded-xl flex items-center gap-6 px-6 py-6 w-full max-w-md shadow-lg">
                                    <div className="flex-shrink-0">
                                        <img src="/assets/images/whatsup.png" alt="WhatsApp" className="w-14 h-14" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-[#1C2B36] font-bold text-lg mb-1">হোয়াটসঅ্যাপ সাপোর্ট গ্রুপে যোগদান করুন</div>
                                    </div>
                                    <a href="https://wa.me/8802554545464" target="_blank" rel="noopener noreferrer" className="bg-[#0B1320] text-white rounded-md px-5 py-2 font-semibold text-base hover:bg-[#1C2B36] transition">যুক্ত হও</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer className="bg-purple-600 text-white py-6">
                        <div className="container mx-auto px-4 text-center">
                        <p>&copy; {new Date().getFullYear()} Nexes AI. All rights reserved.</p>
                        </div>
                    </footer>
                
                    
                    </main>
                    </div>
            </motion.div>

        </GuestLayout>
    );
};

export default Welcome;