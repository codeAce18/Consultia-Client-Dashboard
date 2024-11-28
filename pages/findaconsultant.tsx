import Image from "next/image"
import Link from "next/link"
import { Input } from '@/components/ui/input';
import { Separator } from "@/components/ui/separator"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer";

import { SearchIcon } from 'lucide-react';

import DoraConsultant from "../public/assets/DoraConsultant.svg"
import AlimantoConsultant from "../public/assets/AlimantoConsultant.svg"
import OrionConsultant from "../public/assets/OrionConsultant.svg"
import DatolConsultant from "../public/assets/DatolConsultant.svg"
import AdexConsultant from "../public/assets/AdexConsultant.svg"
import AdeolaConsultant from "../public/assets/AdeolaConsultant.svg"

import Star from "../public/assets/Star.svg"

import NotificationIcon from "../public/assets/NotificationIcon.svg"

import ChatIcon from "../public/assets/ChatIcon.svg"

import MyProfile from "../public/assets/MyProfile.svg"

import profile from "../public/assets/profile.svg"

import Arrowdown from "../public/assets/Arrowdown.svg"

import LogOutIcon from "../public/assets/LogOutIcon.svg"

import { useState } from 'react';

import "../app/globals.css"

import DashboardLogo from "../public/assets/DashboardLogo.svg"
import SavedIcon from "../public/assets/SavedIcon.svg"
import SavedIconWhite from "../public/assets/SavedIconWhite.svg"

import ShareToIcon from "../public/assets/ShareToIcon.svg"

// import RatingStar from "../public/assets/RatingStar.svg"

import ArrowUpSvg from "../public/assets/ArrowUpSvg.svg"

import BackIcon from "../public/assets/BackIcon.svg"


import { Skeleton } from "@/components/ui/skeleton"




const FindAConsultant = () => {
    
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const [budgetOpen, setBudgetOpen] = useState(true);
    const toggleBudgetDropdown = () => setBudgetOpen(!budgetOpen);

    const [ratingOpen, setRatingOpen] = useState(true);
    const toggleRatingDropdown = () => setRatingOpen(!ratingOpen);


    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    };


    const [loading, setLoading] = useState(false);
    const [results, setShowResults] = useState(false);
    // const [isSearchActive, setIsSearchActive] = useState(false);
    const [consultancyType, setConsultancyType] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [location, setLocation] = useState('');

    const [message, setMessage] = useState('Explore various consultants to match your preferences.');




    const handleSearch = () => {
        setLoading(true);
        setShowResults(false);
        setTimeout(() => {
            setLoading(false);
            setShowResults(true);
            setMessage('Showing 150 verified Consultants in Nigeria'); // Update message after loading
        }, 5000); // Simulated loading time
    };


    return (
        <div>

            <div className="flex">

                {/* SIDE BAR FOR FIND A CONSULTANT */}
                <div className="fixed w-[290px] h-screen border-r-[2px] ">
                    <div className="h-full overflow-y-auto scrollbar-hide">
    
                        <Link href="/">
                            <div className="pt-[22px] pl-[36px]">
                                <Image src={DashboardLogo} alt="DashboardLogo" />
                            </div>
                        </Link>


                        <div className="pt-[20px]">
                            <div className="flex items-center justify-between mx-auto max-w-[236px]">
                                <h1 className="text-[#101828] leading-[30px] font-medium text-[20px]">
                                    Filter
                                </h1>
                                <p className="text-[#5B52B6] text-[16px] leading-[22.4px] font-normal">
                                    Clear All
                                </p>
                            </div>


                            <div className="pt-10">
                                <div 
                                    className="flex items-center justify-between max-w-[236px] mx-auto cursor-pointer" 
                                    onClick={toggleDropdown}
                                >
                                    <h1 className="text-[20px] leading-[30px] text-[#101828] font-medium">Experience</h1>
                                    <Image 
                                        width={24} 
                                        height={24} 
                                        src={ArrowUpSvg} 
                                        alt="Arrow Icon"
                                        className={`transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-90'}`} 
                                    />
                                </div>

                                {isOpen && (
                                    <div className="pt-[10px]">
                                        <div className="flex items-center gap-[8px] max-w-[236px] mx-auto">
                                            <input 
                                                type="checkbox" 
                                                className="w-[18px] h-[18px] text-blue-600 border-[#5B52B6] rounded"
                                            />
                                            <h2 className="text-[#101828] text-[16px] leading-[24px] font-normal">Less than a year</h2>
                                        </div>

                                        <div className="pt-[10px]">
                                            <div className="flex items-center gap-[8px] max-w-[236px] mx-auto">
                                                <input
                                                    type="checkbox"
                                                    className="w-[18px] h-[18px] text-blue-600 border-gray-300 rounded"
                                                />
                                                <h2 className="text-[#101828] text-[16px] leading-[24px] font-normal">1-3 years</h2>
                                            </div>
                                        </div>

                                        <div className="pt-[10px]">
                                            <div className="flex items-center gap-[8px] max-w-[236px] mx-auto">
                                                <input
                                                    type="checkbox"
                                                    className="w-[18px] h-[18px] text-blue-600 border-gray-300 rounded"
                                                />
                                                <h2 className="text-[#101828] text-[16px] leading-[24px] font-normal">3-5 years</h2>
                                            </div>
                                        </div>

                                        <div className="pt-[10px]">
                                            <div className="flex items-center gap-[8px] max-w-[236px] mx-auto">
                                                <input
                                                    type="checkbox"
                                                    className="w-[18px] h-[18px] text-blue-600 border-gray-300 rounded"
                                                />
                                                <h2 className="text-[#101828] text-[16px] leading-[24px] font-normal">5 years & above</h2>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>


                            <div className="pt-10">
                                <div 
                                    className="flex items-center justify-between max-w-[236px] mx-auto cursor-pointer" 
                                    onClick={toggleBudgetDropdown}
                                >
                                    <h1 className="text-[20px] leading-[30px] text-[#101828] font-medium">Budget</h1>
                                    <Image 
                                        width={24} 
                                        height={24} 
                                        src={ArrowUpSvg} 
                                        alt="Arrow Icon"
                                        className={`transition-transform duration-300 ${budgetOpen ? 'rotate-0' : 'rotate-90'}`} 
                                    />
                                </div>

                                {budgetOpen && (
                                    <div className="pt-[10px]">
                                        <div className="flex items-center gap-[8px] max-w-[236px] mx-auto">
                                            <input 
                                                type="checkbox" 
                                                className="w-[18px] h-[18px] text-blue-600 border-[#5B52B6] rounded"
                                            />
                                            <h2 className="text-[#101828] text-[16px] leading-[24px] font-normal">Less than ₦500K</h2>
                                        </div>

                                        <div className="pt-[10px]">
                                            <div className="flex items-center gap-[8px] max-w-[236px] mx-auto">
                                                <input
                                                    type="checkbox"
                                                    className="w-[18px] h-[18px] text-blue-600 border-gray-300 rounded"
                                                />
                                                <h2 className="text-[#101828] text-[16px] leading-[24px] font-normal">₦500K - ₦5M</h2>
                                            </div>
                                        </div>

                                        <div className="pt-[10px]">
                                            <div className="flex items-center gap-[8px] max-w-[236px] mx-auto">
                                                <input
                                                    type="checkbox"
                                                    className="w-[18px] h-[18px] text-blue-600 border-gray-300 rounded"
                                                />
                                                <h2 className="text-[#101828] text-[16px] leading-[24px] font-normal">More than ₦5M</h2>
                                            </div>
                                        </div>

                                        <div className="pt-[10px]">
                                            <div className="flex items-center gap-[8px] max-w-[236px] mx-auto">
                                                <input
                                                    type="checkbox"
                                                    className="w-[18px] h-[18px] text-blue-600 border-gray-300 rounded"
                                                />
                                                <h2 className="text-[#101828] text-[16px] leading-[24px] font-normal">Any Amount</h2>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>


                            <div className="pt-10 pb-10">
                                <div 
                                    className="flex items-center justify-between max-w-[236px] mx-auto cursor-pointer" 
                                    onClick={toggleRatingDropdown}
                                >
                                    <h1 className="text-[20px] leading-[30px] text-[#101828] font-medium">Rating</h1>
                                    <Image 
                                        width={24} 
                                        height={24} 
                                        src={ArrowUpSvg} 
                                        alt="Arrow Icon"
                                        className={`transition-transform duration-300 ${ratingOpen ? 'rotate-0' : 'rotate-90'}`} 
                                    />
                                </div>

                                {ratingOpen && (
                                    <div className="pt-[10px]">
                                        <div className="flex items-center gap-[8px] max-w-[236px] mx-auto">
                                            <input 
                                                type="checkbox" 
                                                className="w-[18px] h-[18px] text-blue-600 border-[#5B52B6] rounded"
                                            />
                                           <div className="flex items-center">
                                                <Image width={16} height={16} src={Star} alt="Star" />
                                                <Image width={16} height={16} src={Star} alt="Star" />
                                                <Image width={16} height={16} src={Star} alt="Star" />
                                                <Image width={16} height={16} src={Star} alt="Star" />
                                                <Image width={16} height={16} src={Star} alt="Star" />
                                           </div>
                                        </div>

                                        <div className="pt-[10px]">
                                            <div className="flex items-center gap-[8px] max-w-[236px] mx-auto">
                                                <input
                                                    type="checkbox"
                                                    className="w-[18px] h-[18px] text-blue-600 border-gray-300 rounded"
                                                />
                                                <div className="flex items-center">
                                                    <Image width={16} height={16} src={Star} alt="Star" />
                                                    <Image width={16} height={16} src={Star} alt="Star" />
                                                    <Image width={16} height={16} src={Star} alt="Star" />
                                                    <Image width={16} height={16} src={Star} alt="Star" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-[10px]">
                                            <div className="flex items-center gap-[8px] max-w-[236px] mx-auto">
                                                <input
                                                    type="checkbox"
                                                    className="w-[18px] h-[18px] text-blue-600 border-gray-300 rounded"
                                                />

                                                <div className="flex items-center">
                                                    <Image width={16} height={16} src={Star} alt="Star" />
                                                    <Image width={16} height={16} src={Star} alt="Star" />
                                                    <Image width={16} height={16} src={Star} alt="Star" />
                                                </div>
                                                    
                                            </div>
                                        </div>

                                        <div className="pt-[10px]">
                                            <div className="flex items-center gap-[8px] max-w-[236px] mx-auto">
                                                <input
                                                    type="checkbox"
                                                    className="w-[18px] h-[18px] text-blue-600 border-gray-300 rounded"
                                                />
                                                <div className="flex items-center">
                                                    <Image width={16} height={16} src={Star} alt="Star" />
                                                    <Image width={16} height={16} src={Star} alt="Star" />
                                                </div>
                                                    
                                            </div>
                                        </div>

                                        <div className="pt-[10px]">
                                            <div className="flex items-center gap-[8px] max-w-[236px] mx-auto">
                                                <input
                                                    type="checkbox"
                                                    className="w-[18px] h-[18px] text-blue-600 border-gray-300 rounded"
                                                />

                                                
                                                <div className="flex items-center">
                                                    <Image width={16} height={16} src={Star} alt="Star" />
                                                </div>
                                                    
                                                    
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>


                {/* Main Content */}
                <div className="bg-[#F9FAFE]  min-h-screen w-full ml-[290px] px-10 py-6">
                    <div className="flex justify-between">
                        <div>
                            <div className="flex items-center gap-10">
                                <h1 className="text-[20px] leading-[30px] text-[#101828] font-bold whitespace-nowrap">Find a Consultant</h1>
                                <div>
                                    <div className="relative flex items-center w-[479px] h-[40px] mx-auto">
                                        <Input
                                            type="text"
                                            placeholder="Search..."
                                            className="pr-10 pl-10 py-2 border-none bg-[#F0F0F9] rounded-[100px]  w-full text-gray-800 focus:outline-none focus:ring focus:ring-blue-300"
                                        />

                                        <div className="absolute left-3">
                                            <SearchIcon className="w-[24px] h-[24px] text-gray-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                

                        <div className="flex items-center gap-[10px] border-l-[1px] border-[#D0D0D3] pl-[20px]">
                            <div>
                                <Image width={24} height={24} src={NotificationIcon} alt="NotificationIcon"/>
                            </div>

                            <div>
                                <Image  width={24} height={24}  src={ChatIcon} alt="ChatIcon"/>
                            </div>

                            <div>
                                <div className="flex items-center gap-[10px] cursor-pointer" onClick={toggleOverlay}>
                                    <div>
                                        <Image width={24} height={24} src={MyProfile} alt="MyProfile" />
                                    </div>

                                    <div>
                                        <h1 className="text-[13px] leading-[19.5px] text-[#101828] font-semibold">Bankole Onafuwa</h1>
                                        <p className="text-[#41404B] text-[13px] leading-[19.5px] font-normal">Client</p>
                                    </div>
                                    
                                    <div>
                                        <Image width={16} height={16} src={Arrowdown} alt="Arrowdown" />
                                    </div>
                                </div>

                                {isOverlayVisible && (
                                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={toggleOverlay}>
                                        <div className="bg-white flex flex-col items-start gap-y-[12px] p-[8px] w-[134px] rounded-lg shadow-lg absolute top-20 right-6">
                                        <div className='flex items-center gap-[12px]'>
                                            <Image width={24} height={24} src={profile} alt="profile" />

                                            <h2 className='text-[#101828] text-[13px] leading-[19.5px] font-normal'>Profile</h2>
                                        </div>

                                        <div className='flex items-center gap-[12px]'>
                                            <Image width={24} height={24} src={LogOutIcon} alt="LogOutIcon" />

                                            <h2 className='text-[#101828] text-[13px] leading-[19.5px] font-normal'>Log Out</h2>
                                        </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>


                    <div className="pt-[24px]">
                        <Separator />
                    </div>



                    <div className="pt-[25px]">
                        <div className="grid grid-cols-4 gap-4">
                            {/* Consultancy Type */}
                            <select
                            value={consultancyType}
                            onChange={(e) => setConsultancyType(e.target.value)}
                            className="bg-[#FFFFFF] shadow-custom cursor-pointer max-w-[269px] p-[8px] rounded-[8px] flex items-center text-[#41404B] text-[16px] leading-[24px] font-normal"
                            >
                            <option value="" disabled>Select Consultancy Type</option>
                            <option value="Business">Business</option>
                            <option value="IT">IT</option>
                            <option value="Financial">Financial</option>
                            </select>

                            {/* Service Type */}
                            <select
                            value={serviceType}
                            onChange={(e) => setServiceType(e.target.value)}
                            className="bg-[#FFFFFF] shadow-custom cursor-pointer max-w-[269px] p-[8px] rounded-[8px] flex items-center text-[#41404B] text-[16px] leading-[24px] font-normal"
                            >
                            <option value="" disabled>Select Service Type</option>
                            <option value="Consultation">Consultation</option>
                            <option value="Strategy">Strategy</option>
                            <option value="Implementation">Implementation</option>
                            </select>

                            {/* Location */}
                            <select
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="bg-[#FFFFFF] shadow-custom cursor-pointer max-w-[269px] p-[8px] rounded-[8px] flex items-center text-[#41404B] text-[16px] leading-[24px] font-normal"
                            >
                            <option value="" disabled>Select Location</option>
                            <option value="New York">New York</option>
                            <option value="San Francisco">San Francisco</option>
                            <option value="Los Angeles">Los Angeles</option>
                            </select>

                            {/* Search Button */}
                            <button
                                onClick={handleSearch}
                                className="shadow-button-custom text-[16.5px] leading-[19.8px] text-[#FFFFFF] font-bold bg-[#5B52B6] p-[10px] rounded-[8px] w-[236px]"
                            >
                                Search
                            </button>
                        </div>

                        <div
                            className={`border-[2px] rounded-[8px] p-[15px] mt-[15px] transition-all duration-[5s] ${
                                loading ? 'bg-progressive-fill border-[1px]' : 'border-transparent'
                            }`}
                            >
                                <h1
                                    className={`text-[16px] flex items-center justify-start leading-[24px] font-normal ${
                                    loading ? 'text-white' : 'text-[#41404B]'
                                    }`}
                                >
                                    {message} 
                                </h1>
                            </div>
                    </div>




                    <div className="pt-[15px]">
                        {/* {(loading || (Array.isArray(results) && results.length > 0)) && ( */}
                            <div  className={`py-10   px-10 flex items-center justify-center ${
                                loading || results ? 'bg-[#FFFFFF]' : ''
                            }`}>
                            <div className="grid grid-cols-3 gap-10">
                               
                                    {loading ? (
                                        // Skeleton Loader for 3 consultant cards (No map, explicit rendering)
                                      
                                            <>
                                            <div className="bg-white rounded-[8px] py-[15px] px-[12px] shadow-custom">
                                                <div className="flex items-start gap-4">
                                                    <Skeleton className="w-12 h-12 rounded-full" />
                                                    <div>
                                                        <Skeleton className="w-48 h-6 mb-2" />
                                                        <Skeleton className="w-32 h-4 mb-1" />
                                                        <Skeleton className="w-40 h-4" />
                                                    </div>
                                                </div>
                                                <div className="pt-[20px] space-y-[10px]">
                                                    <div className="flex items-center gap-[10px]">
                                                        <Skeleton className="w-full h-8 rounded-full max-w-[143px]" />
                                                        <Skeleton className="w-full h-8 rounded-full max-w-[143px]" />
                                                    </div>
                                                    <div className="flex items-center gap-[10px]">
                                                        <Skeleton className="w-full h-8 rounded-full max-w-[214px]" />
                                                        <Skeleton className="w-full h-8 rounded-full max-w-[61px]" />
                                                    </div>
                                                </div>
                                                <div className="pt-[25px]">
                                                    <Skeleton className="w-full h-10 rounded-lg" />
                                                </div>
                                            </div>
                                            <div className="bg-white rounded-[8px] py-[15px] px-[12px] shadow-custom">
                                                <div className="flex items-start gap-4">
                                                    <Skeleton className="w-12 h-12 rounded-full" />
                                                    <div>
                                                        <Skeleton className="w-48 h-6 mb-2" />
                                                        <Skeleton className="w-32 h-4 mb-1" />
                                                        <Skeleton className="w-40 h-4" />
                                                    </div>
                                                </div>
                                                <div className="pt-[20px] space-y-[10px]">
                                                    <div className="flex items-center gap-[10px]">
                                                        <Skeleton className="w-full h-8 rounded-full max-w-[143px]" />
                                                        <Skeleton className="w-full h-8 rounded-full max-w-[143px]" />
                                                    </div>
                                                    <div className="flex items-center gap-[10px]">
                                                        <Skeleton className="w-full h-8 rounded-full max-w-[214px]" />
                                                        <Skeleton className="w-full h-8 rounded-full max-w-[61px]" />
                                                    </div>
                                                </div>
                                                <div className="pt-[25px]">
                                                    <Skeleton className="w-full h-10 rounded-lg" />
                                                </div>
                                            </div>
                                            <div className="bg-white rounded-[8px] py-[15px] px-[12px] shadow-custom">
                                                <div className="flex items-start gap-4">
                                                    <Skeleton className="w-12 h-12 rounded-full" />
                                                    <div>
                                                        <Skeleton className="w-48 h-6 mb-2" />
                                                        <Skeleton className="w-32 h-4 mb-1" />
                                                        <Skeleton className="w-40 h-4" />
                                                    </div>
                                                </div>
                                                <div className="pt-[20px] space-y-[10px]">
                                                    <div className="flex items-center gap-[10px]">
                                                        <Skeleton className="w-full h-8 rounded-full max-w-[143px]" />
                                                        <Skeleton className="w-full h-8 rounded-full max-w-[143px]" />
                                                    </div>
                                                    <div className="flex items-center gap-[10px]">
                                                        <Skeleton className="w-full h-8 rounded-full max-w-[214px]" />
                                                        <Skeleton className="w-full h-8 rounded-full max-w-[61px]" />
                                                    </div>
                                                </div>
                                                <div className="pt-[25px]">
                                                    <Skeleton className="w-full h-10 rounded-lg" />
                                                </div>
                                            </div>
                                            <div className="bg-white rounded-[8px] py-[15px] px-[12px] shadow-custom">
                                                <div className="flex items-start gap-4">
                                                    <Skeleton className="w-12 h-12 rounded-full" />
                                                    <div>
                                                        <Skeleton className="w-48 h-6 mb-2" />
                                                        <Skeleton className="w-32 h-4 mb-1" />
                                                        <Skeleton className="w-40 h-4" />
                                                    </div>
                                                </div>
                                                <div className="pt-[20px] space-y-[10px]">
                                                    <div className="flex items-center gap-[10px]">
                                                        <Skeleton className="w-full h-8 rounded-full max-w-[143px]" />
                                                        <Skeleton className="w-full h-8 rounded-full max-w-[143px]" />
                                                    </div>
                                                    <div className="flex items-center gap-[10px]">
                                                        <Skeleton className="w-full h-8 rounded-full max-w-[214px]" />
                                                        <Skeleton className="w-full h-8 rounded-full max-w-[61px]" />
                                                    </div>
                                                </div>
                                                <div className="pt-[25px]">
                                                    <Skeleton className="w-full h-10 rounded-lg" />
                                                </div>
                                            </div>


                                            <div className="bg-white rounded-[8px] py-[15px] px-[12px] shadow-custom">
                                                <div className="flex items-start gap-4">
                                                    <Skeleton className="w-12 h-12 rounded-full" />
                                                    <div>
                                                        <Skeleton className="w-48 h-6 mb-2" />
                                                        <Skeleton className="w-32 h-4 mb-1" />
                                                        <Skeleton className="w-40 h-4" />
                                                    </div>
                                                </div>
                                                <div className="pt-[20px] space-y-[10px]">
                                                    <div className="flex items-center gap-[10px]">
                                                        <Skeleton className="w-full h-8 rounded-full max-w-[143px]" />
                                                        <Skeleton className="w-full h-8 rounded-full max-w-[143px]" />
                                                    </div>
                                                    <div className="flex items-center gap-[10px]">
                                                        <Skeleton className="w-full h-8 rounded-full max-w-[214px]" />
                                                        <Skeleton className="w-full h-8 rounded-full max-w-[61px]" />
                                                    </div>
                                                </div>
                                                <div className="pt-[25px]">
                                                    <Skeleton className="w-full h-10 rounded-lg" />
                                                </div>
                                            </div>


                                            <div className="bg-white rounded-[8px] py-[15px] px-[12px] shadow-custom">
                                                <div className="flex items-start gap-4">
                                                    <Skeleton className="w-12 h-12 rounded-full" />
                                                    <div>
                                                        <Skeleton className="w-48 h-6 mb-2" />
                                                        <Skeleton className="w-32 h-4 mb-1" />
                                                        <Skeleton className="w-40 h-4" />
                                                    </div>
                                                </div>
                                                <div className="pt-[20px] space-y-[10px]">
                                                    <div className="flex items-center gap-[10px]">
                                                        <Skeleton className="w-full h-8 rounded-full max-w-[143px]" />
                                                        <Skeleton className="w-full h-8 rounded-full max-w-[143px]" />
                                                    </div>
                                                    <div className="flex items-center gap-[10px]">
                                                        <Skeleton className="w-full h-8 rounded-full max-w-[214px]" />
                                                        <Skeleton className="w-full h-8 rounded-full max-w-[61px]" />
                                                    </div>
                                                </div>
                                                <div className="pt-[25px]">
                                                    <Skeleton className="w-full h-10 rounded-lg" />
                                                </div>
                                            </div>
                                            </>
                                        
                                 
                                    ) : results ? (
                                <>
                                <div className="bg-white rounded-[8px] py-[15px] px-[12px] shadow-custom">
                                    <div className="flex items-start gap-4">
                                    <Image src={DoraConsultant} alt="DoraConsultant" />
                                    <div>
                                        <h1 className="text-[20px] leading-[30px] font-bold text-[#101828]">Dora Consulting Ltd.</h1>
                                        <p className="text-[13px] leading-[19.5px] text-[#41404B] font-normal">Digital Marketing & SEO Consulting</p>
                                        <p className="text-[13px] leading-[19.5px] text-[#41404B] font-normal max-w-[215px]">Lagos, Nigeria - ⭐⭐⭐⭐⭐ (4.9/5 reviews)</p>
                                    </div>
                                    </div>

                                    <div className="pt-[20px] space-y-[10px]">
                                    <div className="flex items-center gap-[10px]">
                                        <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] border-[#F0F0F9] max-w-[143px] flex items-center justify-center p-[10px] rounded-[100px] w-full">SEO audits</h1>
                                        <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] max-w-[143px] flex items-center justify-center p-[10px] whitespace-nowrap rounded-[100px] border-[#F0F0F9] w-full">On-page Optimization</h1>
                                    </div>

                                    <div className="flex items-center gap-[10px]">
                                        <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] border-[#F0F0F9] max-w-[214px] flex items-center justify-center p-[10px] rounded-[100px] w-full whitespace-nowrap">Google Ads & Facebook Ads Mgt</h1>
                                        <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] max-w-[61px] flex items-center justify-center p-[10px] whitespace-nowrap rounded-[100px] border-[#F0F0F9] w-full">Growth</h1>
                                    </div>
                                    </div>

                                    <div className="pt-[25px]">
                                    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                                        <DrawerTrigger asChild>
                                        <button className="text-[16.5px] leading-[19.8px] font-bold text-[#5B52B6] bg-[#CFCDEC] w-[294px] p-[10px] rounded-[8px] hover:bg-[#5B52B6] hover:text-white transition-all">
                                            Send Job Order
                                        </button>
                                        </DrawerTrigger>
                                        <DrawerContent className="h-[85vh]">
                                            <div className="flex items-start gap-20">
                                                <div>
                                                    <div className="flex items-start gap-12 pl-[57px] pt-[61px]">
                                                        <div className="flex items-start gap-[12px]">
                                                            <Image src={DoraConsultant} alt="DoraConsultant" />
                                                            <div>
                                                                <h1 className="text-[#101828] text-[20px] leading-[30px] font-bold">Dora Consulting Ltd.</h1>
                                                                <p className="text-[#41404B] text-[13px] leading-[19.5px] font-normal">Abuja, Nigeria - ⭐⭐⭐⭐⭐ (4.9/5 reviews)</p>
                                                                <p className="text-[16px] leading-[24px] text-[#41404B] font-medium">Business Strategy & Mgt Consulting</p>
                                                                <p className="text-[#41404B] text-[13px] leading-[19.5px]">10+ years in Corporate Strategy and Business Management.</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-8">
                                                            <button className="text-white bg-[#5B52B6] w-[294px] rounded-[8px] p-[10px] text-[16.5px] leading-[19.8px] font-bold">
                                                                Send Job Order
                                                            </button>
                                                            <Image width={24} height={24} src={SavedIcon} alt="SavedIcon" />
                                                            <Image width={24} height={24} src={ShareToIcon} alt="ShareToIcon" />
                                                        </div>
                                                    </div>
                                                    <div className="pl-[70px] pt-[50px] w-full max-w-[700px]">
                                                        <div className="h-[300px] overflow-y-auto pr-[20px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                                                            <div>
                                                                <h1 className="text-[20px] leading-[30px] text-[#101828] font-bold">About Us:</h1>
                                                                <p className="text-[16px] leading-[24px] text-[#41404B] font-normal max-w-[635px]">Assisting organizations in streamlining their operations, reducing inefficiencies, and implementing structural changes to improve business performance. Dora Consulting has overseen mergers, workforce optimizations, and departmental realignments for several large enterprises.</p>
                                                                <p className="pt-[20px] text-[16px] leading-[24px] text-[#41404B] font-normal max-w-[635px]">Assisting organizations in streamlining their operations, reducing inefficiencies, and implementing structural changes to improve business performance. Dora Consulting has overseen mergers, workforce optimizations, and departmental realignments for several large enterprises.</p>
                                                            </div>
                                                            <div className="pt-[20px]">
                                                                <h1 className="text-[20px] leading-[30px] text-[#101828] font-bold">Refund Policy</h1>
                                                                <p className="text-[16px] leading-[24px] text-[#41404B] font-normal max-w-[635px]">Assisting organizations in streamlining their operations, reducing inefficiencies, and implementing structural changes to improve business performance. Dora Consulting has overseen mergers, workforce optimizations, and departmental realignments for several large enterprises.</p>
                                                                <p className="pt-[20px] text-[16px] leading-[24px] text-[#41404B] font-normal max-w-[635px]">Assisting organizations in streamlining their operations, reducing inefficiencies, and implementing structural changes to improve business performance. Dora Consulting has overseen mergers, workforce optimizations, and departmental realignments for several large enterprises.</p>
                                                            </div>
                                                            <div className="pt-[20px]">
                                                                <h1 className="text-[20px] leading-[30px] text-[#101828] font-bold">Why Hire Us</h1>
                                                                <p className="text-[16px] leading-[24px] text-[#41404B] font-normal max-w-[635px]">Assisting organizations in streamlining their operations, reducing inefficiencies, and implementing structural changes to improve business performance. Dora Consulting has overseen mergers, workforce optimizations, and departmental realignments for several large enterprises.</p>
                                                                <p className="pt-[20px] text-[16px] leading-[24px] text-[#41404B] font-normal max-w-[635px]">Assisting organizations in streamlining their operations, reducing inefficiencies, and implementing structural changes to improve business performance. Dora Consulting has overseen mergers, workforce optimizations, and departmental realignments for several large enterprises.</p>
                                                            </div>
                                                            <div className="pt-[20px]">
                                                                <h1 className="text-[20px] leading-[30px] text-[#101828] font-bold">Testimonials</h1>
                                                                <p className="text-[16px] leading-[24px] text-[#41404B] font-normal max-w-[635px]">Assisting organizations in streamlining their operations, reducing inefficiencies, and implementing structural changes to improve business performance. Dora Consulting has overseen mergers, workforce optimizations, and departmental realignments for several large enterprises.</p>
                                                                <p className="pt-[20px] text-[16px] leading-[24px] text-[#41404B] font-normal max-w-[635px]">Assisting organizations in streamlining their operations, reducing inefficiencies, and implementing structural changes to improve business performance. Dora Consulting has overseen mergers, workforce optimizations, and departmental realignments for several large enterprises.</p>
                                                            </div>
                                                            <div className="pt-[15px] flex items-center space-x-3">
                                                                <input
                                                                    type="checkbox"
                                                                    id="refundPolicy"
                                                                    className="w-5 h-5 accent-[#7B91B0] rounded-md"
                                                                />
                                                                <label htmlFor="refundPolicy" className="text-[#41404B] text-[12.8px] font-normal leading-[16.2px]">
                                                                    I have read and accept the Refund Policy.
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="pt-[61px] overflow-y-auto pr-[20px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 h-[500px]">
                                                    <div>
                                                        <h1 className="text-[20px] leading-[30px] text-[#101828] font-bold">Other Consultants</h1>
                                                    </div>

                                                    <div className="pt-[20px]">
                                                        <div className="border-[0.83px] border-[#F1F1F1]  rounded-[6.65px] p-[13.29px]">
                                                            <div className="flex items-start gap-[8px]">
                                                                <Image width={55.66} height={52.34} src={AlimantoConsultant} alt="AlimantoConsultant" />
                                                                <div>
                                                                    <h1 className="text-[#101828] text-[16.61px] leading-[24.92px] font-bold">Alimanto Nig. Ltd.</h1>
                                                                    <p className="text-[10.8px] leading-[16.2px] font-normal text-[#41404B]">Digital Marketing & SEO Consulting</p>
                                                                    <p className="text-[#41404B] text-[10.8px] leading-[16.2px] font-normal max-w-[178.61px]">Lagos, Nigeria - ⭐⭐⭐⭐⭐ (4.9/5 reviews)</p>
                                                                </div>
                                                                <Image src={SavedIconWhite} alt="SavedIconWhite" />
                                                            </div>

                                                            <div className="w-full grid grid-cols-3 space-y-[10px]">
                                                                <h1 className="text-[10.8px] leading-[16.2px] font-normal text-[#41404B] border-[0.83px] max-w-[76.98px] flex items-center justify-center p-[8.31px] rounded-[83.07px] border-[#F0F0F9]">Restructuring</h1>

                                                                <h1 className="text-[10.8px] leading-[16.2px] font-normal text-[#41404B] border-[0.83px] max-w-[76.98px] flex items-center justify-center p-[8.31px] rounded-[83.07px] border-[#F0F0F9]">Advisory</h1>

                                                                <h1 className="text-[10.8px] leading-[16.2px] font-normal text-[#41404B] border-[0.83px] max-w-[80px] flex items-center justify-center p-[8.31px] rounded-[83.07px] border-[#F0F0F9] whitespace-nowrap">Market research</h1>

                                                                <h1 className="text-[10.8px] leading-[16.2px] font-normal text-[#41404B] border-[0.83px] max-w-[101.29px] flex items-center justify-center p-[8.31px] rounded-[83.07px] border-[#F0F0F9] whitespace-nowrap">Feasiblity studies</h1>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="pt-[20px]">
                                                        <div className="border-[0.83px] border-[#F1F1F1]  rounded-[6.65px] p-[13.29px]">
                                                            <div className="flex items-start gap-[8px]">
                                                                <Image width={55.66} height={52.34} src={OrionConsultant} alt="OrionConsultant" />
                                                                <div>
                                                                    <h1 className="text-[#101828] text-[16.61px] leading-[24.92px] font-bold">Orion Consulting Ltd</h1>
                                                                    <p className="text-[10.8px] leading-[16.2px] font-normal text-[#41404B]">Digital Marketing & SEO Consulting</p>
                                                                    <p className="text-[#41404B] text-[10.8px] leading-[16.2px] font-normal max-w-[178.61px]">Lagos, Nigeria - ⭐⭐⭐⭐⭐ (4.9/5 reviews)</p>
                                                                </div>
                                                                <Image src={SavedIconWhite} alt="SavedIconWhite" />
                                                            </div>

                                                            <div className="w-full grid grid-cols-3 space-y-[10px]">
                                                                <h1 className="text-[10.8px] leading-[16.2px] font-normal text-[#41404B] border-[0.83px] max-w-[76.98px] flex items-center justify-center p-[8.31px] rounded-[83.07px] border-[#F0F0F9]">Restructuring</h1>

                                                                <h1 className="text-[10.8px] leading-[16.2px] font-normal text-[#41404B] border-[0.83px] max-w-[76.98px] flex items-center justify-center p-[8.31px] rounded-[83.07px] border-[#F0F0F9]">Advisory</h1>

                                                                <h1 className="text-[10.8px] leading-[16.2px] font-normal text-[#41404B] border-[0.83px] max-w-[80px] flex items-center justify-center p-[8.31px] rounded-[83.07px] border-[#F0F0F9] whitespace-nowrap">Market research</h1>

                                                                <h1 className="text-[10.8px] leading-[16.2px] font-normal text-[#41404B] border-[0.83px] max-w-[101.29px] flex items-center justify-center p-[8.31px] rounded-[83.07px] border-[#F0F0F9] whitespace-nowrap">Feasiblity studies</h1>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="pt-[20px]">
                                                        <div className="border-[0.83px] border-[#F1F1F1]  rounded-[6.65px] p-[13.29px]">
                                                            <div className="flex items-start gap-[8px]">
                                                                <Image width={55.66} height={52.34} src={DatolConsultant} alt="DatolConsultant" />
                                                                <div>
                                                                    <h1 className="text-[#101828] text-[16.61px] leading-[24.92px] font-bold">Datol Enterprises Ltd.</h1>
                                                                    <p className="text-[10.8px] leading-[16.2px] font-normal text-[#41404B]">Legal & Compliance Consulting</p>
                                                                    <p className="text-[#41404B] text-[10.8px] leading-[16.2px] font-normal max-w-[178.61px]">Kaduna, Nigeria - ⭐⭐⭐⭐⭐ (4.9/5 reviews)</p>
                                                                </div>
                                                                <Image src={SavedIconWhite} alt="SavedIconWhite" />
                                                            </div>

                                                            <div className="w-full grid grid-cols-3 space-y-[10px]">
                                                                <h1 className="text-[10.8px] leading-[16.2px] font-normal text-[#41404B] border-[0.83px] max-w-[76.98px] flex items-center justify-center p-[8.31px] rounded-[83.07px] border-[#F0F0F9]">Restructuring</h1>

                                                                <h1 className="text-[10.8px] leading-[16.2px] font-normal text-[#41404B] border-[0.83px] max-w-[76.98px] flex items-center justify-center p-[8.31px] rounded-[83.07px] border-[#F0F0F9]">Advisory</h1>

                                                                <h1 className="text-[10.8px] leading-[16.2px] font-normal text-[#41404B] border-[0.83px] max-w-[80px] flex items-center justify-center p-[8.31px] rounded-[83.07px] border-[#F0F0F9] whitespace-nowrap">Market research</h1>

                                                                <h1 className="text-[10.8px] leading-[16.2px] font-normal text-[#41404B] border-[0.83px] max-w-[101.29px] flex items-center justify-center p-[8.31px] rounded-[83.07px] border-[#F0F0F9] whitespace-nowrap">Feasiblity studies</h1>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="pt-[20px]">
                                                        <div className="border-[0.83px] border-[#F1F1F1]  rounded-[6.65px] p-[13.29px]">
                                                            <div className="flex items-start gap-[8px]">
                                                                <Image width={55.66} height={52.34} src={AdexConsultant} alt="AdexConsultant" />
                                                                <div>
                                                                    <h1 className="text-[#101828] text-[16.61px] leading-[24.92px] font-bold">ADEX Energy Ltd.</h1>
                                                                    <p className="text-[10.8px] leading-[16.2px] font-normal text-[#41404B]">Financial & Investment Consulting</p>
                                                                    <p className="text-[#41404B] text-[10.8px] leading-[16.2px] font-normal max-w-[178.61px]">Ibadan, Nigeria - ⭐⭐⭐⭐⭐ (4.9/5 reviews)</p>
                                                                </div>
                                                                <Image src={SavedIconWhite} alt="SavedIconWhite" />
                                                            </div>

                                                            <div className="w-full grid grid-cols-3 space-y-[10px]">
                                                                <h1 className="text-[10.8px] leading-[16.2px] font-normal text-[#41404B] border-[0.83px] max-w-[76.98px] flex items-center justify-center p-[8.31px] rounded-[83.07px] border-[#F0F0F9]">Restructuring</h1>

                                                                <h1 className="text-[10.8px] leading-[16.2px] font-normal text-[#41404B] border-[0.83px] max-w-[76.98px] flex items-center justify-center p-[8.31px] rounded-[83.07px] border-[#F0F0F9]">Advisory</h1>

                                                                <h1 className="text-[10.8px] leading-[16.2px] font-normal text-[#41404B] border-[0.83px] max-w-[80px] flex items-center justify-center p-[8.31px] rounded-[83.07px] border-[#F0F0F9] whitespace-nowrap">Market research</h1>

                                                                <h1 className="text-[10.8px] leading-[16.2px] font-normal text-[#41404B] border-[0.83px] max-w-[101.29px] flex items-center justify-center p-[8.31px] rounded-[83.07px] border-[#F0F0F9] whitespace-nowrap">Feasiblity studies</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute top-[10px] left-20">
                                                <DrawerClose>
                                                    <Image src={BackIcon} alt="BackIcon" />
                                                </DrawerClose>
                                            </div>
                                        </DrawerContent>
                                    </Drawer>
                                    </div>
                                </div>

                                <div className="bg-white rounded-[8px] py-[15px] px-[12px] shadow-custom">
                                    <div className="flex items-start gap-4">
                                        <Image src={AlimantoConsultant} alt="AlimantoConsultant" />
                                        <div>
                                            <h1 className="text-[20px] leading-[30px] font-bold text-[#101828]">Alimanto Nig. Ltd.</h1>
                                            <p className="text-[13px] leading-[19.5px] text-[#41404B] font-normal">Digital Marketing & SEO Consulting</p>
                                            <p className="text-[13px] leading-[19.5px] text-[#41404B] font-normal max-w-[215px]">Lagos, Nigeria - ⭐⭐⭐⭐⭐ (4.9/5 reviews)</p>
                                        </div>
                                    </div>

                                    <div className="pt-[20px] space-y-[10px]">
                                        <div className="flex items-center gap-[10px]">
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] border-[#F0F0F9] max-w-[143px] flex items-center justify-center p-[10px] rounded-[100px] w-full">SEO audits</h1>
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] max-w-[143px] flex items-center justify-center p-[10px] whitespace-nowrap rounded-[100px] border-[#F0F0F9] w-full">On-page Optimization</h1>
                                        </div>

                                        <div className="flex items-center gap-[10px]">
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] border-[#F0F0F9] max-w-[214px] flex items-center justify-center p-[10px] rounded-[100px] w-full  whitespace-nowrap">Google Ads & Facebook Ads Mgt</h1>
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] max-w-[61px] flex items-center justify-center p-[10px] whitespace-nowrap rounded-[100px] border-[#F0F0F9] w-full">Growth</h1>
                                        </div>
                                    </div>

                                    <div className="pt-[25px]">
                                        <button className="text-[16.5px] leading-[19.8px] font-bold text-[#5B52B6] bg-[#CFCDEC] w-[294px] p-[10px] rounded-[8px] hover:bg-[#5B52B6] hover:text-[white] transition-ease">
                                            Send Job Order
                                        </button>
                                    </div>
                                </div>


                                <div className="bg-white rounded-[8px] py-[15px] px-[12px] shadow-custom">
                                    <div className="flex items-start gap-4">
                                        <Image src={OrionConsultant} alt="OrionConsultant" />
                                        <div>
                                            <h1 className="text-[20px] leading-[30px] font-bold text-[#101828]">Orion Consulting Ltd</h1>
                                            <p className="text-[13px] leading-[19.5px] text-[#41404B] font-normal">Digital Marketing & SEO Consulting</p>
                                            <p className="text-[13px] leading-[19.5px] text-[#41404B] font-normal max-w-[215px]">Lagos, Nigeria - ⭐⭐⭐⭐⭐ (4.9/5 reviews)</p>
                                        </div>
                                    </div>

                                    <div className="pt-[20px] space-y-[10px]">
                                        <div className="flex items-center gap-[10px]">
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] border-[#F0F0F9] max-w-[143px] flex items-center justify-center p-[10px] rounded-[100px] w-full">SEO audits</h1>
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] max-w-[143px] flex items-center justify-center p-[10px] whitespace-nowrap rounded-[100px] border-[#F0F0F9] w-full">On-page Optimization</h1>
                                        </div>

                                        <div className="flex items-center gap-[10px]">
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] border-[#F0F0F9] max-w-[214px] flex items-center justify-center p-[10px] rounded-[100px] w-full whitespace-nowrap">Google Ads & Facebook Ads Mgt</h1>
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] max-w-[61px] flex items-center justify-center p-[10px] whitespace-nowrap rounded-[100px] border-[#F0F0F9] w-full">Growth</h1>
                                        </div>
                                    </div>

                                    <div className="pt-[25px]">
                                        <button className="text-[16.5px] leading-[19.8px] font-bold text-[#5B52B6] bg-[#CFCDEC] w-[294px] p-[10px] rounded-[8px] hover:bg-[#5B52B6] hover:text-[white] transition-ease">
                                            Send Job Order
                                        </button>
                                    </div>
                                </div>


                                <div className="bg-white rounded-[8px] py-[15px] px-[12px] shadow-custom">
                                    <div className="flex items-start gap-4">
                                        <Image src={DatolConsultant} alt="DatolConsultant" />
                                        <div>
                                            <h1 className="text-[20px] leading-[30px] font-bold text-[#101828]">Datol Enterprises Ltd.</h1>
                                            <p className="text-[13px] leading-[19.5px] text-[#41404B] font-normal">Digital Marketing & SEO Consulting</p>
                                            <p className="text-[13px] leading-[19.5px] text-[#41404B] font-normal max-w-[215px]">Lagos, Nigeria - ⭐⭐⭐⭐⭐ (4.9/5 reviews)</p>
                                        </div>
                                    </div>

                                    <div className="pt-[20px] space-y-[10px]">
                                        <div className="flex items-center gap-[10px]">
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] border-[#F0F0F9] max-w-[143px] flex items-center justify-center p-[10px] rounded-[100px] w-full">SEO audits</h1>
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] max-w-[143px] flex items-center justify-center p-[10px] whitespace-nowrap rounded-[100px] border-[#F0F0F9] w-full">On-page Optimization</h1>
                                        </div>

                                        <div className="flex items-center gap-[10px]">
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] border-[#F0F0F9] max-w-[214px] flex items-center justify-center p-[10px] rounded-[100px] w-full whitespace-nowrap">Google Ads & Facebook Ads Mgt</h1>
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] max-w-[61px] flex items-center justify-center p-[10px] whitespace-nowrap rounded-[100px] border-[#F0F0F9] w-full">Growth</h1>
                                        </div>
                                    </div>

                                    <div className="pt-[25px]">
                                        <button className="text-[16.5px] leading-[19.8px] font-bold text-[#5B52B6] bg-[#CFCDEC] w-[294px] p-[10px] rounded-[8px] hover:bg-[#5B52B6] hover:text-[white] transition-ease">
                                            Send Job Order
                                        </button>
                                    </div>
                                </div>


                                <div className="bg-white rounded-[8px] py-[15px] px-[12px] shadow-custom">
                                    <div className="flex items-start gap-4">
                                        <Image src={AdexConsultant} alt="AdexConsultant" />
                                        <div>
                                            <h1 className="text-[20px] leading-[30px] font-bold text-[#101828]">ADEX Energy Ltd.</h1>
                                            <p className="text-[13px] leading-[19.5px] text-[#41404B] font-normal">Digital Marketing & SEO Consulting</p>
                                            <p className="text-[13px] leading-[19.5px] text-[#41404B] font-normal max-w-[215px]">Lagos, Nigeria - ⭐⭐⭐⭐⭐ (4.9/5 reviews)</p>
                                        </div>
                                    </div>

                                    <div className="pt-[20px] space-y-[10px]">
                                        <div className="flex items-center gap-[10px]">
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] border-[#F0F0F9] max-w-[143px] flex items-center justify-center p-[10px] rounded-[100px] w-full">SEO audits</h1>
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] max-w-[143px] flex items-center justify-center p-[10px] whitespace-nowrap rounded-[100px] border-[#F0F0F9] w-full">On-page Optimization</h1>
                                        </div>

                                        <div className="flex items-center gap-[10px]">
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] border-[#F0F0F9] max-w-[214px] flex items-center justify-center p-[10px] rounded-[100px] w-full whitespace-nowrap">Google Ads & Facebook Ads Mgt</h1>
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] max-w-[61px] flex items-center justify-center p-[10px] whitespace-nowrap rounded-[100px] border-[#F0F0F9] w-full">Growth</h1>
                                        </div>
                                    </div>

                                    <div className="pt-[25px]">
                                        <button className="text-[16.5px] leading-[19.8px] font-bold text-[#5B52B6] bg-[#CFCDEC] w-[294px] p-[10px] rounded-[8px] hover:bg-[#5B52B6] hover:text-[white] transition-ease">
                                            Send Job Order
                                        </button>
                                    </div>
                                </div>


                                <div className="bg-white rounded-[8px] py-[15px] px-[12px] shadow-custom">
                                    <div className="flex items-start gap-4">
                                        <Image src={AdeolaConsultant} alt="AdeolaConsultant" />
                                        <div>
                                            <h1 className="text-[20px] leading-[30px] font-bold text-[#101828]">Adeola & Co.</h1>
                                            <p className="text-[13px] leading-[19.5px] text-[#41404B] font-normal">Digital Marketing & SEO Consulting</p>
                                            <p className="text-[13px] leading-[19.5px] text-[#41404B] font-normal max-w-[215px]">Lagos, Nigeria - ⭐⭐⭐⭐⭐ (4.9/5 reviews)</p>
                                        </div>
                                    </div>

                                    <div className="pt-[20px] space-y-[10px]">
                                        <div className="flex items-center gap-[10px]">
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] border-[#F0F0F9] max-w-[143px] flex items-center justify-center p-[10px] rounded-[100px] w-full">SEO audits</h1>
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] max-w-[143px] flex items-center justify-center p-[10px] whitespace-nowrap rounded-[100px] border-[#F0F0F9] w-full">On-page Optimization</h1>
                                        </div>

                                        <div className="flex items-center gap-[10px]">
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] border-[#F0F0F9] max-w-[214px] flex items-center justify-center p-[10px] rounded-[100px] w-full whitespace-nowrap">Google Ads & Facebook Ads Mgt</h1>
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] max-w-[61px] flex items-center justify-center p-[10px] whitespace-nowrap rounded-[100px] border-[#F0F0F9] w-full">Growth</h1>
                                        </div>
                                    </div>

                                    <div className="pt-[25px]">
                                        <button className="text-[16.5px] leading-[19.8px] font-bold text-[#5B52B6] bg-[#CFCDEC] w-[294px] p-[10px] rounded-[8px] hover:bg-[#5B52B6] hover:text-[white] transition-ease">
                                            Send Job Order
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white rounded-[8px] py-[15px] px-[12px] shadow-custom">
                                    <div className="flex items-start gap-4">
                                        <Image src={OrionConsultant} alt="OrionConsultant" />
                                        <div>
                                            <h1 className="text-[20px] leading-[30px] font-bold text-[#101828]">Orion Consulting Ltd</h1>
                                            <p className="text-[13px] leading-[19.5px] text-[#41404B] font-normal">Digital Marketing & SEO Consulting</p>
                                            <p className="text-[13px] leading-[19.5px] text-[#41404B] font-normal max-w-[215px]">Lagos, Nigeria - ⭐⭐⭐⭐⭐ (4.9/5 reviews)</p>
                                        </div>
                                    </div>

                                    <div className="pt-[20px] space-y-[10px]">
                                        <div className="flex items-center gap-[10px]">
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] border-[#F0F0F9] max-w-[143px] flex items-center justify-center p-[10px] rounded-[100px] w-full">SEO audits</h1>
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] max-w-[143px] flex items-center justify-center p-[10px] whitespace-nowrap rounded-[100px] border-[#F0F0F9] w-full">On-page Optimization</h1>
                                        </div>

                                        <div className="flex items-center gap-[10px]">
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] border-[#F0F0F9] max-w-[214px] flex items-center justify-center p-[10px] rounded-[100px] w-full whitespace-nowrap">Google Ads & Facebook Ads Mgt</h1>
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] max-w-[61px] flex items-center justify-center p-[10px] whitespace-nowrap rounded-[100px] border-[#F0F0F9] w-full">Growth</h1>
                                        </div>
                                    </div>

                                    <div className="pt-[25px]">
                                        <button className="text-[16.5px] leading-[19.8px] font-bold text-[#5B52B6] bg-[#CFCDEC] w-[294px] p-[10px] rounded-[8px] hover:bg-[#5B52B6] hover:text-[white] transition-ease">
                                            Send Job Order
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white rounded-[8px] py-[15px] px-[12px] shadow-custom">
                                    <div className="flex items-start gap-4">
                                        <Image src={AdeolaConsultant} alt="AdeolaConsultant" />
                                        <div>
                                            <h1 className="text-[20px] leading-[30px] font-bold text-[#101828]">Adeola & Co.</h1>
                                            <p className="text-[13px] leading-[19.5px] text-[#41404B] font-normal">Digital Marketing & SEO Consulting</p>
                                            <p className="text-[13px] leading-[19.5px] text-[#41404B] font-normal max-w-[215px]">Lagos, Nigeria - ⭐⭐⭐⭐⭐ (4.9/5 reviews)</p>
                                        </div>
                                    </div>

                                    <div className="pt-[20px] space-y-[10px]">
                                        <div className="flex items-center gap-[10px]">
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] border-[#F0F0F9] max-w-[143px] flex items-center justify-center p-[10px] rounded-[100px] w-full">SEO audits</h1>
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] max-w-[143px] flex items-center justify-center p-[10px] whitespace-nowrap rounded-[100px] border-[#F0F0F9] w-full">On-page Optimization</h1>
                                        </div>

                                        <div className="flex items-center gap-[10px]">
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] border-[#F0F0F9] max-w-[214px] flex items-center justify-center p-[10px] rounded-[100px] w-full whitespace-nowrap">Google Ads & Facebook Ads Mgt</h1>
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] max-w-[61px] flex items-center justify-center p-[10px] whitespace-nowrap rounded-[100px] border-[#F0F0F9] w-full">Growth</h1>
                                        </div>
                                    </div>

                                    <div className="pt-[25px]">
                                        <button className="text-[16.5px] leading-[19.8px] font-bold text-[#5B52B6] bg-[#CFCDEC] w-[294px] p-[10px] rounded-[8px] hover:bg-[#5B52B6] group hover:text-[white] transition-ease">
                                            Send Job Order
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white rounded-[8px] py-[15px] px-[12px] shadow-custom">
                                    <div className="flex items-start gap-4">
                                        <Image src={DatolConsultant} alt="DatolConsultant" />
                                        <div>
                                            <h1 className="text-[20px] leading-[30px] font-bold text-[#101828]">Datol Enterprises Ltd.</h1>
                                            <p className="text-[13px] leading-[19.5px] text-[#41404B] font-normal">Digital Marketing & SEO Consulting</p>
                                            <p className="text-[13px] leading-[19.5px] text-[#41404B] font-normal max-w-[215px]">Lagos, Nigeria - ⭐⭐⭐⭐⭐ (4.9/5 reviews)</p>
                                        </div>
                                    </div>

                                    <div className="pt-[20px] space-y-[10px]">
                                        <div className="flex items-center gap-[10px]">
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] border-[#F0F0F9] max-w-[143px] flex items-center justify-center p-[10px] rounded-[100px] w-full">SEO audits</h1>
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] max-w-[143px] flex items-center justify-center p-[10px] whitespace-nowrap rounded-[100px] border-[#F0F0F9] w-full">On-page Optimization</h1>
                                        </div>

                                        <div className="flex items-center gap-[10px]">
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] border-[#F0F0F9] max-w-[214px] flex items-center justify-center p-[10px] rounded-[100px] w-full whitespace-nowrap">Google Ads & Facebook Ads Mgt</h1>
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] max-w-[61px] flex items-center justify-center p-[10px] whitespace-nowrap rounded-[100px] border-[#F0F0F9] w-full">Growth</h1>
                                        </div>
                                    </div>

                                    <div className="pt-[25px]">
                                        <button className="text-[16.5px] leading-[19.8px] font-bold text-[#5B52B6] bg-[#CFCDEC] w-[294px] p-[10px] rounded-[8px] hover:bg-[#5B52B6] hover:text-[white] transition-ease">
                                            Send Job Order
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white rounded-[8px] py-[15px] px-[12px] shadow-custom">
                                    <div className="flex items-start gap-4">
                                        <Image src={AlimantoConsultant} alt="AlimantoConsultant" />
                                        <div>
                                            <h1 className="text-[20px] leading-[30px] font-bold text-[#101828]">Alimanto Nig. Ltd.</h1>
                                            <p className="text-[13px] leading-[19.5px] text-[#41404B] font-normal">Digital Marketing & SEO Consulting</p>
                                            <p className="text-[13px] leading-[19.5px] text-[#41404B] font-normal max-w-[215px]">Lagos, Nigeria - ⭐⭐⭐⭐⭐ (4.9/5 reviews)</p>
                                        </div>
                                    </div>

                                    <div className="pt-[20px] space-y-[10px]">
                                        <div className="flex items-center gap-[10px]">
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] border-[#F0F0F9] max-w-[143px] flex items-center justify-center p-[10px] rounded-[100px] w-full">SEO audits</h1>
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] max-w-[143px] flex items-center justify-center p-[10px] whitespace-nowrap rounded-[100px] border-[#F0F0F9] w-full">On-page Optimization</h1>
                                        </div>

                                        <div className="flex items-center gap-[10px]">
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] border-[#F0F0F9] max-w-[214px] flex items-center justify-center p-[10px] rounded-[100px] w-full  whitespace-nowrap">Google Ads & Facebook Ads Mgt</h1>
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] max-w-[61px] flex items-center justify-center p-[10px] whitespace-nowrap rounded-[100px] border-[#F0F0F9] w-full">Growth</h1>
                                        </div>
                                    </div>

                                    <div className="pt-[25px]">
                                        <button className="text-[16.5px] leading-[19.8px] font-bold text-[#5B52B6] bg-[#CFCDEC] w-[294px] p-[10px] rounded-[8px] hover:bg-[#5B52B6] hover:text-[white] transition-ease">
                                            Send Job Order
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-white rounded-[8px] py-[15px] px-[12px] shadow-custom">
                                    <div className="flex items-start gap-4">
                                        <Image src={AdeolaConsultant} alt="AdeolaConsultant" />
                                        <div>
                                            <h1 className="text-[20px] leading-[30px] font-bold text-[#101828]">Adeola & Co.</h1>
                                            <p className="text-[13px] leading-[19.5px] text-[#41404B] font-normal">Digital Marketing & SEO Consulting</p>
                                            <p className="text-[13px] leading-[19.5px] text-[#41404B] font-normal max-w-[215px]">Lagos, Nigeria - ⭐⭐⭐⭐⭐ (4.9/5 reviews)</p>
                                        </div>
                                    </div>

                                    <div className="pt-[20px] space-y-[10px]">
                                        <div className="flex items-center gap-[10px]">
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] border-[#F0F0F9] max-w-[143px] flex items-center justify-center p-[10px] rounded-[100px] w-full">SEO audits</h1>
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] max-w-[143px] flex items-center justify-center p-[10px] whitespace-nowrap rounded-[100px] border-[#F0F0F9] w-full">On-page Optimization</h1>
                                        </div>

                                        <div className="flex items-center gap-[10px]">
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] border-[#F0F0F9] max-w-[214px] flex items-center justify-center p-[10px] rounded-[100px] w-full whitespace-nowrap">Google Ads & Facebook Ads Mgt</h1>
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] max-w-[61px] flex items-center justify-center p-[10px] whitespace-nowrap rounded-[100px] border-[#F0F0F9] w-full">Growth</h1>
                                        </div>
                                    </div>

                                    <div className="pt-[25px]">
                                        <button className="text-[16.5px] leading-[19.8px] font-bold text-[#5B52B6] bg-[#CFCDEC] w-[294px] p-[10px] rounded-[8px] hover:bg-[#5B52B6] hover:text-[white] transition-ease">
                                            Send Job Order
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white rounded-[8px] py-[15px] px-[12px] shadow-custom">
                                    <div className="flex items-start gap-4">
                                        <Image src={DoraConsultant} alt="DoraConsultant" />
                                        <div>
                                            <h1 className="text-[20px] leading-[30px] font-bold text-[#101828]">Dora Consulting Ltd.</h1>
                                            <p className="text-[13px] leading-[19.5px] text-[#41404B] font-normal">Digital Marketing & SEO Consulting</p>
                                            <p className="text-[13px] leading-[19.5px] text-[#41404B] font-normal max-w-[215px]">Lagos, Nigeria - ⭐⭐⭐⭐⭐ (4.9/5 reviews)</p>
                                        </div>
                                    </div>

                                    <div className="pt-[20px] space-y-[10px]">
                                        <div className="flex items-center gap-[10px]">
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] border-[#F0F0F9] max-w-[143px] flex items-center justify-center p-[10px] rounded-[100px] w-full">SEO audits</h1>
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] max-w-[143px] flex items-center justify-center p-[10px] whitespace-nowrap rounded-[100px] border-[#F0F0F9] w-full">On-page Optimization</h1>
                                        </div>

                                        <div className="flex items-center gap-[10px]">
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] border-[#F0F0F9] max-w-[214px] flex items-center justify-center p-[10px] rounded-[100px] w-full whitespace-nowrap">Google Ads & Facebook Ads Mgt</h1>
                                            <h1 className="text-[13px] leading-[19.5px] text-[#41404B] font-normal border-[1px] max-w-[61px] flex items-center justify-center p-[10px] whitespace-nowrap rounded-[100px] border-[#F0F0F9] w-full">Growth</h1>
                                        </div>
                                    </div>

                                    <div className="pt-[25px]">
                                        <button className="text-[16.5px] leading-[19.8px] font-bold text-[#5B52B6] bg-[#CFCDEC] w-[294px] p-[10px] rounded-[8px] hover:bg-[#5B52B6] hover:text-[white] transition-ease">
                                            Send Job Order
                                        </button>
                                    </div>
                                </div>
                                </>
                                ) : null}
                            </div>
                        </div>
                        {/* )}  */}
                    </div>
                </div>

               




                    

                       





            </div>
           
        </div>
    );
};

export default FindAConsultant;