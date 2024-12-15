import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Separator } from "@/components/ui/separator"
import { SearchIcon } from 'lucide-react';
import { 
    Sheet, 
    SheetContent, 
    SheetHeader, 
    SheetTitle, 
    SheetDescription 
  } from '@/components/ui/sheet';
  import { 
    Dialog, 
    DialogContent, 
    DialogHeader, 
    DialogTitle 
  } from '@/components/ui/dialog';
  import { 
    CreditCard, 
    WalletCards, 
    Send, 
    Check 
  } from 'lucide-react';

import Image from "next/image";

import NotificationIcon from "../../public/assets/NotificationIcon.svg"
import ChatIcon from "../../public/assets/ChatIcon.svg"
import MyProfile from "../../public/assets/MyProfile.svg"
import profile from "../../public/assets/profile.svg"
import Arrowdown from "../../public/assets/Arrowdown.svg"
import InvoiceTable from "./Tables/InvoiceTable"
import LogOutIcon from "../../public/assets/LogOutIcon.svg"

import DuedateIcon from "../../public/assets/DuedateIcon.svg"

import BilledIcon from "../../public/assets/BilledIcon.svg"

import CrossX from "../../public/assets/CrossX.svg"

import GuidelinesPdf from "../../public/assets/GuidelinesPdf.svg"

import UploadIconWhite from "../../public/assets/UploadIconWhite.svg"

import BankIcon from "../../public/assets/BankIcon.svg"

import CardIcon from "../../public/assets/CardIcon.svg"

import WalletIcon from "../../public/assets/WalletIcon.svg"

import Done from "../../public/assets/Done.svg"

const InvoiceContent = () => {

    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState('debitCard');
    const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);

    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    // New state to track button click
    const [isPayClicked, setIsPayClicked] = useState(false); 

    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    };

    const handlePayClick = () => {
        // Update state when the button is clicked
        setIsPayClicked(true); 
    };

    const togglePayClick = () => {
        setIsPayClicked(false); 
    };

    const paymentMethods = [
        { 
          id: 'debitCard', 
          label: 'Debit Card', 
          icon: <img src={CardIcon.src} alt="Debit Card" className="w-6 h-6" /> 
        },
        { 
          id: 'bankTransfer', 
          label: 'Bank Transfer', 
          icon: <img src={BankIcon.src} alt="Debit Card" className="w-6 h-6" /> 
        },
        { 
          id: 'wallet', 
          label: 'Wallet', 
          icon: <img src={WalletIcon.src} alt="Debit Card" className="w-6 h-6" /> 
        }
    ];
    
    const handlePayNow = () => {
    setIsPaymentConfirmed(true);
    };

    return (
        <div>
            {/* Job registry Header for the Dashboard Screen */}
            <div className="flex justify-between">
                <div>
                    <div className="flex items-center gap-10">
                        <h1 className="text-[20px] leading-[30px] text-[#101828] font-bold whitespace-nowrap">Client Dashboard</h1>
                        <div>
                            <div className="relative flex items-center w-[479px] h-[40px] mx-auto">
                                <Input
                                    type="text"
                                    placeholder="Search..."
                                    className="pr-10 pl-10 py-2 border-none bg-[#F0F0F9] rounded-[100px] w-full text-gray-800 focus:outline-none focus:ring focus:ring-blue-300"
                                />
                                <div className="absolute left-3">
                                    <SearchIcon className="w-[24px] h-[24px] text-gray-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Profile and Notification */}
                <div className="flex items-center gap-[10px] border-l-[1px] border-[#D0D0D3] pl-[20px]">
                    <div>
                        <Image width={24} height={24} src={NotificationIcon} alt="NotificationIcon" />
                    </div>
                    <div>
                        <Image width={24} height={24} src={ChatIcon} alt="ChatIcon" />
                    </div>
                    <div>
                        <div className="flex items-center gap-[10px] cursor-pointer" onClick={toggleOverlay}>
                            <Image width={24} height={24} src={MyProfile} alt="MyProfile" />
                            <div>
                                <h1 className="text-[13px] leading-[19.5px] text-[#101828] font-semibold">Bankole Onafuwa</h1>
                                <p className="text-[#41404B] text-[13px] leading-[19.5px] font-normal">Client</p>
                            </div>
                            <Image width={16} height={16} src={Arrowdown} alt="Arrowdown" />
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

            {/* Separator */}
            <div className="pt-[24px]">
                <Separator />
            </div>

            {/* Conditionally Render Content */}
            <div className="pt-10">
                {!isPayClicked ? (
                    <>
                    <div className="flex flex-col items-end justify-end">
                        {/* Default Invoice Content */}
                        <div className="bg-[#FFFFFF] w-[391px] p-[15px] rounded-[8px] shadow-custom">
                            <h1 className="text-[20px] leading-[30px] text-[#101828] font-medium">Invoice Due for Payment</h1>
                            <div className="pt-[10px] flex items-center">
                                <p className="text-[14px] leading-[21px] text-[#41404B] max-w-[246px]">You have 3 invoices currently unpaid with a total balance of ₦114,000</p>
                                <button
                                    className="bg-[#5B52B6] text-white w-[104px] h-[32px] flex items-center justify-center rounded-[8px] p-[10px]"
                                    onClick={handlePayClick} // Call the function on button click
                                >
                                    Pay
                                </button>
                            </div>
                        </div>
                    </div>
                    <InvoiceTable />
                    </>
                ) : (
                    <div className='flex justify-center'>
                        <div className="bg-[#FFFFFF] w-[651px] min-h-[832px] p-[15px] rounded-[8px] shadow-custom">
                            <div>
                                <div className='pt-10 pb-[20px] flex items-center justify-between border-b-[#F1F1F1] border-b-[1px]'>
                                    <h1 className='text-[#101828] text-[20px] leading-[30px]'>INV234567</h1>
 
                                    <button 
                                        onClick={togglePayClick} 
                                    >
                                        <Image src={CrossX} alt="CrossX" />
                                    </button>
                                </div>

                                <div className='pt-10'>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <div className='flex flex-col items-start gap-y-[10px]'>
                                                <div className='flex items-center gap-[4px]'>
                                                    <Image width={24} height={24} src={DuedateIcon} alt="DuedateIcon" />
                                                    <h1 className='text-[#757678] text-[16px] leading-[22.4px] font-normal'>Due date</h1>
                                                </div>
                                                <h1 className='text-[#101828] text-[16px] leading-[24px] font-medium'>September 24, 2024</h1>
                                            </div>
                                            <div className='pt-8 flex flex-col items-start gap-y-[10px]'>
                                                <div className='flex items-center gap-[4px]'>
                                                    <Image width={24} height={24} src={BilledIcon} alt="BilledIcon" />
                                                    <h1 className='text-[#757678] text-[16px] leading-[22.4px] font-normal'>Billed to</h1>
                                                </div>
                                                <h1 className='text-[#101828] text-[16px] leading-[24px] font-medium'>Bankole Onafuwa</h1>
                                            </div>   
                                        </div>

                                        <div>
                                            <div className='flex flex-col items-start gap-y-[10px]'>
                                                <h1 className='text-[#757678] text-[16px] leading-[22.4px] font-normal'>Subject</h1>
                                                <h1 className='text-[#101828] text-[16px] leading-[24px] font-medium'>Service per June 2024</h1>
                                            </div>
                                            <div className='pt-8 flex flex-col items-start gap-y-[10px]'>
                                                <h1 className='text-[#757678] text-[16px] leading-[22.4px] font-normal'>Currency</h1>
                                                <h1 className='text-[#101828] text-[16px] leading-[24px] font-medium'>Naira - Nigeria</h1>
                                            </div>   
                                        </div>
                                    </div>       
                                </div>

                            </div>

                            <div className='pt-10'>
                                <div className='flex items-center justify-between bg-[#F1F1F1] p-[10px] rounded-[8px]'>
                                    <h1 className='text-[#757678] text-[13px] leading-[19.5px] font-medium'>DESCRIPTION</h1>

                                    <div className='flex items-center gap-10'>
                                        <h1 className='text-[#757678] text-[13px] leading-[19.5px] font-medium'>QTY</h1>
                                        <h1 className='text-[#757678] text-[13px] leading-[19.5px] font-medium'>UNIT PRICE</h1>
                                        <h1 className='text-[#757678] text-[13px] leading-[19.5px] font-medium'>AMOUNT</h1>
                                    </div>
                                </div>
                                

                                <div className='pt-8 border-b-[1px] border-b-[#F1F1F1] pb-10'>
                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-[#757678] text-[16px] leading-[24px] font-normal'>Full Market Research</h1>

                                        <div className='flex items-center gap-6'>
                                            <h1 className='text-[#757678] text-[16px] leading-[24px] font-normal'>1</h1>
                                            <h1 className='text-[#757678] text-[16px] leading-[24px] font-normal'>NGN115,000</h1>
                                            <h1 className='text-[#757678] text-[16px] leading-[24px] font-normal'>NGN115,000</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className='pt-[10px] border-b-[1px] border-b-[#F1F1F1] pb-[10px]'>
                                    <div className=' flex flex-col items-end justify-end space-y-[10px]'>
                                    <div className='flex items-center gap-10'>
                                        <h1 className='text-[#101828] text-[14px] leading-[21px] font-medium'>Sub Total</h1>
                                        <p className='text-[#757678] text-[14px] leading-[21px] font-medium '>NGN115,000</p>
                                    </div>
                                    <div className='flex items-center gap-20'>
                                        <h1 className='text-[#101828] text-[14px] leading-[21px] font-medium'>Discount</h1>
                                        <p className='text-[#757678] text-[14px] leading-[21px] font-medium '>NGN 0</p>
                                    </div>
                                    <div className='flex items-center gap-10'>
                                        <h1 className='text-[#101828] text-[14px] leading-[21px] font-medium'>Total</h1>
                                        <p className='text-[#757678] text-[14px] leading-[21px] font-medium '>NGN115,000</p>
                                    </div>
                                    </div>
                                </div>


                                <div className='pt-10'>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <h1 className='text-[#757678] text-[14px] leading-[21px] font-bold'>Pay-By-Transfer Option:</h1>
                                            <div className='pt-[10px]'>
                                                <h1 className='text-[#101828] text-[15.87px] leading-[23.81px] font-medium'>Dora Consulting Ltd.</h1>
                                                <p className='pt-[10px] text-[#757678] text-[13.57] leading-[20.2px] font-normal'>Account No.: 7862346787</p>
                                                <p className='pt-[10px] text-[#757678] text-[13.57] leading-[20.2px] font-normal'>Bank Name: Wema Bank</p>
                                            </div>
                                        </div>

                                        <div>
                                            <h1 className='text-[#757678] text-[14px] leading-[19.6px] font-bold'>
                                                Attachment
                                            </h1>

                                            <div className='flex items-center pt-[15px] gap-[5px]'>
                                                <Image width={91.33} height={34.67} src={GuidelinesPdf} alt="GuidelinesPdf" />
                                                <Image width={91.33} height={34.67} src={GuidelinesPdf} alt="GuidelinesPdf" />
                                            </div>

                                            <div className='pt-[10px] flex items-center gap-[5px] text-[#5B52B6] text-[12.8px] leading-[17.92px] font-normal'>
                                                <Image width={18} height={18} src={UploadIconWhite} alt='UploadIconWhite' />
                                                Download All
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                {/* Payment Button */}
                                <div className='pt-6 justify-end flex'>
                                    <button 
                                    className='text-white text-[16.5px] leading-[19.8px] font-bold bg-[#5B52B6] w-[172px] p-[10px] rounded-[8px]'
                                    onClick={() => setIsSheetOpen(true)}
                                    >
                                    Make Payment
                                    </button>
                                </div>

                                {/* Payment Sheet */}
                                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                                    <SheetContent side="right" className="w-[500px] p-6 overflow-y-auto scrollbar-hide">
                                    <SheetHeader className="mb-6 border-b-[1px] border-b-[#F1F1F1] pb-[15px]">
                                        <SheetTitle className="text-[#101828] text-[20px] leading-[30px] text-left">NGN 115,000</SheetTitle>
                                        <SheetDescription className="text-left text-[#41404B] text-[16px] leading-[24px] font-normal">
                                        Due On: September 24, 2024
                                        </SheetDescription>
                                    </SheetHeader>

                                    
                                    <div className="space-y-4 mb-6">
                                        <h1>Select a payment method</h1>
                                        {paymentMethods.map((method) => (
                                        <div 
                                            key={method.id}
                                            className={`
                                            flex items-center border rounded-lg p-3 cursor-pointer
                                            ${selectedMethod === method.id ? 'border-[#5B52B6] bg-[#F0EEFF]' : 'border-gray-200'}
                                            `}
                                            onClick={() => setSelectedMethod(method.id)}
                                        >
                                            <div 
                                            className={`
                                                w-5 h-5 mr-3 rounded-full border-2 flex items-center justify-center
                                                ${selectedMethod === method.id ? 'border-[#5B52B6] bg-[#5B52B6]' : 'border-gray-300'}
                                            `}
                                            >
                                            {selectedMethod === method.id && <Check className="w-4 h-4 text-white" />}
                                            </div>
                                            <div className="flex-grow">{method.label}</div>
                                            {method.icon}
                                        </div>
                                        ))}
                                    </div>

                                    
                                    {selectedMethod === 'debitCard' && (
                                        <div className="space-y-4 bg-[#F8F7F7] p-[16px] rounded-[8px]">
                                        <h1>Card Information</h1>
                                        <input 
                                            type="text" 
                                            placeholder="Card Holder Name" 
                                            className="w-full p-2 border rounded-lg outline-none"
                                        />
                                        <input 
                                            type="text" 
                                            placeholder="Debit Card" 
                                            readOnly 
                                            value="Debit Card" 
                                            className="w-full p-2 border rounded-lg outline-none"
                                        />
                                        <div className="flex space-x-4">
                                            <input 
                                            type="text" 
                                            placeholder="Expiry Date" 
                                            className="w-1/2 p-2 border rounded-lg outline-none"
                                            />
                                            <input 
                                            type="text" 
                                            placeholder="CVC" 
                                            className="w-1/2 p-2 border rounded-lg outline-none"
                                            />
                                        </div>
                                        </div>
                                    )}

                                    <div className="flex space-x-4 pt-10">
                                        <button 
                                        onClick={() => setIsSheetOpen(false)} 
                                        className="flex-grow text-[#5B52B6] border border-[#5B52B6] p-3 rounded-lg"
                                        >
                                            Close
                                        </button>
                                        <button 
                                        onClick={handlePayNow} 
                                        className="flex-grow text-white bg-[#5B52B6] p-3 rounded-lg"
                                        >
                                        Pay Now
                                        </button>
                                    </div>
                                    </SheetContent>
                                </Sheet>

                                {/* Payment Confirmation Dialog */}
                                <Dialog open={isPaymentConfirmed} onOpenChange={setIsPaymentConfirmed}>
                                    <DialogContent className="sm:max-w-[341px] min-h-[445px] text-center p-8">
                                    <DialogHeader>
                                        <div className='flex items-center justify-center'>
                                            <Image src={Done} alt="Done" />
                                        </div>
                                        <DialogTitle className="text-2xl font-bold text-center mb-4">
                                        Payment Successful
                                        </DialogTitle>
                                    </DialogHeader>
                    
                                    <p className="text-gray-600 mb-6">
                                        Please check your notification and review your consultant
                                    </p>
                                    <button 
                                        onClick={() => setIsPaymentConfirmed(false)} 
                                        className="w-full text-white font-bold bg-[#5B52B6] p-3 rounded-lg"
                                    >
                                       Review
                                    </button>
                                    </DialogContent>
                                </Dialog>


                            </div>
                                       
                        </div>
                    </div>
                )}
            </div>

           
        </div>
    )
}

export default InvoiceContent;
