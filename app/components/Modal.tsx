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

    const [fileName, setFileName] = useState<string | null>(null); // Store file name
    const [error, setError] = useState<string | null>(null); // Store validation error

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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[758px] h-[700px]  rounded-lg p-6 text-center transform transition-all duration-500 ease-in-out translate-y-[-100%] animate-slide-in">
        <h1 className='text-left text-[#101828] text-[20px] leading-[30px] font-bold'>Welcome Bankole!</h1>
        <p className='text-left max-w-[589px] text-[#41404B] text-[16px] leading-[24px] font-normal'>Upgrade your profile to get the best out of Consultia! If your are a Nigerian, your wallet can only be activated if you provide your BVN as required by the CBN.</p>
        <button
          onClick={onClose}
          className="absolute top-[34px] right-10 z-50"
        >
          <Image src={CrossX} alt="CrossX" />
        </button>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-10">
        {/* Gender */}
        <div className='flex items-center justify-center space-x-6'>
            <div className='w-[339px] text-left'>
                <label className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Gender</label>
                <div className="pt-[5px]">
                    <Select onValueChange={(value) => setValue('gender', value)}>
                    <SelectTrigger className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none" >
                        <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                    </Select>
                    {/* {errors.gender && <p>{(errors.gender.message as string) || 'Gender is required'}</p>} */}
                </div>
            </div>

            {/* Nationality */}
            <div className='w-[339px] text-left'>
            <label className="text-[14px] text-[#A9A9AE] laeding-[21px] font-medium">Nationality</label>
            <div className="pt-[5px]">
                <Select onValueChange={(value) => setValue('nationality', value)}>
                <SelectTrigger className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none">
                    <SelectValue placeholder="Select nationality" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="nigeria">Nigeria</SelectItem>
                    <SelectItem value="ghana">Ghana</SelectItem>
                </SelectContent>
                </Select>
                {/* {errors.nationality && <p>{(errors.nationality.message as string) || 'Nationality is required'}</p>} */}
            </div>
            </div>
        </div>

        <div className='flex items-center justify-center space-x-6'>
            {/* State of Residence */}
            <div className='w-[339px] text-left'>
            <label className="text-[14px] text-[#A9A9AE] laeding-[21px] font-medium">State</label>
            <div className="pt-[5px]">
                <Select  onValueChange={(value) => { 
                setValue('state', value); 
                setReceiverState(value);
              }}>
                <SelectTrigger className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none">
                    <SelectValue placeholder={loadingStates ? 'Loading...' : 'Select your state of residence'} />
                </SelectTrigger>
                <SelectContent>
                    {states.map((state) => (
                    <SelectItem key={state} value={state}>
                        {state} 
                    </SelectItem>
                    ))}
                </SelectContent>
                </Select>
                {/* {errors.state && <p>{(errors.state.message as string) || 'State is required'}</p>} */}
            </div>
            </div>
            {/* City of Residence */}
            <div className='w-[339px] text-left'>
            <label className="text-[14px] text-[#A9A9AE] laeding-[21px] font-medium">City</label>
            <div className="pt-[5px]">
                <Select
                    onValueChange={(value) => setValue('city', value)}
                    disabled={loadingCities || !receiverState}
                >
                <SelectTrigger className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none">
                    <SelectValue placeholder={loadingCities ? 'Loading cities...' : 'Select your city of residence'} />
                </SelectTrigger>
                <SelectContent>
                    {cities.map((city: string) => ( // Specify the type of city here
                    <SelectItem key={city} value={city}>
                        {city}
                    </SelectItem>
                    ))}
                </SelectContent>
                </Select>
                {/* {errors.city && <p>{(errors.city.message as string) || 'City is required'}</p>} */}
            </div>
            </div>
        </div>

        <div className="flex items-center justify-center space-x-6">
            {/* Date of Birth */}
            <div className="relative w-[339px] text-left">
            <label className="text-[14px] text-[#A9A9AE] laeding-[21px] font-medium">Date of Birth</label>
            <div className="pt-[5px]">
                <Input type="date" {...register('dob')} className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none" />
                {/* {errors.dob && <p>{(errors.dob.message as string) || 'Date of Birth is required'}</p>} */}
            </div>
            </div>
            {/* Occupation */}
            <div className='w-[339px] text-left'>
            <label className="text-[14px] text-[#A9A9AE] laeding-[21px] font-medium">Occupation</label>
            <div className="pt-[5px]">
                <Input {...register('occupation')} placeholder="Enter your occupation" className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none" />
                {/* {errors.occupation && <p>{(errors.occupation.message as string) || 'Occupation is required'}</p>} */}
            </div>
            </div>
        </div>

        <div className='flex items-center justify-center space-x-6'>
            {/* NIN */}
            <div className='w-[339px] text-left'>
                <div className="flex  items-center gap-[15px]">
                    <label className="text-[14px] text-[#A9A9AE] laeding-[21px] font-medium">Enter NIN</label>

                    <Image width={24} height={24} src={InfoIcon} alt="InfoIcon" />
                </div>
            <div className="pt-[5px]">
                <Input {...register('nin')} placeholder="Enter your NIN" className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none"/>
                {/* {errors.nin && <p>{(errors.nin.message as string) || 'NIN must be 11 digits'}</p>} */}
            </div>
            </div>
            {/* BVN */}
            <div className='w-[339px] text-left'>
            <label className="text-[14px] text-[#A9A9AE] laeding-[21px] font-medium">Enter BVN</label>
            <div className="pt-[5px]">
                <Input {...register('bvn')} placeholder="Enter your BVN" className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none"/>
                {/* {errors.bvn && <p>{(errors.bvn.message as string) || 'BVN must be 11 digits'}</p>} */}
            </div>
            </div>
        </div>

        {/* Upload Profile Picture */}
        <div className="text-left">
            <label className="text-[16px] text-[#101828] laeding-[24px] font-medium">Upload Profile    Photo</label>
            <div className='pt-[5px]'>
            <div className="border-dashed w-[696px] h-[96px] border-[1px] border-[#5B52B6] rounded-[8px] bg-[#F1F1F1] p-4 text-center relative">
            <input
                {...register('profilePicture')}
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleFileChange} // Handle file input change
            />
            <Image src={UploadIcon} alt="Upload Icon" width={24} height={24} className="mx-auto" /> {/* Update with correct path */}
            <p className="text-[14px] leading-[21px] text-[#D0D0D3] font-normal pt-[5px]">Drag and Drop photo here or choose photo</p>
            
            {fileName && (
                <p className="absolute top-2 right-2 text-[12px] text-[#000000] font-medium">
                {fileName}
                </p> // Display file name at the top-right corner
            )}
            
            {error && (
                <p className="text-red-500 mt-2">{error}</p>
            )}

            {/* {errors.profilePicture && <p>{(errors.profilePicture.message as string) || 'Profile picture is required'}</p>} */}
            </div>
            <div className="flex items-center justify-between">
                <p className="text-[13px] leading-[19.5px] text-[#757678] font-normal">Supported formats: JPEG and PNG. Dimension: 500 by 500px</p>

                <p className="text-[13px] leading-[19.5px] text-[#757678] font-normal">Maximum size: 25MB</p>
            </div>
            </div>
        </div>

        {/* Action Buttons */}
        <div className='flex items-center justify-center space-x-4'>
            {/* Cancel Button */}
            <Button variant="outline" onClick={onClose} className="w-[326px] h-[48px] rounded-[8px] bg-[#F1F1F1] text-[16.5px] leading-[19.8px] text-[#101828] font-bold">
                Cancel
            </Button>

            {/* Upgrade Profile Button */}
            <Button onClick={onClose}  className="w-[326px] bg-[#5B52B6] h-[48px] rounded-[8px] text-white text-[16.5px] leading-[19.8px] font-bold">
                Upgrade Profile
            </Button>
        </div>
        </form>

        {/* <ModalForm /> */}

        <div className="absolute top-0 right-0">
            <Image src={ModalSvg} alt="ModalSvg" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
