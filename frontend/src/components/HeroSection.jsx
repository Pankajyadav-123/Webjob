import React from 'react';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
 // Using lucide-react for clean icons

const Hero = () => {

    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

     const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }



    return (
        <div className="relative bg-slate-50 py-20 px-6 lg:px-16 overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                {/* Badge */}
                <span className="px-4 py-1.5 mb-6 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                    #1 Job Platform in the Tech World
                </span>

                {/* Headline */}
                <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                    Find your <span className="text-blue-600">dream job</span> <br />
                    easier and faster.
                </h1>

                {/* Sub-headline */}
                <p className="text-lg text-slate-600 max-w-2xl mb-10">
                    Explore thousands of job opportunities from top-rated companies.
                    Your next big career move starts with a single search.
                </p>

                {/* Search Bar Container */}
                <div className="w-full max-w-4xl bg-white p-2 rounded-2xl shadow-xl shadow-blue-100 flex flex-col md:flex-row items-center gap-2">
                    <div className="flex items-center flex-1 px-4 py-3 border-b md:border-b-0 md:border-r border-slate-100 w-full">
                        <Search className="text-blue-500 mr-3" size={20} />
                        <input
                            type="text"
                            placeholder="Job title or keywords"
                            className="w-full outline-none text-slate-700 bg-transparent"
                             onChange={(e) => setQuery(e.target.value)}

                        />
                    </div>



                    <button onClick={searchJobHandler} className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200">
                        Search Jobs
                    </button>
                </div>

                {/* Popular Tags */}
                <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-slate-500">
                    <span>Popular:</span>
                    <a href="#" className="hover:text-blue-600 transition">Frontend Developer</a>
                    <a href="#" className="hover:text-blue-600 transition">UI/UX Designer</a>
                    <a href="#" className="hover:text-blue-600 transition">Data Scientist</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;