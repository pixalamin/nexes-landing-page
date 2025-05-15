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

    // Add carousel state
    const [currentSlide, setCurrentSlide] = useState(0);

    // Carousel data
    const carouselItems = [
        {
            title: "AI Chat",
            description: "যখন প্রশ্ন তখনই উত্তর! Learning Assistant Nexes AI, যেকোনো জায়গা থেকে চ্যাটে সহজে সাহায্য করবে ২৪/৭",
            bgColor: "#A685E2",
            image: "/assets/images/keno-2.png"
        },
        {
            title: "Explore Books",
            description: "Nexes AI-তে বাংলাদেশের শিক্ষা Curriculum এর School/College/University, Job Preparation সকল বই, নোট এবং সাজানো Library, এগুলোতে রেফারেন্স দিয়ে বই বা File আপলোড করে নিজস্ব Personal Library.",
            bgColor: "#3EC6FF",
            image: "/assets/images/keno-2.png"
        },
        {
            title: "Educational Games",
            description: "Boring পড়াশোনাকে একঘেয়ে নয়, এবার শেখা হবে আনন্দের সাথে! Nexes AI নিয়ে এসেছে দারুন Interactive Game, যা পড়ার অভিজ্ঞতাকে করে তোলে আরও engaging ও সহজ মনে রাখার জন্য।",
            bgColor: "#2563EB",
            image: "/assets/images/keno-2.png"
        },
        {
            title: "Smart Flashcards",
            description: "ফ্ল্যাশকার্ড দিয়ে সহজে রিভিশন নিন, যেকোনো টপিক দ্রুত মনে রাখুন।",
            bgColor: "#F59E42",
            image: "/assets/images/keno-2.png"
        },
        {
            title: "Instant Notes",
            description: "নোট তৈরি করুন এক ক্লিকে, পড়াশোনা হোক আরও সহজ।",
            bgColor: "#22C55E",
            image: "/assets/images/keno-2.png"
        },
    ];

    const cardsPerView = 3;

    // Auto slide effect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) =>
                prev + cardsPerView >= carouselItems.length ? 0 : prev + cardsPerView
            );
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    // Handle manual navigation
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const goToNextSlide = () => {
        setCurrentSlide((prev) =>
            prev + cardsPerView >= carouselItems.length ? 0 : prev + cardsPerView
        );
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prev) =>
            prev - cardsPerView < 0
                ? Math.max(carouselItems.length - cardsPerView, 0)
                : prev - cardsPerView
        );
    };

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
                 <AnimatePresence mode="wait">
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


                    <main className="flex-grow">
                        
                     {/* Hero Section */}
                    <section className="py-16">
                        <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            যখনই প্রশ্ন, তখনই উত্তর <br />
                            <span className="inline-flex items-center" style={{marginTop:'20px'}}>
                            ২৪/৭ &nbsp;<span className="text-purple-600 text-purple-600 bg-purple-100 px-3 py-1 rounded-lg rotate-header">
                                {/* <img src="/assets/images/nexes-background.png" alt="Nexes.ai" className="w-50" style={{width:'240px'}}/> */}
                                Nexes AI
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
                        {/* Video Section */}
                    <section>
                    <div className="container mx-auto px-4 text-center">
                        {/* <div className="relative max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
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
                        </div> */}

                        {/* <div className="max-w-7xl mx-auto px-4 py-8 md:pb-16 text-center"> */}
                          
                        <div className="flex flex-wrap justify-center mt-10 items-center gap-11">
                          <img src="/assets/images/university/image-133.png" alt="company-1" />
                          <img src="/assets/images/university/image-98.png" alt="buet" />
                          <img src="/assets/images/university/image-99.png" alt="brac" />
                          <img src="/assets/images/university/image-100.png" alt="bubt" />
                          <img src="/assets/images/university/image-101.png" alt="brac-versity" />
                          <img src="/assets/images/university/image-102.png" alt="bup" />
                          <img src="/assets/images/university/image-103.png" alt="diu" />
                          <img src="/assets/images/university/image-104.png" alt="manaart" />
                          <img src="/assets/images/university/image-105.png" alt="iuu" />
                          <img src="/assets/images/university/image-106.png" alt="nsu" />
                          <img src="/assets/images/university/image 107-2x.png" alt="uiu" />
                          <img src="/assets/images/university/image-108.png" alt="ulab" />
                          <img src="/assets/images/university/image-110.png" alt="wub" />
                          <img src="/assets/images/university/image-111.png" alt="east-west"  />
                          <img src="/assets/images/university/image-112.png" alt="jahangir" />
                          <img src="/assets/images/university/image-109.png" alt="image-109" />
                          <img src="/assets/images/university/image-113.png" alt="image-132" />
                          <img src="/assets/images/university/image-114.png" alt="image-114" />
                          <img src="/assets/images/university/image-134.png" alt="134" />
                          <img src="/assets/images/university/image-135.png" alt="135" />
                          <img src="/assets/images/university/image-136.png" alt="136" />
                          <img src="/assets/images/university/image-138.png" alt="ruet" />
                          <img src="/assets/images/university/image-139.png" alt="ruet" />
                          <img src="/assets/images/university/image-141.png" alt="ruet" />
                          <img src="/assets/images/university/image-142.png" alt="ruet" />
                          <img src="/assets/images/university/image-143.png" alt="ruet" />
                          <img src="/assets/images/university/image-144.png" alt="ruet" />
                          
                      </div>
                   {/* </div> */}
                    </div>
                    </section>

                    {/* Partners Section */}
                    {/* <section className="py-28">
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
                    </section> */}

                    {/* Study, Note, Revision Section */}
                    <section className="py-16 bg-gray-50 study-note-revision">
                    <div className="container mx-auto px-4 text-center">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-10">
                        <div className="inline-block bg-purple-100 px-8 py-6 rounded-lg mb-4 notes-text">
                            <h2 className="text-4xl md:text-5xl font-bold rotated-text-notes" >Study, Note, Revision</h2>
                        </div>
                        <p className="text-4xl md:text-5xl font-semibold">সময় বাঁচানো কি এখন বড় Challenge?</p>
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

                   {/* Why Nexes AI Section with Carousel */}
                    <section className="w-full bg-white py-16 flex justify-center items-center">
                        <div className="w-full max-w-7xl mx-auto flex flex-col items-center px-2">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 leading-tight text-[#1C2B36]">
                                <span className="font-black">কেন</span> <span className="bg-[#E9D7FE] px-3 py-1 rounded text-purple-700 text-3xl md:text-4xl font-extrabold">Nexes AI?</span>
                            </h2>
                            
                            {/* Carousel Container */}
                            <div className="relative w-full max-w-4xl">
                                {/* Carousel Items */}
                                <div className="overflow-hidden">
                                    <div
                                        className="flex transition-transform duration-500 ease-in-out"
                                        style={{
                                            width: `${(carouselItems.length / cardsPerView) * 100}%`,
                                            transform: `translateX(-${(currentSlide / carouselItems.length) * 100}%)`,
                                        }}
                                    >
                                        {carouselItems.map((item, index) => (
                                            <div
                                                key={index}
                                                className="w-full md:w-1/3 flex-shrink-0 px-4"
                                                style={{ maxWidth: `${100 / cardsPerView}%` }}
                                            >
                                                <div
                                                    className="rounded-2xl text-white flex flex-col p-6 shadow-lg min-h-[370px]"
                                                    style={{ backgroundColor: item.bgColor }}
                                                >
                                                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                                                    <p className="mb-4">{item.description}</p>
                                                    <div className="mt-auto flex justify-center">
                                                        <img
                                                            src={item.image}
                                                            alt={`${item.title} Demo`}
                                                            className="rounded-lg w-full object-cover max-h-32"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Navigation Buttons */}
                                <button
                                    onClick={goToPrevSlide}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg>
                                </button>
                                <button
                                    onClick={goToNextSlide}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>

                                {/* Dots Navigation */}
                                <div className="flex justify-center mt-4 gap-2">
                                    {Array.from({ length: Math.ceil(carouselItems.length / cardsPerView) }, (_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index * cardsPerView)}
                                            className={`w-3 h-3 rounded-full transition-colors ${
                                                currentSlide === index * cardsPerView ? 'bg-purple-600' : 'bg-gray-300'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    
                     {/* Testimonials */}
                    <section className="w-full bg-[#F7F6FF] py-16 flex justify-center items-center">
                      <div className="w-full max-w-7xl mx-auto flex flex-col items-center px-2">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 leading-tight text-[#1C2B36]">
                          Nexes AI দিয়ে Smart পড়াশুনা <br className="hidden md:block" /> 
                        </h2>
                        <h2 className="text-4xl md:text-5xl font-extrabold count-students text-center mb-10 leading-tight text-[#1C2B36]">
                         করছে <span className="bg-[#E9D7FE] px-3 py-1 rounded text-purple-700 text-4xl md:text-5xl "> <span className='rotate-students'> 500+ </span></span> শিক্ষার্থী
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                          {/* Card 1 */}
                          <div className="bg-white rounded-xl shadow p-6 flex flex-col">
                            <p className="text-gray-700 mb-6">আগে কোনো বিষয় বুঝতে আমার অনেক সময় লাগত, কিন্তু এখন <b>Nexus AI</b> আমার সব প্রশ্নের উত্তর দেয়ার পাশাপাশি পড়ার সহজ পথ দেখায়। যেকোনো বই সহজে সাজানো <b>Notes, Summary</b> পেতে এখন আর বই খুঁজে বেড়াতে হয় না, কারণ <b>Nexes AI</b> দিয়েই সব হচ্ছে! আমার পরীক্ষার প্রস্তুতি অনেক ভালো হয়েছে।</p>
                            <div className="flex items-center mt-auto">
                              <img src="/assets/images/student/asik.png" alt="Ashik Mahmud" className="w-10 h-10 rounded-full mr-3" />
                              <div>
                                <div className="font-bold">Ashik Mahmud</div>
                                <div className="text-xs text-gray-500">Class 10<br/>Ideal School, Dhaka</div>
                              </div>
                            </div>
                          </div>
                          {/* Card 2 */}
                          <div className="bg-white rounded-xl shadow p-6 flex flex-col">
                            <p className="text-gray-700 mb-6">এইচএসসি পরীক্ষার জন্য পড়া সামলানো খুবই চাপের ছিল। <b>Nexes AI</b> আমার অনেক সময় বাঁচিয়েছে। আমি ভিডিও লিংক বা বই দিলেই ওখান থেকে সাজানো নোট আর কুইজ পেয়ে যাই। পড়াশোনার আগ্রহ বেড়েছে, আর প্রস্তুতিও অনেক ভালো হয়েছে।</p>
                            <div className="flex items-center mt-auto">
                              <img src="/assets/images/student/nesa.png" alt="Meherun Nesa" className="w-10 h-10 rounded-full mr-3" />
                              <div>
                                <div className="font-bold">Meherun Nesa</div>
                                <div className="text-xs text-gray-500">Class 12<br/>Ideal College</div>
                              </div>
                            </div>
                          </div>
                          {/* Card 3 */}
                          <div className="bg-white rounded-xl shadow p-6 flex flex-col">
                            <p className="text-gray-700 mb-6">ইউনিভার্সিটির <b>Assignment, Lecture</b> আর <b>Reference Book</b> সব সামলাতে আগে একটা বিশাল <b>Pressure</b> ছিল। <b>Nexes AI</b> এখন আমার go-to টুল। আমি <b>Document</b> বা <b>Class Recording</b> দিলেই নোট থেকে <b>Summary</b> আর <b>Revision Material</b> তৈরি করে দেয়। সময় বাঁচে, আর পড়া অনেক গুছিয়ে হয়।</p>
                            <div className="flex items-center mt-auto">
                              <img src="/assets/images/student/tanvir.png" alt="Tanvir Rahman" className="w-10 h-10 rounded-full mr-3" />
                              <div>
                                <div className="font-bold">Tanvir Rahman</div>
                                <div className="text-xs text-gray-500">BBA, 5th Semester<br/>IUB</div>
                              </div>
                            </div>
                          </div>
                          {/* Card 4 */}
                          <div className="bg-white rounded-xl shadow p-6 flex flex-col">
                            <p className="text-gray-700 mb-6">পরীক্ষার আগে পড়া সাজাতে আমার সমস্যা হত। <b>Note</b> বানাতে সময় লাগত, <b>Science</b> আর <b>Math</b> পড়া বুঝতে কষ্ট হত। <b>Nexes AI</b> ব্যবহার করার পর আমি যেকোনো সময়ে দ্রুত <b>Note, Summary,</b> এমনকি <b>Quiz</b> তৈরি করতে পারি। কেন যেন মনে হয় ২৪/৭ AI Chat আমার পাশে আছে। Nexes AI ছাড়া এখন পড়া অসম্ভব মনে হয়!</p>
                            <div className="flex items-center mt-auto">
                              <img src="/assets/images/student/samia.png" alt="Samia Islam" className="w-10 h-10 rounded-full mr-3" />
                              <div>
                                <div className="font-bold">Samia Islam</div>
                                <div className="text-xs text-gray-500">Class 8<br/>Nur Cant. Public School</div>
                              </div>
                            </div>
                          </div>
                          {/* Card 5 */}
                          <div className="bg-white rounded-xl shadow p-6 flex flex-col">
                            <p className="text-gray-700 mb-6">অনেক কনফিউশনে ছিলাম কিভাবে <b>Lecture, Homework, Reference</b> সামলাবো। <b>Nexes AI</b> এখন আমার পড়ার পার্টনার। যেকোনো ফাইল দিলেই সাজানো <b>Auto Note, Summary, Quiz</b> পাই। এমনকি পড়ার জন্য আলাদা <b>AI Chat</b> আছে, যেটা সব প্রশ্নের উত্তর দেয়।</p>
                            <div className="flex items-center mt-auto">
                              <img src="/assets/images/student/iqbal.png" alt="Kazi Kalif Iqbal" className="w-10 h-10 rounded-full mr-3" />
                              <div>
                                <div className="font-bold">Kazi Kalif Iqbal</div>
                                <div className="text-xs text-gray-500">Class 11<br/>Dhaka Residential Model College</div>
                              </div>
                            </div>
                          </div>
                          {/* Card 6 */}
                          <div className="bg-white rounded-xl shadow p-6 flex flex-col">
                            <p className="text-gray-700 mb-6">আমি এখন <b>Document, Video</b> সব কিছু ঝামেলা ছাড়াই পড়তে পারি। প্রতি সপ্তাহে নতুন কিছু শিখছি। যেকোনো সময় <b>Nexes AI Research</b> বা কুইজ তৈরি করে নেই। পড়ার আগ্রহ বেড়েছে, আর পরীক্ষার প্রস্তুতিতে অনেক সাহায্য করছে।</p>
                            <div className="flex items-center mt-auto">
                              <img src="/assets/images/student/sarmin.png" alt="Sharmin Akter" className="w-10 h-10 rounded-full mr-3" />
                              <div>
                                <div className="font-bold">Sharmin Akter</div>
                                <div className="text-xs text-gray-500">History, 3rd Year<br/>University of Dhaka</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Comparison Section */}
                    <section className="w-full flex justify-center items-center py-12 px-2 bg-white">
                      <div className="w-full max-w-5xl mx-auto rounded-2xl shadow-lg p-4 md:p-10 bg-white flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2 leading-tight text-[#1C2B36]">
                          কেন ChatGPT না, Nexes AI হবে  <br/>
                        </h2>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2 leading-tight text-[#1C2B36]"> 
                        আপনার জন্য <span className="ml-2 bg-[#E9D7FE] px-2 py-1 rounded text-purple-600 text-4xl md:text-5xl font-extrabold align-middle ">
                            <span className='rotate-best-choice'>
                            Best Choice?
                            </span>
                            </span>

                        </h2>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2 leading-tight text-[#1C2B36]"></h2>
                        <p className="text-center text-gray-700 mt-2 mb-6 max-w-2xl text-base md:text-lg">
                          ChatGPT একটি General Purpose AI, যা Question-Answer, Idea Generation ও General Task-এ সাহায্য করে, অপরদিকে, Nexes AI একটি Educational AI যা Students দের Note, Summary, Quiz ও Smart Tools দিয়ে পড়াশোনা ও দৈনন্দিন কাজকে আরও সহজ ও দ্রুত করে।
                        </p>
                        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch">
                          {/* ChatGPT Card */}
                          <div className="flex-1 bg-[#F2F4F7] rounded-xl p-6 flex flex-col shadow-md border border-gray-100">
                         
                          <div className="choice-card rounded-full bg-white  mb-4  shadow">
                            <img src="/assets/images/chat-gpt.png" alt="Nexes AI" className="choice-card-image w-14 h-14 mb-4" />
                            </div>
                            
                            <ul className="w-full space-y-3 text-left">
                              <li className="flex items-center text-gray-700"><span className="text-red-500 mr-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#F04438"/><path d="M13.5 6.5l-7 7M6.5 6.5l7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span> General Purpose</li>
                              <li className="flex items-center text-gray-700"><span className="text-red-500 mr-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#F04438"/><path d="M13.5 6.5l-7 7M6.5 6.5l7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span> General Users</li>
                              <li className="flex items-center text-gray-700"><span className="text-red-500 mr-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#F04438"/><path d="M13.5 6.5l-7 7M6.5 6.5l7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span> Academic Book Library নেই</li>
                              <li className="flex items-center text-gray-700"><span className="text-red-500 mr-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#F04438"/><path d="M13.5 6.5l-7 7M6.5 6.5l7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span> Quiz দেয়া যায় না</li>
                              <li className="flex items-center text-gray-700"><span className="text-red-500 mr-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#F04438"/><path d="M13.5 6.5l-7 7M6.5 6.5l7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span> AI Tools নেই</li>
                              <li className="flex items-center text-gray-700"><span className="text-red-500 mr-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#F04438"/><path d="M13.5 6.5l-7 7M6.5 6.5l7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span> Study Material তৈরি করা যায় না</li>
                              <li className="flex items-center text-gray-700"><span className="text-red-500 mr-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#F04438"/><path d="M13.5 6.5l-7 7M6.5 6.5l7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span> Custom Template ও Workflow নেই</li>
                            </ul>
                          </div>
                          {/* Nexes AI Card */}
                          <div className="flex-1 bg-[#F2F4F7] rounded-xl p-6 flex flex-col shadow-md border border-gray-100">
                            <div className="choice-card rounded-full bg-white  mb-4  shadow">
                            <img src="/assets/images/Logomark.svg" alt="Nexes AI" className="choice-card-image w-14 h-14 mb-4" />
                            </div>
                            <ul className="w-full space-y-3 text-left">
                              <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#12B76A"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span> Education & Productivity Focused</li>
                              <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#12B76A"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span> Designed for Students & Teachers</li>
                              <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#12B76A"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span> স্কুল-ভার্সিটির Academic Book Library আছে</li>
                              <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#12B76A"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span> Quiz দেয়া যায়</li>
                              <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#12B76A"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span> AI Tools আছে</li>
                              <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#12B76A"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span> Study Material তৈরি করা যায়</li>
                              <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#12B76A"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span> Custom Template ও Workflow আছে</li>
                            </ul>
                          </div>
                        </div>
                        {/* CTA Bar */}
                        <div className="w-full mt-8">
                          <div className="bg-[#7F56D9] text-white rounded-lg px-4 py-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                            <span className="font-semibold text-base md:text-lg">ChatGPT Premium থেকে ৭৫% কম দামে Nexes AI কিনতে এখনই রেজিস্ট্রেশন করুন</span>
                            <button className="mt-3 md:mt-0 bg-white text-[#7F56D9] font-bold py-2 px-6 rounded-md hover:bg-gray-100 transition text-base md:text-lg">রেজিস্ট্রেশন করুন</button>
                          </div>
                        </div>
                      </div>
                    </section>

                       {/* Pricing Plan Section (after footer, 100% responsive, matches screenshot) */}
                       <section className="w-full   py-16 flex justify-center items-center">
                      <div className="w-full max-w-7xl mx-auto rounded-2xl shadow-lg flex flex-col md:flex-row items-stretch gap-8 px-4 md:px-12 py-10" style={{background:'#F6F2FF'}}>
                        {/* Left: Pricing Info */}
                        <div className="flex-1 flex flex-col justify-center items-start mb-8 md:mb-0">
                          <div className="mb-6">
                            <span className="rotate-text-button inline-block bg-[#D6BBFB] px-4 py-2 rounded-lg text-4xl md:text-5xl font-bold text-[#1C2B36] mb-2 mr-2" style={{lineHeight:'1.1'}}> <span class="rotated-text">Pricing</span></span>
                            <span className="text-4xl md:text-5xl font-bold text-[#1C2B36]">Plan</span>
                          </div>
                          {/* <hr className="w-32 border-[#E9D7FE] mb-6" /> */}
                          <div className="flex items-end mb-2">
                            <span className="text-3xl md:text-4xl font-bold text-[#1C2B36] mr-2">6000</span>
                            <span className="text-base text-[#667085] font-medium mb-1">tk/year</span>
                          </div>
                          <div className="text-[#7F56D9] font-bold text-base md:text-lg mb-2">4,00,000 words</div>
                        </div>
                        {/* Right: Features List */}
                        <div className="flex-1 flex flex-col justify-center">
                          <ul className="space-y-4 text-[#1C2B36] text-base md:text-lg">
                            <li className="flex items-start">
                                <span className="mt-1"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#7F56D9"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                             </span><span style={{marginLeft:'10px'}}> AI Chat </span>
                             </li>
                            <li className="flex items-start"><span className="mt-1"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#7F56D9"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg></span><span style={{marginLeft:'10px'}}> AI Generator </span> <span className="text-xs line-height_pricing  md:text-sm text-gray-600 mt-1 text-xs text-[#667085]">
                                (PPT, YouTube/Audio/Video Transcript, Mind Map & more)
                            </span>
                            </li>
                            <li className="flex items-start"><span className="mt-1"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#7F56D9"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span style={{marginLeft:'10px'}}> File Upload </span> <span className="text-xs md:text-sm text-gray-600 mt-1 line-height_pricing text-xs text-[#667085]">(Support for PDF, MP3, MP4, Articles, YouTube/Vimeo, PowerPoint, Text)</span></li>

                            <li className="flex items-start"><span className="mt-1"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#7F56D9"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span style={{marginLeft:'10px'}}> Library </span> <span className="text-xs md:text-sm text-gray-600 mt-1 line-height_pricing text-xs text-[#667085]">(Save all Documents, Notes, Sessions, Flashcards, and Questions/Answers)</span></li>


                            <li className="flex items-start"><span className="mt-1"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#7F56D9"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span style={{marginLeft:'10px'}}> Workflow </span> <span className="text-xs md:text-sm text-gray-600 mt-1 line-height_pricing text-xs text-[#667085]">(Custom Workflow)</span></li>

                            <li className="flex items-start"><span className="mt-1"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#7F56D9"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span style={{marginLeft:'10px'}}> Template </span> <span className="text-xs md:text-sm text-gray-600 mt-1 line-height_pricing text-xs text-[#667085]">(Pre-build Template)</span></li>

                            
                            <li className="flex items-start"><span className="mt-1"><svg width="20" height="20" fill="none" viewBox="0 0 20 20" ><circle cx="10" cy="10" r="10" fill="#7F56D9"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span> <span style={{marginLeft:'10px'}}> Custom Template</span> <span className="text-xs md:text-sm line-height_pricing text-gray-600 mt-1 text-xs text-[#667085]">(Create Manual Template)</span></li>
                          </ul>
                        </div>
                      </div>
                    </section>
                    {/* Order/Payment Section (added as per screenshot) */}
                    <section className="w-full py-16">
                      <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{lineHeight: '1.2'}}>
                          <span className="bg-[#f9f5ff] px-2 py-2 rounded"> 
                            <span className="rotated-text-order">অর্ডার </span>  </span> &nbsp;করতে সঠিক তথ্য  <br />    
                        </h2>
                        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{marginTop:"-24px"}}>
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
                                  <span className="ml-auto"><img src="/assets/images/ssl-logo.png" alt="SSLCommerz" className="inline h-10" /></span>
                                </div>
                                <div className="bg-white border border-[#E5E7EB] rounded-lg p-4 flex flex-col py-8 gap-4">
                                  {/* First row */}
                                  <div className="flex flex-wrap justify-center gap-4">
                                    <img src="/assets/images/gateway/image-124.png" alt="bKash" className="h-8 md:h-10" />
                                    <img src="/assets/images/gateway/image-127.png" alt="MyCash" className="h-8 md:h-10" />
                                    <img src="/assets/images/gateway/image-130.png" alt="OK Wallet" className="h-8 md:h-10" />
                                    <img src="/assets/images/gateway/image-125.png" alt="Rocket" className="h-8 md:h-10" />
                                    <img src="/assets/images/gateway/image-128.png" alt="AB Bank" className="h-8 md:h-10" />
                                    <img src="/assets/images/gateway/image-131.png" alt="SureCash" className="h-8 md:h-10" />
                                  </div>
                                  {/* Second row */}
                                  <div className="flex flex-wrap justify-center gap-4">
                                    <img src="/assets/images/gateway/image-126.png" alt="M Cash" className="h-8 md:h-10" />
                                    <img src="/assets/images/gateway/image-129.png" alt="t-cash" className="h-8 md:h-10" />
                                    <img src="/assets/images/gateway/image-132.png" alt="Dmoney" className="h-8 md:h-10" />
                                  </div>
                                </div>
                              </div>
                              <button type="submit" className="w-full bg-[#7F56D9] text-white font-bold py-4 rounded-md mt-8 text-lg flex items-center justify-center gap-2 disabled:opacity-60">
                                <span className="material-icons"> <img src="/assets/images/lock.svg" alt="" /> </span> অর্ডার করুন ৳ ১৯৯.০০
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
                                  <img src="/assets/images/Logomark.svg" alt="Product" className="w-10 h-10 rounded" />
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
                </AnimatePresence>
            </motion.div>

        </GuestLayout>
    );
};

export default Welcome;