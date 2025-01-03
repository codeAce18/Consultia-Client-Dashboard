// app/components/Modal.tsx
'use client';
import Image from "next/image";
import InfoIcon from "../../public/assets/InfoIcon.svg"
import CrossX from "../../public/assets/CrossX.svg"
import ModalSvg from "../../public/assets/ModalSvg.svg"
import UploadIcon from "../../public/assets/UploadIcon.svg"
import { useState, useEffect } from 'react';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';



interface ModalProps {
  onClose: () => void;
  
}





const FormSchema = z.object({
    gender: z.string(),
    nationality: z.string(),
    state: z.string(),
    city: z.string(),
    dob: z.string(),
    occupation: z.string().min(1, 'Occupation is required'),
    nin: z.string().length(11, 'NIN must be 11 digits'),
    bvn: z.string().length(11, 'BVN must be 11 digits'),
    profilePicture: z.any(),
});


type FormData = z.infer<typeof FormSchema>;


const Modal: React.FC<ModalProps> = ({ onClose }) => {
    const { register, handleSubmit , setValue} = useForm<FormData>();
    
    const [states, setStates] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);
    const [receiverState, setReceiverState] = useState('');
    const [loadingStates, setLoadingStates] = useState(true);
    const [loadingCities, setLoadingCities] = useState(false);

    const [fileName, setFileName] = useState<string | null>(null); 
    const [error, setError] = useState<string | null>(null); 

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
        const fileType = file.type;
        const fileSizeMB = file.size / (1024 * 1024); // Convert to MB
    
        // Validate file format (JPEG and PNG)
        if (!['image/jpeg', 'image/png'].includes(fileType)) {
            setError('Supported formats: JPEG and PNG.');
            return;
        }
    
        // Validate file size (Max 25MB)
        if (fileSizeMB > 25) {
            setError('Maximum size: 25MB.');
            return;
        }
    
        // Create a new HTMLImageElement instance to validate image dimensions
        const img = new window.Image();
        img.src = URL.createObjectURL(file);
        img.onload = () => {
            if (img.width !== 500 || img.height !== 500) {
            setError('Dimensions must be 500x500px.');
            } else {
            setError(null); // Clear errors if validation passes
            setFileName(file.name); // Set the file name if valid
            }
        };
        }
    };
    
       
    // Fetch states from the API
    useEffect(() => {
        const fetchStates = async () => {
        try {
            const response = await fetch('https://nigeria-states-towns-lgas.onrender.com/api/states');
            const data = await response.json();
            // Assuming data is an array of objects with a 'name' property
            setStates(data.map((state: { name: string }) => state.name)); 
        } catch (error) {
            console.error('Error fetching states:', error);
        } finally {
            setLoadingStates(false);
        }
        };

        fetchStates();
    }, []);

    // Fetch cities when a state is selected
    useEffect(() => {
        const fetchCities = async () => {
        if (receiverState) {
            setLoadingCities(true);
            try {
            const response = await fetch(`https://nigeria-states-towns-lgas.onrender.com/api/${receiverState.toUpperCase()}/towns`);
            const data = await response.json();
            // Assuming data is an array of objects with a 'name' property
            setCities(data.map((city: { name: string }) => city.name));
            } catch (error) {
            console.error('Error fetching cities:', error);
            } finally {
            setLoadingCities(false);
            }
        }
        };

        fetchCities();
    }, [receiverState]);

    
    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    // Handle form submission logic
    };


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4 overflow-y-auto scrollbar-hide">
        <div className="lg:mt-40 mt-0 bg-white w-full max-w-[758px] h-[90vh] md:h-auto md:min-h-[758px] overflow-y-auto rounded-lg relative p-4 md:p-6 text-center animate-slide-in">
          <div className="flex flex-col gap-4">
            <h1 className='text-left text-[#101828] text-lg md:text-[20px] leading-[30px] font-bold'>Welcome Bankole!</h1>
            <p className='text-left text-[#41404B] text-sm md:text-[16px] leading-[24px] font-normal'>Upgrade your profile to get the best out of Consultia! If your are a Nigerian, your wallet can only be activated if you provide your BVN as required by the CBN.</p>
            
            <button onClick={onClose} className="absolute top-4 right-4 md:top-[34px] md:right-10 z-50">
              <Image src={CrossX} alt="CrossX" />
            </button>
  
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <div className='flex flex-col md:flex-row gap-4 md:gap-6'>
                <div className='w-full md:w-[339px] text-left'>
                  <label className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Gender</label>
                  <div className="mt-1">
                    <Select onValueChange={(value) => setValue('gender', value)}>
                      <SelectTrigger className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
  
                <div className='w-full md:w-[339px]  text-left'>
                  <label className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Nationality</label>
                  <div className="mt-1">
                    <Select onValueChange={(value) => setValue('nationality', value)}>
                      <SelectTrigger className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none">
                        <SelectValue placeholder="Select nationality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nigeria">Nigeria</SelectItem>
                        <SelectItem value="ghana">Ghana</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
  
              <div className='flex flex-col md:flex-row gap-4 md:gap-6'>
                <div className='w-full md:w-[339px]  text-left'>
                  <label className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">State</label>
                  <div className="mt-1">
                    <Select onValueChange={(value) => { 
                      setValue('state', value);
                      setReceiverState(value);
                    }}>
                      <SelectTrigger className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none">
                        <SelectValue placeholder={loadingStates ? 'Loading...' : 'Select state'} />
                      </SelectTrigger>
                      <SelectContent>
                        {states.map((state) => (
                          <SelectItem key={state} value={state}>{state}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
  
                <div className='w-full md:w-[339px]  text-left'>
                  <label className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">City</label>
                  <div className="mt-1">
                    <Select onValueChange={(value) => setValue('city', value)} disabled={loadingCities || !receiverState}>
                      <SelectTrigger className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none">
                        <SelectValue placeholder={loadingCities ? 'Loading...' : 'Select city'} />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city} value={city}>{city}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
  
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className='w-full md:w-[339px] text-left'>
                  <label className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Date of Birth</label>
                  <div className="mt-1">
                    <Input type="date" {...register('dob')} className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none w-full" />
                  </div>
                </div>
  
                <div className='w-full md:w-[339px] text-left'>
                  <label className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Occupation</label>
                  <div className="mt-1">
                    <Input {...register('occupation')} placeholder="Enter occupation" className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none w-full" />
                  </div>
                </div>
              </div>
  
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className='w-full md:w-[339px]'>
                  <div className="flex items-center gap-2  text-left">
                    <label className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Enter NIN</label>
                    <Image width={24} height={24} src={InfoIcon} alt="InfoIcon" />
                  </div>
                  <div className="mt-1">
                    <Input {...register('nin')} placeholder="Enter NIN" className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none w-full" />
                  </div>
                </div>
  
                <div className='w-full md:w-[339px]  text-left'>
                  <label className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Enter BVN</label>
                  <div className="mt-1">
                    <Input {...register('bvn')} placeholder="Enter BVN" className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none w-full" />
                  </div>
                </div>
              </div>
  
              <div className="w-full  text-left">
                <label className="text-[16px] text-[#101828] leading-[24px] font-medium">Upload Profile Photo</label>
                <div className="mt-2">
                  <div className="border-dashed border-[1px] border-[#5B52B6] rounded-[8px] bg-[#F1F1F1] p-4 text-center relative">
                    <input
                      {...register('profilePicture')}
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={handleFileChange}
                    />
                    <Image src={UploadIcon} alt="Upload Icon" width={24} height={24} className="mx-auto" />
                    <p className="text-[14px] leading-[21px] text-[#D0D0D3] font-normal mt-2">Drag and Drop photo here or choose photo</p>
                    {fileName && (
                      <p className="absolute top-2 right-2 text-[12px] text-black font-medium">{fileName}</p>
                    )}
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                  </div>
                  <div className="flex flex-col md:flex-row justify-between gap-2 mt-2 text-[13px] text-[#757678]">
                    <p>Supported formats: JPEG and PNG. Dimension: 500 by 500px</p>
                    <p>Maximum size: 25MB</p>
                  </div>
                </div>
              </div>
  
              <div className='flex flex-col md:flex-row gap-4 mt-4'>
                <Button onClick={onClose} className="w-full md:w-[326px] h-[48px] rounded-[8px] bg-[#F1F1F1] text-[16.5px] text-[#101828] font-bold">
                  Cancel
                </Button>
                <Button onClick={onClose} className="w-full md:w-[326px] h-[48px] rounded-[8px] bg-[#5B52B6] text-white text-[16.5px] font-bold">
                  Upgrade Profile
                </Button>
              </div>
            </form>
          </div>
  
          <div className="absolute top-0 right-0 hidden md:block">
            <Image src={ModalSvg} alt="ModalSvg" />
          </div>
        </div>
    </div>
  );
};

export default Modal;
