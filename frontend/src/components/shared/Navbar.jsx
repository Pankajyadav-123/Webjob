import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, Menu, User2, X } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
    return (
        <div className='sticky top-0 z-50 bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-4'>
                <div>
                    <h1 className='text-2xl font-bold'>Hire<span className='text-[#FFFF00]'> Sphere</span></h1>
                </div>
                <div className='flex items-center gap-4 md:gap-8'>
                    <ul className='hidden md:flex font-medium items-center gap-5'>
                        {
                            user && user.role === 'recruiter' ? (
                                <>
                                    <li><Link to="/admin/companies">Companies</Link></li>
                                    <li><Link to="/admin/jobs">Jobs</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/jobs">Jobs</Link></li>
                                    <li><Link to="/browse">Browse</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                </>
                            )
                        }


                    </ul>
                    {/* Desktop actions only (when menubar is hidden) */}
                    <div className="hidden md:flex items-center gap-2">
                        {
                            !user ? (
                                <>
                                    <Link to="/login"><Button variant="outline" size="sm">Login</Button></Link>
                                    <Link to="/signup"><Button size="sm" className="bg-[#FFFF00] text-black hover:bg-[#FFFFE0]">Signup</Button></Link>
                                </>
                            ) : (
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                        </Avatar>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-80">
                                        <div className=''>
                                            <div className='flex gap-2 space-y-2'>
                                                <Avatar className="cursor-pointer">
                                                    <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                                </Avatar>
                                                <div>
                                                    <h4 className='font-medium'>{user?.fullname}</h4>
                                                    <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-col my-2 text-gray-600'>
                                                {
                                                    user && user.role === 'student' && (
                                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                            <User2 />
                                                            <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
                                                        </div>
                                                    )
                                                }

                                                <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                    <LogOut />
                                                    <Button onClick={logoutHandler} variant="link">Logout</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            )
                        }
                    </div>
                    {/* Mobile menu toggle (right side) */}
                    <button
                        className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setMobileOpen((prev) => !prev)}
                        aria-label="Toggle navigation menu"
                    >
                        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden border-t">
                    <div className="max-w-7xl mx-auto px-4 py-3 space-y-3">
                        <ul className='flex flex-col font-medium gap-2'>
                            {
                                user && user.role === 'recruiter' ? (
                                    <>
                                        <li><Link to="/admin/companies" onClick={() => setMobileOpen(false)}>Companies</Link></li>
                                        <li><Link to="/admin/jobs" onClick={() => setMobileOpen(false)}>Jobs</Link></li>
                                    </>
                                ) : (
                                    <>
                                        <li><Link to="/" onClick={() => setMobileOpen(false)}>Home</Link></li>
                                        <li><Link to="/jobs" onClick={() => setMobileOpen(false)}>Jobs</Link></li>
                                        <li><Link to="/browse" onClick={() => setMobileOpen(false)}>Browse</Link></li>
                                        <li><Link to="/about" onClick={() => setMobileOpen(false)}>About</Link></li>
                                    </>
                                )
                            }
                        </ul>
                        <div className="pt-2 border-t flex flex-col gap-2">
                            {
                                !user ? (
                                    <>
                                        <Link to="/login" onClick={() => setMobileOpen(false)}>
                                            <Button variant="outline" className="w-full">Login</Button>
                                        </Link>
                                        <Link to="/signup" onClick={() => setMobileOpen(false)}>
                                            <Button className="w-full bg-[#FFFF00] text-black hover:bg-[#FFFFE0]">Signup</Button>
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        {user.role === 'student' && (
                                            <Button
                                                variant="outline"
                                                className="w-full justify-start"
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    navigate('/profile');
                                                }}
                                            >
                                                <User2 className="mr-2 h-4 w-4" />
                                                View Profile
                                            </Button>
                                        )}
                                        <Button
                                            variant="outline"
                                            className="w-full justify-start"
                                            onClick={() => {
                                                setMobileOpen(false);
                                                logoutHandler();
                                            }}
                                        >
                                            <LogOut className="mr-2 h-4 w-4" />
                                            Logout
                                        </Button>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            )}
            <div className='h-px w-full bg-gray-200' />
        </div>
        
    )
}

export default Navbar