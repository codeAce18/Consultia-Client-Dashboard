import { useRouter } from 'next/navigation'; 
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from 'lucide-react';
import Link from "next/link";

import DashboardLogo from "../../public/assets/DashboardLogo.svg"

import DashboardIconNormal from "../../public/assets/DashboardIconNormal.svg"
import DashboardIconWhite from "../../public/assets/DashboardIconWhite.svg"


import JobOrderIcon from "../../public/assets/JobOrderIcon.svg"
import JobOrderIconWhite from "../../public/assets/JobOrderIconWhite.svg"


import InvoiceIcon from "../../public/assets/InvoiceIcon.svg"
import InvoiceIconWhite from "../../public/assets/InvoiceIconWhite.svg"


import PaymentIcon from "../../public/assets/PaymentIcon.svg"
import PaymentIconWhite from "../../public/assets/PaymentIconWhite.svg"


import MessageIcon from "../../public/assets/MessageIcon.svg"
import MessageIconWhite from "../../public/assets/MessageIconWhite.svg"

import BookmarkIcon from "../../public/assets/BookmarkIcon.svg"
import BookmarkIconWhite from "../../public/assets/BookmarkIconWhite.svg"


import settings from "../../public/assets/settings.svg"
import settingsWhite from "../../public/assets/settingsWhite.svg"

import LogOutIcon from "../../public/assets/LogOutIcon.svg"
import LogOutIconWhite from "../../public/assets/LogOutIconWhite.svg"


import Naira from "../../public/assets/Naira.svg"

import TopUpIcon from "../../public/assets/TopUpIcon.svg"
import ShareIcon from "../../public/assets/ShareIcon.svg"
import MoreIcon from "../../public/assets/MoreIcon.svg"


import DashboardContent from "./DashboardContent";
import JobOrderContent from "./JobOrderContent";
import InvoiceContent from "./InvoiceContent";
import PaymentHistoryContent from "./PaymentHistoryContent";
import MessagesContent from "./MessagesContent";
import BookmarkedContent from "./BookmarkedContent";
import SettingsContent from "./SettingsContent";
import WalletContent from "./WalletContent";



const SideBar = () => {

    const router = useRouter(); 

    const handleLogoutClick = () => {
      router.push('/login');
    };


    const [activeComponent, setActiveComponent] = useState("Dashboard");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (componentName: string) => activeComponent === componentName;

    // Handle screen resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

     // Reusable menu link component
     interface MenuLinkProps {
        name: string;
        icon: string;
        whiteIcon: string;
        onClick: () => void;
        customClass?: string;
    }

    const MenuLink: React.FC<MenuLinkProps> = ({ name, icon, whiteIcon, onClick, customClass = "" }) => (
        <div
            onClick={() => {
                onClick();
                setIsMobileMenuOpen(false);
            }}
            className={`flex items-center p-4 cursor-pointer rounded-lg duration-200 max-w-[235px] mx-auto group ${
                isActive(name)
                    ? "bg-[#5B52B6] text-white border-l-[6px] border-l-[#CFCDEC]"
                    : "text-[#7B91B0] hover:bg-[#5B52B6] hover:text-white hover:border-l-[6px] hover:border-l-[#CFCDEC]"
            } ${customClass}`}
        >
            <div className="relative w-8 h-8">
                <Image
                    src={icon}
                    alt={`${name}Icon`}
                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                        isActive(name) ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                    }`}
                />
                <Image
                    src={whiteIcon}
                    alt={`${name}WhiteIcon`}
                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                        isActive(name) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                />
            </div>
            <h1 className="ml-2 font-medium">{name}</h1>
        </div>
    );
    

    return (
        <div className="flex relative">
            {/* Mobile Menu Toggle Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-[#5B52B6] fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
                aria-label="Toggle menu"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={`fixed lg:translate-x-0 transition-transform duration-z300 w-[290px] h-screen bg-white border-r-[2px] z-40 
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
               <div className="h-full overflow-y-auto scrollbar-hide">
                    {/* Logo */}
                    <div className={`pt-6 ${isMobileMenuOpen ? 'pl-16' : ''}`}>
                        <Link href="/">
                            <div className="max-w-[235px] mx-auto">
                                <Image src={DashboardLogo} alt="DashboardLogoo" />
                            </div>
                        </Link>
                    </div>


                    <div className="pt-16">
                        <MenuLink
                            name="Dashboard"
                            icon={DashboardIconNormal}
                            whiteIcon={DashboardIconWhite}
                            onClick={() => setActiveComponent("Dashboard")}
                        />
                    

                        <div className="max-w-[195px] py-6 mx-auto">
                            <h1 className="text-[14px] leading-[21px] font-semibold text-[#D8D7DE]">OTHER MENUS</h1>
                        </div>



                        <MenuLink
                            name="Job Order Registry"
                            icon={JobOrderIcon}
                            whiteIcon={JobOrderIconWhite}
                            onClick={() => setActiveComponent("Job Order Registry")}
                            customClass="mt-6"
                        />


                        <MenuLink
                            name="Invoice & Payment"
                            icon={InvoiceIcon}
                            whiteIcon={InvoiceIconWhite}
                            onClick={() => setActiveComponent("Invoice & Payment")}
                            customClass="mt-6"
                        />



                        <MenuLink
                            name="Payment History"
                            icon={PaymentIcon}
                            whiteIcon={PaymentIconWhite}
                            onClick={() => setActiveComponent("Payment History")}
                            customClass="mt-6"
                        />
                           



                        <MenuLink
                            name="Messages"
                            icon={MessageIcon}
                            whiteIcon={MessageIconWhite}
                            onClick={() => setActiveComponent("Messages")}
                            customClass="mt-6"
                        />
                           

                        
                        <MenuLink
                            name="Bookmarked"
                            icon={BookmarkIcon}
                            whiteIcon={BookmarkIconWhite}
                            onClick={() => setActiveComponent("Bookmarked")}
                            customClass="mt-6"
                        />
                       

                        <div className="max-w-[235px] border-b-[1px] border-b-[#F0F0F9] mx-auto pt-6"></div>



                        <MenuLink
                            name="Settings"
                            icon={settings}
                            whiteIcon={settingsWhite}
                            onClick={() => setActiveComponent("Settings")}
                            customClass="mt-6"
                        />


                       
                        <div className="pt-6">
                            <div
                                className="flex p-4 transition-colors cursor-pointer rounded-[8px] hover:border-l-[6px] hover:border-l-[rgb(207,205,236)] duration-200 max-w-[235px] mx-auto hover:bg-[#5B52B6] group text-[#7B91B0] hover:text-white"
                                onClick={handleLogoutClick} 
                            >
                                <div className="relative w-8 h-8">
                                <Image
                                    src={LogOutIcon}
                                    alt="LogOutIcon"
                                    className="absolute top-0 left-0 transition-opacity duration-200 group-hover:opacity-0" // Hide default icon on hover
                                />
                                <Image
                                    src={LogOutIconWhite}
                                    alt="LogOutIconWhite"
                                    className="absolute top-0 left-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100" // Show white icon on hover
                                />
                                </div>
                                <h1 className="ml-2 font-medium">Log Out</h1>
                            </div>
                        </div>
                    </div>

                    <div className="pt-16 pb-10">
                        <div className="bg-[#5B52B6] max-w-[235px] cursor-pointer  p-[16px] rounded-[8px] mx-auto" 
                        onClick={() => setActiveComponent("Wallet")}
                        >
                            <div className="border-b-[1px] border-b-[#F1F1F1] pb-[5px]">
                                <h1 className="text-[20px] leading-[30px] font-bold text-[#FFFFFF]">Wallet</h1>
                            </div>

                            <div className="pt-[15px]">
                                <p className="text-[16px] leading-[24px] font-normal text-[#F1F1F1]">Available Balance</p>

                                <div>
                                    <div className="flex gap-[10px] pt-[5px]">
                                        <Image width={16} height={18} src={Naira} alt="Naira" />

                                        <h1 className="text-[20px] leading-[30px] font-bold text-white">00.<span className="text-[14px] leading-[21px] font-bold">00</span></h1>
                                    </div>

                                    {/* the eye icon */}
                                </div>
                            </div>

                            <div className="pt-16 flex items-center gap-[20px]">
                                <div>
                                    <Image className="mx-auto" src={TopUpIcon} alt="TopUpIcon" />

                                    <p className="text-[13px] leading-[19.5px] font-normal text-white">Top Up</p>
                                </div>

                                <div>
                                    <Image className="mx-auto" src={ShareIcon} alt="ShareIcon" />

                                    <p className="text-[13px] leading-[19.5px] font-normal text-white">Share</p>
                                </div>

                                <div>
                                    <Image className="mx-auto" src={MoreIcon} alt="MoreIcon" />

                                    <p className="text-[13px] leading-[19.5px] font-normal text-white">More</p>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>


            <div className={`transition-all duration-300 w-full min-h-screen bg-[#F9FAFE]
                ${isMobileMenuOpen ? 'lg:ml-[290px]' : 'ml-0 lg:ml-[290px]'}`}>
                <div className="px-4 lg:px-10 py-6 pt-16 lg:pt-6">
                    {activeComponent === "Dashboard" && <DashboardContent setActiveComponent={setActiveComponent} />}
                    {activeComponent === "Job Order Registry" && <JobOrderContent setActiveComponent={setActiveComponent} />}
                    {activeComponent === "Invoice & Payment" && <InvoiceContent setActiveComponent={setActiveComponent} />}
                    {activeComponent === "Payment History" && <PaymentHistoryContent setActiveComponent={setActiveComponent} />}
                    {activeComponent === "Messages" && <MessagesContent />}
                    {activeComponent === "Bookmarked" && <BookmarkedContent setActiveComponent={setActiveComponent} />}
                    {activeComponent === "Settings" && <SettingsContent setActiveComponent={setActiveComponent} />}
                    {activeComponent === "Wallet" && <WalletContent setActiveComponent={setActiveComponent} />}
                    {/* Add other content components here based on the sidebar item */}
                </div>
            </div>

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </div>
    )
}


export default SideBar;