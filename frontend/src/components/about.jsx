import React from 'react';
import me from '../assets/me.png';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';

const AboutPage = () => {
    return (
        <>
        <Navbar />
        <div className="bg-white text-slate-600 font-sans">
            {/* 1. Hero Section */}
            <section className="py-20 px-6 border-b border-slate-50">
                <div className="max-w-5xl mx-auto text-center">
                    
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        We’re redefining the <span className="text-[#007BFF]">future of work.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto">
                        Hire Sphere started with a simple idea: the best talent shouldn't be hard to find, and the best companies shouldn't be hard to join. We bridge that gap.
                    </p>
                </div>
            </section>

            {/* 2. Stats Section */}
            <section className="py-16 px-6 bg-slate-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {[
                            { label: 'Active Users', value: '2M+' },
                            { label: 'Companies', value: '12k+' },
                            { label: 'Jobs Filled', value: '450k' },
                            { label: 'Countries', value: '85+' },
                        ].map((stat, index) => (
                            <div key={index} className="space-y-2">
                                <p className="text-3xl md:text-4xl font-bold text-slate-900">{stat.value}</p>
                                <p className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            

            {/* 4. Team Section */}
            <section className="py-24 px-6 bg-slate-50/50">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Meet the Founder</h3>
                    <p className="text-slate-500">Pankaj Yadav</p>
                </div>



            </div>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                        {/* Replace with actual image */}
                        <div className="w-full h-full flex items-center justify-center  italic">
                            <img src={me} alt="" />


                        </div>


                    </div>

                </div>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                        <p className="leading-relaxed">
                            To empower every professional to find their purpose and every company to find the talent that fuels their growth. We believe in transparency, speed, and human-centric technology.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Core Values</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <span className="text-blue-600 font-bold">01.</span>
                                <span><strong>Empathy First:</strong> We build for people, not just profiles.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-blue-600 font-bold">02.</span>
                                <span><strong>Innovation:</strong> Using AI to remove bias, not human connection.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-blue-600 font-bold">03.</span>
                                <span><strong>Integrity:</strong> Honesty in every match we make.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </section>

           
        </div>
        <Footer />
        </>
    );
};

export default AboutPage;