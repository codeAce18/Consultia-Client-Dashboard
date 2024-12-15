import { useState } from "react";
import Image from "next/image";

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

    const [activeComponent, setActiveComponent] = useState("Dashboard");

    const isActive = (componentName: string) => activeComponent === componentName;
    

    return (
        <div className="flex">
            <div className="fixed w-[290px]  h-screen border-r-[2px]">
               <div className="h-full overflow-y-auto scrollbar-hide">
                   <div className="pt-6">
                       <Link href="/">
                           <div className="max-w-[235px] mx-auto">
                                <Image  src={DashboardLogo} alt="DashboardLogo" />
                           </div>
                       </Link>
                   </div>
                    <div className="pt-16">
                        <div
                            onClick={() => setActiveComponent("Dashboard")}
                            className={`flex p-4 cursor-pointer rounded-[8px] duration-200 max-w-[235px] mx-auto group ${
                                isActive("Dashboard")
                                ? "bg-[#5B52B6] text-white border-l-[6px] border-l-[#CFCDEC]"
                                : "text-[#7B91B0] hover:bg-[#5B52B6] hover:text-white hover:border-l-[6px] hover:border-l-[#CFCDEC]"
                            }`}
                        >
                            <div className="relative w-8 h-8">
                                <Image
                                src={DashboardIconNormal}
                                alt="DashboardIconNormal"
                                className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                    isActive("Dashboard") ? "opacity-0" : "opacity-100"
                                }`}
                                />
                                <Image
                                src={DashboardIconWhite}
                                alt="DashboardIconWhite"
                                className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                    isActive("Dashboard") ? "opacity-100" : "opacity-0"
                                }`}
                                />
                            </div>
                            <h1 className="ml-2 font-bold">Dashboard</h1>
                        </div>
                    

                        <div className="max-w-[195px] py-6 mx-auto">
                            <h1 className="text-[14px] leading-[21px] font-semibold text-[#D8D7DE]">OTHER MENUS</h1>
                        </div>



                        <div className="">
                            <div
                                onClick={() => setActiveComponent("JobOrder")}
                                className={`flex p-4 cursor-pointer rounded-[8px] duration-200 max-w-[235px] mx-auto group ${
                                    isActive("JobOrder")
                                    ? "bg-[#5B52B6] text-white border-l-[6px] border-l-[#CFCDEC]"
                                    : "text-[#7B91B0] hover:bg-[#5B52B6] hover:text-white hover:border-l-[6px] hover:border-l-[#CFCDEC]"
                                }`}
                            >
                                <div className="relative w-8 h-8">
                                    <Image
                                    src={JobOrderIcon}
                                    alt="JobOrderIcon"
                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                        isActive("JobOrder") ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                                    }`}
                                    />
                                    <Image
                                    src={JobOrderIconWhite}
                                    alt="JobOrderIconWhite"
                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                        isActive("JobOrder") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                    }`}
                                    />
                                </div>
                                <h1 className="ml-2 font-medium">Job Order Registry</h1>
                            </div>

                        </div>


                        <div className="pt-6">
                           <div
                                onClick={() => setActiveComponent("Invoice")}
                                className={`flex p-4 cursor-pointer rounded-[8px] duration-200 max-w-[235px] mx-auto group ${
                                    isActive("Invoice")
                                    ? "bg-[#5B52B6] text-white border-l-[6px] border-l-[#CFCDEC]"
                                    : "text-[#7B91B0] hover:bg-[#5B52B6] hover:text-white hover:border-l-[6px] hover:border-l-[#CFCDEC]"
                                }`}
                                >
                                <div className="relative w-8 h-8">
                                    <Image
                                    src={InvoiceIcon}
                                    alt="InvoiceIcon"
                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                        isActive("Invoice") ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                                    }`}
                                    />
                                    <Image
                                    src={InvoiceIconWhite}
                                    alt="InvoiceIconWhite"
                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                        isActive("Invoice") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                    }`}
                                    />
                                </div>
                                <h1 className="ml-2 font-medium">Invoice & Payment</h1>
                            </div>
                        </div>



                        <div className="pt-6">
                           <div
                                onClick={() => setActiveComponent("PaymentHistory")}
                                className={`flex p-4 cursor-pointer rounded-[8px] duration-200 max-w-[235px] mx-auto group ${
                                    isActive("PaymentHistory")
                                    ? "bg-[#5B52B6] text-white border-l-[6px] border-l-[#CFCDEC]"
                                    : "text-[#7B91B0] hover:bg-[#5B52B6] hover:text-white hover:border-l-[6px] hover:border-l-[#CFCDEC]"
                                }`}
                                >
                                <div className="relative w-8 h-8">
                                    <Image
                                    src={PaymentIcon}
                                    alt="PaymentIcon"
                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                        isActive("PaymentHistory") ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                                    }`}
                                    />
                                    <Image
                                    src={PaymentIconWhite}
                                    alt="PaymentIconWhite"
                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                        isActive("PaymentHistory") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                    }`}
                                    />
                                </div>
                                <h1 className="ml-2 font-medium">Payment History</h1>
                            </div>
                        </div>



                        <div className="pt-6">
                        <div
                            onClick={() => setActiveComponent("Messages")}
                            className={`flex p-4 cursor-pointer rounded-[8px] duration-200 max-w-[235px] mx-auto group ${
                                isActive("Messages")
                                ? "bg-[#5B52B6] text-white border-l-[6px] border-l-[#CFCDEC]"
                                : "text-[#7B91B0] hover:bg-[#5B52B6] hover:text-white hover:border-l-[6px] hover:border-l-[#CFCDEC]"
                            }`}
                            >
                                <div className="relative w-8 h-8">
                                    <Image
                                    src={MessageIcon}
                                    alt="MessageIcon"
                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                        isActive("Messages") ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                                    }`}
                                    />
                                    <Image
                                    src={MessageIconWhite}
                                    alt="MessageIconWhite"
                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                        isActive("Messages") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                    }`}
                                    />
                                </div>
                                <h1 className="ml-2 font-medium">Messages</h1>
                            </div>
                        </div>


                        
                        <div className="pt-6">
                        <div
                            onClick={() => setActiveComponent("Bookmarked")}
                            className={`flex p-4 cursor-pointer rounded-[8px] duration-200 max-w-[235px] mx-auto group ${
                                isActive("Bookmarked")
                                ? "bg-[#5B52B6] text-white border-l-[6px] border-l-[#CFCDEC]"
                                : "text-[#7B91B0] hover:bg-[#5B52B6] hover:text-white hover:border-l-[6px] hover:border-l-[#CFCDEC]"
                            }`}
                            >
                                <div className="relative w-8 h-8">
                                    <Image
                                    src={BookmarkIcon}
                                    alt="BookmarkIcon"
                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                        isActive("Bookmarked") ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                                    }`}
                                    />
                                    <Image
                                    src={BookmarkIconWhite}
                                    alt="BookmarkIconWhite"
                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                        isActive("Bookmarked") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                    }`}
                                    />
                                </div>
                                <h1 className="ml-2 font-medium">Bookmarked</h1>
                            </div>
                        </div>




                        <div className="max-w-[235px] border-b-[1px] border-b-[#F0F0F9] mx-auto pt-6"></div>


                        <div className="pt-6">
                        <div
                            onClick={() => setActiveComponent("Settings")}
                            className={`flex p-4 cursor-pointer rounded-[8px] duration-200 max-w-[235px] mx-auto group ${
                                isActive("Settings")
                                ? "bg-[#5B52B6] text-white border-l-[6px] border-l-[#CFCDEC]"
                                : "text-[#7B91B0] hover:bg-[#5B52B6] hover:text-white hover:border-l-[6px] hover:border-l-[#CFCDEC]"
                            }`}
                            >
                                <div className="relative w-8 h-8">
                                    <Image
                                    src={settings}
                                    alt="SettingsIcon"
                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                        isActive("Settings") ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                                    }`}
                                    />
                                    <Image
                                    src={settingsWhite}
                                    alt="SettingsIconWhite"
                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                        isActive("Settings") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                    }`}
                                    />
                                </div>
                                <h1 className="ml-2 font-medium">Settings</h1>
                            </div>
                        </div>
                        <div className="pt-6">
                            <div className="flex p-4 transition-colors cursor-pointer rounded-[8px] hover:border-l-[6px] hover:border-l-[rgb(207,205,236)] duration-200 max-w-[235px] mx-auto hover:bg-[#5B52B6] group text-[#7B91B0] hover:text-white">
                                <div className="relative w-8 h-8"> {/* Adjust size as needed */}
                                <Image
                                    src={LogOutIcon}
                                    alt="LogOutIcon"
                                    className="absolute top-0 left-0 transition-opacity duration-200 group-hover:opacity-100" // Keep color visible by default
                                />
                                <Image
                                    src={LogOutIconWhite}
                                    alt="LogOutIconWhite"
                                    className="absolute top-0 left-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100" // Show on hover
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


            <div className="ml-[290px] px-10 py-6 bg-[#F9FAFE] w-full min-h-screen">
                {activeComponent === "Dashboard" && <DashboardContent setActiveComponent={setActiveComponent} />}
                {activeComponent === "JobOrder" && <JobOrderContent />}
                {activeComponent === "Invoice" && <InvoiceContent />}
                {activeComponent === "PaymentHistory" && <PaymentHistoryContent />}
                {activeComponent === "Messages" && <MessagesContent />}
                {activeComponent === "Bookmarked" && <BookmarkedContent />}
                {activeComponent === "Settings" && <SettingsContent />}
                {activeComponent === "Wallet" && <WalletContent />}
                {/* Add other content components here based on the sidebar item */}
            </div>
        </div>
    )
}


export default SideBar;