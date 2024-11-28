import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Separator } from "@/components/ui/separator"
import { SearchIcon } from 'lucide-react';

import Image from "next/image";

import NotificationIcon from "../../public/assets/NotificationIcon.svg"

import ChatIcon from "../../public/assets/ChatIcon.svg"

import MyProfile from "../../public/assets/MyProfile.svg"

import profile from "../../public/assets/profile.svg"

import Arrowdown from "../../public/assets/Arrowdown.svg"

import InvoiceTable from "./Tables/InvoiceTable"


// import Export from "../../public/assets/Export.svg"



import LogOutIcon from "../../public/assets/LogOutIcon.svg"



const InvoiceContent = () => {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    };

    return (
        <div>
            {/*  Job registry Header for the Dashboard Screen */}
            <div className="flex justify-between">
                <div>
                    <div className="flex items-center gap-10">
                        <h1 className="text-[20px] leading-[30px] text-[#101828] font-bold whitespace-nowrap">Client Dashboard</h1>
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


            <div className="pt-10">
                <div className="flex flex-col items-end justify-end">

                    <div className="bg-[#FFFFFF]  w-[391px] p-[15px] rounded-[8px] shadow-custom">
                        <h1 className="text-[20px] leading-[30px] text-[#101828] font-medium">Invoice Due for Payment</h1>
                        <div className="pt-[10px] flex  items-center">
                            <p className="text-[14px] leading-[21px] text-[#41404B] max-w-[246px]">You have 3 invoices currently unpaid with a total balance of ₦114,000</p>
                            <button className="bg-[#5B52B6] text-white w-[104px] h-[32px] flex items-center justify-center rounded-[8px] p-[10px]">
                                Pay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            

            {/* <div>
                <div className="flex items-center gap-10">
                    <div>
                        <h1>All   <span>6</span></h1>
                    </div>

                    <div>
                        <h1>Paid   <span>12</span></h1>
                    </div>

                    <div>
                        <h1>Unpaid   <span>3</span></h1>
                    </div>
                    <div>
                        <h1>Pending   <span>4</span></h1>
                    </div>
                </div>
            </div> */}

            


            <InvoiceTable />



         
        </div>
    )
} 


export default InvoiceContent;
