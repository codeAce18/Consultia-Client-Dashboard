import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Textarea } from '@/components/ui/textarea';        
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';      
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import AssignedToIcon from "../../public/assets/AssignedToIcon.svg"

import BrandingAssets from "../../public/assets/BrandingAssets.svg"

import GuidelinesPdf  from "../../public/assets/GuidelinesPdf.svg"


import Plus  from "../../public/assets/Plus.svg"

import  CrossX  from "../../public/assets/CrossX.svg"

import  Done  from "../../public/assets/Done.svg"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import Image from "next/image";
import UploadIcon from "../../public/assets/UploadIcon.svg"


import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


import NotificationIcon from "../../public/assets/NotificationIcon.svg"

import ChatIcon from "../../public/assets/ChatIcon.svg"

import MyProfile from "../../public/assets/MyProfile.svg"

import profile from "../../public/assets/profile.svg"

import Arrowdown from "../../public/assets/Arrowdown.svg"

import more from "../../public/assets/more.svg"

import AddCircle from "../../public/assets/AddCircle.svg"

import TotalOrdersIcon from "../../public/assets/TotalOrdersIcon.svg"

import OngoingOrdersIcon from "../../public/assets/OngoingOrdersIcon.svg"

import CompletedOrdersIcon from "../../public/assets/CompletedOrdersIcon.svg"

import TotalValueIcon from "../../public/assets/TotalValueIcon.svg"

import LogOutIcon from "../../public/assets/LogOutIcon.svg"

import ExpenditureAnalysisChart from "./Charts/ExpenditureAnalysisChart"

import OngoingTask from "./OngoingTask"
import ConsultantCompanyLogo1 from "../../public/assets/ConsultantCompanyLogo1.svg"


import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import CancelIcon from "../../public/assets/CancelIcon.svg";
import PreviewIcon from "../../public/assets/PreviewIcon.svg";

interface JobOrder {
  companyName: string;
  location: string;
  companyLogo: string;
  serviceType: string;
  startDueDate: string;
  status: 'Ongoing' | 'Completed' | 'Rejected';
}

const jobOrdersData: JobOrder[] = [
  {
    companyName: "Dora Consulting Ltd.",
    location: "Lagos, Nigeria",
    companyLogo: "/assets/ConsultantCompanyLogo1.svg",
    serviceType: "Market Entry Strategy",
    startDueDate: "Jan 10, 2024 / Jan 20, 2024",
    status: "Ongoing",
  },
  {
    companyName: "Alimanto Nig. Ltd.",
    location: "Lagos, Nigeria",
    companyLogo: "/assets/ConsultantCompanyLogo2.svg",
    serviceType: "Audit and Assurance Services",
    startDueDate: "Feb 5, 2024 / Feb 15, 2024",
    status: "Completed",
  },
  {
    companyName: "Dora Consulting Ltd.",
    location: "Lagos, Nigeria",
    companyLogo: "/assets/ConsultantCompanyLogo1.svg",
    serviceType: "Market Entry Strategy",
    startDueDate: "Mar 1, 2024 / Mar 10, 2024",
    status: "Rejected",
  },
  {
    companyName: "Alimanto Nig. Ltd.",
    location: "Lagos, Nigeria",
    companyLogo: "/assets/ConsultantCompanyLogo2.svg",
    serviceType: "Audit and Assurance Services",
    startDueDate: "Apr 15, 2024 / Apr 25, 2024",
    status: "Ongoing",
  },
];




const jobOrderSchema = z.object({
    consultancyType: z.string().nonempty("Consultancy type is required"),
    serviceType: z.string().nonempty("Service type is required"),
    tags: z.string().optional(),
    priority: z.string().nonempty("Priority is required"),
    consultant: z.string().nonempty("Please choose a consultant"),
    budget: z.number().positive("Budget must be greater than zero"),
    deadline: z.string().nonempty("Deadline is required"),
    projectDescription: z.string().min(10, "Description must be at least 10 characters"),
    uploadFile: z.any(),
  });
  type JobOrderFormData = z.infer<typeof jobOrderSchema>;


interface DashboardContentProps {
    setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
}



const DashboardContent: React.FC<DashboardContentProps> = ({ setActiveComponent }) => {
    const handleViewAllClick = () => {
        setActiveComponent("JobOrder"); // Switch to JobOrderContent when clicked
    };
    const [openRow, setOpenRow] = useState<number | null>(null);

    const toggleMenu = (id: number) => {
      setOpenRow((prev) => (prev === id ? null : id));
    };
  
    const closeMenu = () => {
      setOpenRow(null);
    };
  
    const getStatusStyle = (status: JobOrder['status']) => ({
      width: '96px',
      height: '28px',
      borderRadius: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      fontWeight: '500',
      ...(
        status === 'Ongoing'
          ? { backgroundColor: '#FAD9C2', color: '#F87B24' }
          : status === 'Completed'
          ? { backgroundColor: '#D2F6D2', color: '#008000' }
          : { backgroundColor: '#F5BFC1', color: '#DD2025' }
      ),
    });
    const router = useRouter();
    const [placeholderText, setPlaceholderText] = useState("Search...");
    const [fileName, setFileName] = useState<string | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState<string | null>(null);
    const [isSecondSheetOpen, setIsSecondSheetOpen] = useState(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [formData, setFormData] = useState<JobOrderFormData | null>(null);

    const { register, handleSubmit, setValue, watch , formState: { errors } } = useForm<JobOrderFormData>({
        resolver: zodResolver(jobOrderSchema),
    });
    
    const onSubmit = (data: JobOrderFormData) => {
        setFormData(data); 
        setIsSecondSheetOpen(true); 
    };
 

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
    
        if (file) {
          setError(null); // Reset error
    
          // Validate file type
          const validTypes = ["image/jpeg", "image/png"];
          if (!validTypes.includes(file.type)) {
            setError("Only JPEG and PNG formats are supported.");
            return;
          }
    
          // Validate file size (max 25MB)
          const maxSizeMB = 25;
          if (file.size > maxSizeMB * 1024 * 1024) {
            setError("File size must be less than 25MB.");
            return;
          }
    
          // File is valid, set the file name and form value
          setFileName(file.name);
          setValue("uploadFile", file); // Register the file with react-hook-form
        }
      };

    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    };

    const priority = watch("priority");
    const consultant = watch("consultant");


    const handleClick = () => {
        router.push('/findaconsultant');
    };
   

    return (
        <div>
            {/*  Dasboard Header for the Dashboard Screen */}
            <div className="flex justify-between">
                <div>
                    <div className="flex items-center gap-10">
                        <h1 className="text-[20px] leading-[30px] text-[#101828] font-bold">Dashboard</h1>
                        <div className="relative flex items-center w-[479px] h-[40px] mx-auto">
                            <Input
                                type="text"
                                placeholder={placeholderText}
                                onMouseEnter={() => setPlaceholderText("Search for consultants")}
                                onMouseLeave={() => setPlaceholderText("Search...")}
                                onClick={handleClick}
                                className="pr-10 pl-10 py-2 border-none bg-[#F0F0F9] rounded-[100px] w-full text-gray-800 focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            <div className="absolute left-3">
                                <SearchIcon className="w-[24px] h-[24px] text-gray-500" />
                            </div>
                        </div>
                    </div>
                </div>

                

                <div className="flex items-center gap-[10px] border-l-[1px] border-[#D0D0D3] pl-[20px]">
                    <Sheet>
                        {/* Custom div as the trigger */}
                        <SheetTrigger asChild>
                            <div className="cursor-pointer p-2">
                                <Image width={24} height={24} src={NotificationIcon} alt="Notification Icon" />
                            </div>
                        </SheetTrigger>

                        {/* The content of the sheet */}
                        <SheetContent
                            side="right"
                            className="flex flex-col  items-start p-6 bg-white shadow-lg space-y-10"
                        >
                            <h1 className='text-[#101828] text-[20px] leading-[30px] font-bold'>Notifications</h1>
                            <div className="flex  items-start gap-[10px]">
                                {/* Image */}
                                <Image
                                src={ConsultantCompanyLogo1} // Replace with the actual path to your image
                                alt="Company Logo"
                                width={30}
                                height={30}
                                className="rounded-full"
                                />
                                {/* Notification text */}
                                <div className="text-left">
                                    <p className='text-[16px] leading-[22.4px] text-[#101828]'><span className="font-bold text-[16.5px] leading-[19.8px] text-[#101828]">Dora Consulting Ltd.</span> accepted your offer and has sent you a message.</p>

                                    <p className="text-[16px] leading-[24px] font-normal text-[#41404B]">3 September, 2024 - 11:21 AM</p>
                                </div>
                            </div>

                            <div className="flex  items-start gap-[10px]">
                                {/* Image */}
                                <Image
                                src={ConsultantCompanyLogo1} // Replace with the actual path to your image
                                alt="Company Logo"
                                width={30}
                                height={30}
                                className="rounded-full"
                                />
                                {/* Notification text */}
                                <div className="text-left">
                                    <p className='text-[16px] leading-[22.4px] text-[#101828]'><span className="font-bold text-[16.5px] leading-[19.8px] text-[#101828]">Dora Consulting Ltd.</span> just sent you an invoice</p>

                                    <p className="text-[16px] leading-[24px] font-normal text-[#41404B]">3 September, 2024 - 11:21 AM</p>
                                </div>
                            </div>


                            <div className="flex  items-start gap-[10px]">
                                {/* Image */}
                                <Image
                                src={ConsultantCompanyLogo1} // Replace with the actual path to your image
                                alt="Company Logo"
                                width={30}
                                height={30}
                                className="rounded-full"
                                />
                                {/* Notification text */}
                                <div className="text-left">
                                    <p className='text-[16px] leading-[22.4px] text-[#101828]'><span className="font-bold text-[16.5px] leading-[19.8px] text-[#101828]">Dora Consulting Ltd.</span> just sent you an invoice Rate him based on the job done</p>

                                    <p className="text-[16px] leading-[24px] font-normal text-[#41404B]">3 September, 2024 - 11:21 AM</p>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>

                    <div>
                        <Image  width={24} height={24}  src={ChatIcon} alt="ChatIcon"/>
                    </div>

                    <div>
                        <div className="flex items-center gap-[10px] cursor-pointer" onClick={toggleOverlay}>

                        <div>
                            <Image width={24} height={24} src={MyProfile} alt="MyProfile" />
                        </div>

                        <div className='flex flex-col items-start'>
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
            
            {/* End of Dashboard Header for the Dashboard Screen */}

            <div className="pt-[24px]">
                <Separator />
            </div>


            <div className="pt-[20px]">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-[20px] leading-[30px] text-[#1B2559] font-normal">Welcome to Consultia, <span className="font-bold">Bankole</span></h1>
                    </div>

                    <Sheet>
    
                        <SheetTrigger asChild>
                            <button className="bg-[#5B52B6] flex items-center gap-[10px] rounded-[8px] p-[10px] w-[190px]">
                            <Image width={24} height={24} src={AddCircle} alt="AddCircle" />
                            <h1 className="text-white text-[16.5px] leading-[19.8px] font-bold">Create Job Order</h1>
                            </button>
                        </SheetTrigger>


                        <SheetContent
                            side="right"
                            className="flex flex-col overflow-y-auto items-start p-6 bg-white space-y-4 w-full max-w-md shadow-lg"
                        >
             
                            <div>
                                <h2 className="text-xl font-bold">Job Order Form</h2>
                                <p className="text-gray-500 pt-[5px]">Kindly fill out the fields provided below</p>
                            </div>

    
                            <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
 
                                <div>
                                    <Label className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Consultancy Type</Label>
                                    <div className='pt-[10px]'>
                                        <Select onValueChange={(value: string) => setValue("consultancyType", value)}>
                                            <SelectTrigger className="w-full focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none">
                                                <span>{watch("consultancyType") || "Select consultancy type"}</span>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="type1">Type 1</SelectItem>
                                                <SelectItem value="type2">Type 2</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    {errors.consultancyType && <p className="text-red-500">{errors.consultancyType.message}</p>}
                                </div>


                                <div>
                                    <Label className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Service Type</Label>
                                    <div className='pt-[10px]'>
                                        <Select onValueChange={(value: string) => setValue("serviceType", value)}>
                                            <SelectTrigger className="w-full focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none">
                                                <span>{watch("serviceType") || "Select service type"}</span>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="service1">Service 1</SelectItem>
                                                <SelectItem value="service2">Service 2</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    {errors.serviceType && <p className="text-red-500">{errors.serviceType.message}</p>}
                                </div>

                   
                                <div>
                                    <Label className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Tags</Label>
                                    <div className='pt-[10px]'><Input {...register("tags")} type="text" placeholder="Enter tags" className="w-full focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none" /></div>
                                </div>

                  
                                <div>
                                    <Label className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Priority</Label>
                                    <div className='pt-[10px]'>
                                        <Select
                                            onValueChange={(value: string) => setValue("priority", value)}
                                            defaultValue={""} 
                                            >
                                            <SelectTrigger className="w-full focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none">
                                                <span>{priority || "Select priority"}</span> 
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="low">Low</SelectItem>
                                                <SelectItem value="medium">Medium</SelectItem>
                                                <SelectItem value="high">High</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    {errors.priority && <p className="text-red-500">{errors.priority.message}</p>}
                                </div>

                         
                                <div>
                                    <Label className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Choose a Consultant</Label>
                                    <div className='pt-[10px]'>
                                        <Select
                                            onValueChange={(value: string) => setValue("consultant", value)} 
                                            defaultValue={""} 
                                            >
                                            <SelectTrigger className="w-full focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none">
                                                <span>{consultant || "Select a consultant"}</span> 
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="consultant1">Consultant 1</SelectItem>
                                                <SelectItem value="consultant2">Consultant 2</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    {errors.consultant && <p className="text-red-500">{errors.consultant.message}</p>}
                                </div>


                                <div className="flex space-x-4">
                                    <div className="flex-1">
                                        <Label className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Budget</Label>
                                        <div  className='pt-[10px]'><Input {...register("budget", { valueAsNumber: true })} type="number" placeholder="Enter budget" className="w-full focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none" /></div>
                                        {errors.budget && <p className="text-red-500">{errors.budget.message}</p>}
                                    </div>

                                    <div className="flex-1">
                                        <Label className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Deadline</Label>
                                        <div className='pt-[10px]'><Input {...register("deadline")} type="date" className="w-full focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none" /></div>
                                        {errors.deadline && <p className="text-red-500">{errors.deadline.message}</p>}
                                    </div>
                                </div>


                                <div className='pb-[10px]'>
                                    <Label className="text-[14px] text-[#101828] leading-[24px] font-medium">Project Description</Label>
                                    <div className='pt-[10px]'>
                                        <Textarea {...register("projectDescription")} placeholder="Describe the project" className="w-full focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none" rows={4} />
                                        {errors.projectDescription && <p className="text-red-500">{errors.projectDescription.message}</p>}
                                    </div>
                                </div>

 
                                <Label className="text-[14px] text-[#101828] leading-[24px] font-medium">File Upload</Label>
                                <div className="border-dashed h-[96px] border-[1px] border-[#5B52B6] rounded-[8px] bg-[#F1F1F1] p-4 text-center relative">
                                    <Input
                                    {...register("uploadFile", { required: "Photo is required" })}
                                    type="file"
                                    accept="image/*"
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                    onChange={handleFileChange}
                                    />
                                    <Image src={UploadIcon} alt="Upload Icon" width={24} height={24} className="mx-auto" />
                                    <p className="text-[14px] leading-[21px] text-[#D0D0D3] font-normal pt-[5px]">
                                    Drag and Drop photo here or choose photo
                                    </p>

                                    {fileName && (
                                    <p className="absolute top-2 right-2 text-[12px] text-[#000000] font-medium">
                                        {fileName}
                                    </p>
                                    )}
                                </div>

                                <div className="flex items-start justify-between mt-2">
                                    <p className="text-[13px] leading-[19.5px] text-[#757678] font-normal">
                                    Supported formats: JPEG and PNG. 
                                    </p>
                                    <p className="text-[13px] whitespace-nowrap leading-[19.5px] text-[#757678] font-normal">
                                    Maximum size: 25MB
                                    </p>
                                </div>


                                
                                <div className="flex items-center justify-between w-full pt-4">
                                    <p className="text-[#5B52B6] font-bold">Need help?</p>
                                    <Button type="submit" className="bg-[#5B52B6] text-white">Submit Job Order</Button>
                                </div>
                            </form>
                        </SheetContent>

                        {isSecondSheetOpen && (

                            <SheetContent side="right" className="flex flex-col p-6 bg-white w-full max-w-md shadow-lg overflow-y-auto scrollbar-hide">
                                <div className="space-y-[10px]">
                                    <h1 className="text-[#101828] text-[20px] leading-[30px] font-bold">Job Order Summary!</h1>
                                    <p className="text-[#41404B] text-[16px] leading-[22.4px] font-normal max-w-[372px]">Here is the summary page showing the chosen Consultants and the project details.</p>
                                </div>


                                <div className="flex flex-col items-start justify-start gap-y-[20px]">
                                    <h1 className="text-[#101828] text-[20px] leading-[30px] font-bold">Project Assigned to:</h1>
                                    <Image src={AssignedToIcon} alt="AssignedToIcon" />
                                </div>

                                <div className="flex flex-col items-start justify-start gap-y-[20px]">
                                    <h1 className="text-[#101828] text-[20px] leading-[30px] font-bold">Project Description</h1>

                                    <p className="text-[#41404B] text-[16px] leading-[24px] font-normal">
                                        Lorem ipsum dolor sit amet consectetur. Varius blandit ornare erat imperdiet felis turpis morbi. 
                                        Maecenas diam malesuada hac enim. Porttitor magna odio tincidunt viverra. In commodo nisi 
                                        neque in. Eget tristique ornare viverra convallis venenatis est fames. Porttitor cum lacinia 
                                        quis est ut. Nam ante fames faucibus congue phasellus nisl lorem facilisis suscipit.
                                    </p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-[10px]">
                                        <h1 className="text-[#757678] text-[20px] leading-[30px] font-normal">ATTACHMENTS</h1>
                                        <h1 className="text-[#5B52B6] text-[20px] leading-[30px] font-medium">Upload</h1>
                                    </div>
                                    <div className="flex items-center gap-[10px]">
                                        <div className="cursor-pointer">
                                            <Image src={GuidelinesPdf} alt="GuidelinesPdf" />
                                        </div>
                                        <div className="cursor-pointer">
                                            <Image src={BrandingAssets} alt="BrandingAssets" />
                                        </div>
                                        <div className="cursor-pointer">
                                            <Image src={Plus} alt="Plus" />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-center">
                                        <button className="bg-[#5B52B6] rounded-[8px] w-[172px] p-[10px] text-[16.5px] text-white leading-[19.8px] font-bold"
                                            onClick={() => setIsOverlayVisible(true)}
                                        >
                                            Submit
                                        </button>
                                    </div>

                                    {isOverlayVisible && (
                                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                            <div className="bg-white rounded-lg w-[90%] max-w-[341px] min-h-[415px] p-6 relative">
                                                <button
                                                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                                                    onClick={() => setIsOverlayVisible(false)} 
                                                >
                                                    <Image src={CrossX} alt="CrossX" />
                                                </button>

                                                <div className="flex flex-col items-center justify-center">
                                                    <Image src={Done} alt="Done" />
                                                </div>

                                                <div  className="flex flex-col items-center justify-center">
                                                    <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold text-center max-w-[270px]">Job Order Submitted Successfully!</h1>
                                                    <p className="text-[#41404B] text-[16px] leading-[24px] font-normal text-center max-w-[270px]">A message thread will be activated and notification sent to you once your offer is accepted</p>
                                                </div>
                                            </div>
                                                

                                        </div>
                                    )}
                                </div>
                            </SheetContent>

                            )}

                    </Sheet>
                </div>
            </div>

                    


                
            <div className="pt-10">
                <div className="grid grid-cols-4 gap-8">

                    <div className="bg-[#FFFFFF] rounded-[8px] border-[1px] shadow-custom  border-[#F0F0F9] max-w-[260px] p-[16px]">
                        <div className="flex items-center gap-[5px]">
                            <Image width={37} height={37} src={TotalOrdersIcon} alt="TotalOrdersIcon" />
                            <h1 className="text-[24px] leading-[28.8px] font-bold text-[#101828]">1,200</h1>
                        </div>
                        <h1 className="text-[#7B91B0] pt-[20px] text-left text-[16px] leading-[24px] font-normal">Total Job Orders</h1>
                    </div>

                    <div className="bg-[#FFFFFF] rounded-[8px] border-[1px] shadow-custom  border-[#F0F0F9] max-w-[260px] p-[16px]">
                        <div className="flex items-center gap-[5px]">
                            <Image width={37} height={37} src={OngoingOrdersIcon} alt="OngoingOrdersIcon" />
                            <h1 className="text-[24px] leading-[28.8px] font-bold text-[#101828]">200</h1>
                        </div>
                        <h1 className="text-[#7B91B0] pt-[20px] text-left text-[16px] leading-[24px] font-normal">Ongoing Job Orders</h1>
                    </div>

                    <div className="bg-[#FFFFFF] rounded-[8px] border-[1px] shadow-custom  border-[#F0F0F9] max-w-[260px] p-[16px]">
                        <div className="flex items-center gap-[5px]">
                            <Image width={37} height={37} src={CompletedOrdersIcon} alt="CompletedOrdersIcon" />
                            <h1 className="text-[24px] leading-[28.8px] font-bold text-[#101828]">1,000</h1>
                        </div>
                        <h1 className="text-[#7B91B0] pt-[20px] text-left text-[16px] leading-[24px] font-normal">Completed Job Orders</h1>
                    </div>

                    <div className="bg-[#FFFFFF] rounded-[8px] border-[1px] shadow-custom  border-[#F0F0F9] max-w-[260px] p-[16px]">
                        <div className="flex items-center gap-[5px]">
                            <Image width={37} height={37} src={TotalValueIcon} alt="TotalValueIcon" />
                            <h1 className="text-[24px] leading-[28.8px] font-bold text-[#101828]">₦20,000,000</h1>
                        </div>
                        <h1 className="text-[#7B91B0] pt-[20px] text-left text-[16px] leading-[24px] font-normal">Total Value of Job Orders</h1>
                    </div>
                </div>
            </div>


            <div className="pt-10">

                <div className="flex gap-4 w-full">
                    <ExpenditureAnalysisChart  />



                    <div className="flex flex-col items-end justify-end">
                        <div className="bg-[#FFFFFF] w-[323.67px] h-[342.96px] p-[17.83px] overflow-y-auto scrollbar-thin">
                            <div className="flex items-center justify-between">
                                <h1 className="text-[#101828] text-[20px] leading-[30px] font-bold">Ongoing Tasks</h1>
                                <Image width={21.5} height={21.5} src={more} alt="more" />
                            </div>

                            <div className="pt-[25px] bg-white">
                                <div className="py-[10.75px] px-[7.17px] shadow-custom-two border-b-[7px]">
                                    <OngoingTask label="Business Strategy Development" />
                                </div>

                                <div className="py-[10.75px] px-[7.17px] shadow-custom-two border-b-[7px]">
                                    <OngoingTask label="Organizational Restructuring" />
                                </div>

                                <div className="py-[10.75px] px-[7.17px] shadow-custom-two border-b-[7px]">
                                    <OngoingTask label="Change Management" />
                                </div>

                                <div className="py-[10.75px] px-[7.17px] shadow-custom-two border-b-[7px]">
                                    <OngoingTask label="Tax Advisory and Compliance" />
                                </div>

                                <div className="py-[10.75px] px-[7.17px] shadow-custom-two border-b-[7px]">
                                    <OngoingTask label="Fundraising Strategy and Execution" />
                                </div>

                                <div className="py-[10.75px] px-[7.17px] shadow-custom-two border-b-[7px]">
                                    <OngoingTask label="Change Management" />
                                </div>

                                <div className="py-[10.75px] px-[7.17px] shadow-custom-two border-b-[7px]">
                                    <OngoingTask label="Change Management" />
                                </div>

                                <div className="py-[10.75px] px-[7.17px] shadow-custom-two border-b-[7px]">
                                    <OngoingTask label="Change Management" />
                                </div>

                                <div className="py-[10.75px] px-[7.17px] shadow-custom-two border-b-[7px]">
                                    <OngoingTask label="Change Management" />
                                </div>

                                <div className="py-[10.75px] px-[7.17px] shadow-custom-two border-b-[7px]">
                                    <OngoingTask label="Change Management" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="pt-10">
                <div className="flex items-center justify-between">
                    <h1 className="text-[#101828] text-[20px] leading-[30px] font-bold">Recent Job Orders</h1>

                    <button
                        onClick={handleViewAllClick}
                        className="bg-[#5B52B6] text-[#FFFFFF] text-[14px] leading-[16.8px] font-normal p-[10px] w-[96px] rounded-[8px]">
                        View All
                    </button>
                </div>


                <div className="pt-10">
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                            <TableRow>
                                <TableCell><h1 className="text-[16.5px] font-semibold text-[#7B91B0]">Company Name</h1></TableCell>
                                <TableCell><h1 className="text-[16.5px] font-semibold text-[#7B91B0]">Service Type</h1></TableCell>
                                <TableCell><h1 className="text-[16.5px] font-semibold text-[#7B91B0]">Start/Due Date</h1></TableCell>
                                <TableCell><h1 className="text-[16.5px] font-semibold text-[#7B91B0]">Status</h1></TableCell>
                                <TableCell><h1 className="text-[16.5px] font-semibold text-[#7B91B0]">Action</h1></TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {jobOrdersData.map((order, index) => (
                                <TableRow key={index}>
                                <TableCell>
                                    <div className="flex items-center">
                                    <img
                                        src={order.companyLogo}
                                        alt={`${order.companyName} logo`}
                                        className="w-10 h-10 mr-4"
                                    />
                                    <div>
                                        <span className="font-semibold text-[14px] text-[#101828]">{order.companyName}</span>
                                        <br />
                                        <span className="text-[#A3A2AB] text-[11px]">{order.location}</span>
                                    </div>
                                    </div>
                                </TableCell>
                                <TableCell>{order.serviceType}</TableCell>
                                <TableCell>{order.startDueDate}</TableCell>
                                <TableCell>
                                    <div style={getStatusStyle(order.status)}>{order.status}</div>
                                </TableCell>
                                <TableCell>
                                    <IconButton aria-label="actions" onClick={() => toggleMenu(index)}>
                                    <MoreVertIcon />
                                    </IconButton>
                                    {openRow === index && (
                                    <div className="absolute bg-white border border-gray-200 rounded-lg shadow-md p-2 mt-2 w-[120px] z-50">
                                        <div className="flex items-center p-2 cursor-pointer hover:bg-gray-100" onClick={closeMenu}>
                                        <Image src={PreviewIcon} alt="Preview Icon" width={16} height={16} />
                                        <span className="text-[13px] text-[#101828] ml-2">Preview</span>
                                        </div>
                                        <div className="flex items-center p-2 cursor-pointer hover:bg-gray-100" onClick={closeMenu}>
                                        <Image src={CancelIcon} alt="Cancel Icon" width={16} height={16} />
                                        <span className="text-[13px] text-[#101828] ml-2">Cancel</span>
                                        </div>
                                    </div>
                                    )}
                                </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    

                           
                                
                
                
         





    )
} 


export default DashboardContent;