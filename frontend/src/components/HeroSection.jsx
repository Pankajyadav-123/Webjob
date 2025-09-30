import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10 '>
                <span className=' mx-auto px-4 py-2 rounded-full bg-[#FFFF00] text-black font-medium'>India's Most Trusted Job Platform</span>
                <h1 className='text-5xl font-bold'>Discover Oppertunities<br /> Apply Easily Get<span className='text-[#FFFF00]'>Hired Fast</span></h1>
                <p>Oppertunities that fit your skills Success that matches your ambition</p>
                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto '>
                    <input
                        type="text"
                        placeholder='Find Jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full '

                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#FFFF00] text-black">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection