import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import { Search as SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

import NotificationIcon from "../../public/assets/NotificationIcon.svg"
import ChatIcon from "../../public/assets/ChatIcon.svg"
import MyProfile from "../../public/assets/MyProfile.svg"
import profile from "../../public/assets/profile.svg"
import Arrowdown from "../../public/assets/Arrowdown.svg"
import LogOutIcon from "../../public/assets/LogOutIcon.svg"
import ConsultantCompanyLogo1 from "../../public/assets/ConsultantCompanyLogo1.svg"

interface DashboardHeaderProps {
    title: string;
    setActiveComponent: (component: string) => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title ,   setActiveComponent }) => {
    const router = useRouter();
    const [placeholderText, setPlaceholderText] = useState("Search...");
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const toggleOverlay = () => setIsOverlayVisible(!isOverlayVisible);

    const handleClick = () => {
        router.push('/findaconsultant');
    };

    return (
        <header className="flex flex-wrap items-center justify-between p-4 bg-white shadow-sm rounded-md">
            {/* Left Section */}
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <h1 className="text-lg md:text-2xl font-bold text-gray-800">{title}</h1>
                <div className="relative flex items-center w-full md:w-[400px]">
                    <Input
                        type="text"
                        placeholder={placeholderText}
                        onMouseEnter={() => setPlaceholderText("Search for consultants")}
                        onMouseLeave={() => setPlaceholderText("Search...")}
                        onClick={handleClick}
                        className="pr-10 pl-10 py-2 border-none bg-[#F0F0F9] rounded-[100px] max-w-[400px] w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                    />
                    <SearchIcon className="absolute left-3 w-5 h-5 text-gray-500" />
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6 mt-4 md:mt-0 relative">
                <Sheet>
                    <SheetTrigger asChild>
                        <button className="p-2 w-full hover:bg-gray-100 rounded-full transition-colors">
                            <Image width={24} height={24} src={NotificationIcon} alt="Notification Icon" />
                        </button>
                    </SheetTrigger>

                    <SheetContent className="w-full sm:max-w-md overflow-y-auto">
                        <div className="flex flex-col items-start p-4 md:p-6 space-y-6">
                            <h1 className="text-[#101828] text-lg md:text-[20px] font-bold">Notifications</h1>
                            
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg w-full transition-colors">
                                    <Image
                                        src={ConsultantCompanyLogo1}
                                        alt="Company Logo"
                                        width={30}
                                        height={30}
                                        className="rounded-full flex-shrink-0"
                                    />
                                    <div className="flex-1">
                                        <p className="text-sm md:text-base text-[#101828]">
                                            <span className="font-bold">Dora Consulting Ltd.</span> accepted your offer and has sent you a message.
                                        </p>
                                        <p className="text-sm text-[#41404B] mt-1">
                                            3 September, 2024 - 11:21 AM
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>

                <button className="p-2 w-full hover:bg-gray-100 rounded-full transition-colors">
                    <Image 
                        width={24} 
                        height={24} 
                        src={ChatIcon} 
                        alt="Chat Icon" 
                        onClick={() => setActiveComponent("Messages")}
                    />
                </button>

            </div>

            <div className="relative">
                <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={toggleOverlay}
                >
                    <Image width={24} height={24} src={MyProfile} alt="My Profile" />
                    <div className="hidden md:block">
                        <h2 className="text-sm font-semibold text-gray-800">Bankole Onafuwa</h2>
                        <p className="text-sm text-gray-500">Client</p>
                    </div>
                    <Image width={16} height={16} src={Arrowdown} alt="Arrow Down" />
                </div>

                {/* Overlay */}
                {isOverlayVisible && (
                <div
                    className="absolute  pt-10  right-0 mt-2 bg-white flex flex-col items-start gap-4 p-4 rounded-lg shadow-lg w-[150px] z-50"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded-md transition-colors">
                        <Image width={24} height={24} src={profile} alt="Profile" />
                        <span className="text-sm text-[#101828]">Profile</span>
                    </button>

                    <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-100 rounded-md transition-colors">
                        <Image width={24} height={24} src={LogOutIcon} alt="Log Out" />
                        <span className="text-sm text-[#101828]">Log Out</span>
                    </button>
                </div>
                )}
            </div>
        </header>
    );
};

export default DashboardHeader;