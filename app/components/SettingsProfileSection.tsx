
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { Separator } from "@/components/ui/separator"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";




import updateProfile from "../../public/assets/updateProfile.svg"
import editPen from "../../public/assets/editPen.svg"


interface State {
    id: string;
    name: string;
  }
  
  interface City {
    id: string;
    name: string;
  }
  
  interface FormValues {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    nationality: string;
    stateOfResidence: string;
    cityOfResidence: string;
    dateOfBirth: string;
    nin: string;
    occupation: string;
  }



const SettingsProfileSection = () => {
    const [states, setStates] = useState<State[]>([]);
    const [cities, setCities] = useState<City[]>([]);
    const [selectedState, setSelectedState] = useState<string>('');
    const [isEditing, setIsEditing] = useState(false);

    const form = useForm<FormValues>({
    defaultValues: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        gender: "",
        nationality: "",
        stateOfResidence: "",
        cityOfResidence: "",
        dateOfBirth: "",
        nin: "",
        occupation: "",
    },
    });
  

    useEffect(() => {
        const fetchStates = async () => {
          try {
            const response = await fetch('https://nigeria-states-towns-lgas.onrender.com/api/states');
            const data: State[] = await response.json();
            setStates(data);
          } catch (error) {
            console.error('Error fetching states:', error);
          }
        };
      
        fetchStates();
      }, []);
      
      useEffect(() => {
        if (selectedState) {
          const fetchCities = async () => {
            try {
              const response = await fetch(`https://nigeria-states-towns-lgas.onrender.com/api/${selectedState}`);
              const data: City[] = await response.json();
              setCities(data);
            } catch (error) {
              console.error('Error fetching cities:', error);
            }
          };
      
          fetchCities();
        }
      }, [selectedState]);
      

      

      const handleEdit = () => {
        setIsEditing(true);
      };
    
      const handleCancel = () => {
        setIsEditing(false);
      };
    
      const handleSaveChanges = () => {
        // Add logic to save changes, such as calling onSubmit or another function
        setIsEditing(false);
      };
      


      const onSubmit = (data: FormValues) => {
        console.log(data);
        // Handle form submission
      };
    


    return (
        <div>

    <div className="flex">
      <div className="relative">
        <Image src={updateProfile} alt="updateProfile" />
        <div className="absolute top-20 left-24">
          <Image src={editPen} alt="editPen" />
        </div>
      </div>

      <div className="bg-[#FFFFFF] p-8 rounded-lg shadow-sm w-full max-w-3xl ml-8">
        <div className="flex items-center justify-between">
          <h1 className="text-[#101828] text-[20px] leading-[30px] font-medium">User Profile</h1>

          {!isEditing && (
            <Image 
              width={24} 
              height={24} 
              src={editPen} 
              alt="editPen" 
              onClick={() => setIsEditing(true)}
              className="cursor-pointer"
            />
          )}
        </div>

        <div className="pt-[20px] pb-[20px]">
          <Separator />
        </div>
         
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* First Name and Last Name */}
            <div className="flex gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">First Name</FormLabel>
                    <FormControl className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none text-[#5B52B6] text-[16px] leading-[24px]">
                      <Input placeholder="Enter first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Last Name</FormLabel>
                    <FormControl className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none text-[#5B52B6] text-[16px] leading-[24px]">
                      <Input placeholder="Enter last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Phone Number and Gender */}
            <div className="flex gap-6">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Phone Number</FormLabel>
                    <FormControl className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none text-[#5B52B6] text-[16px] leading-[24px]">
                      <Input placeholder="Enter phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Gender</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none text-[#5B52B6] text-[16px] leading-[24px]">
                          <SelectValue placeholder="Choose your gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Nationality and State */}
            <div className="flex gap-6">
              <FormField
                control={form.control}
                name="nationality"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Nationality</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none text-[#5B52B6] text-[16px] leading-[24px]">
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="nigeria">Nigeria</SelectItem>
                        {/* Add more countries as needed */}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="stateOfResidence"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">State of Residence</FormLabel>
                    <Select 
                      onValueChange={(value: React.SetStateAction<string>) => {
                        field.onChange(value);
                        setSelectedState(value);
                      }} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none text-[#5B52B6] text-[16px] leading-[24px]">
                          <SelectValue placeholder="Select your state of residence" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {states.map((state: State) => (
                            <SelectItem key={state.id} value={state.id}>
                            {state.name}
                            </SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* City and Date of Birth */}
            <div className="flex gap-6">
              <FormField
                control={form.control}
                name="cityOfResidence"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">City of Residence</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                      disabled={!selectedState}
                    >
                      <FormControl>
                        <SelectTrigger className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none text-[#5B52B6] text-[16px] leading-[24px]">
                          <SelectValue placeholder="Select your  city of residence" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {cities.map((city: City) => (
                            <SelectItem key={city.id} value={city.id}>
                            {city.name}
                            </SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Date of Birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none text-[#5B52B6] text-[16px] leading-[24px]">
                          <Button
                            variant="outline"
                            className={`w-full pl-3 text-left font-normal ${
                              !field.value && "text-muted-foreground"
                            }`}
                          >
                            {field.value ? (
                              format(new Date(field.value), "PPP")
                            ) : (
                              <span>1900-01-01</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value ? new Date(field.value) : undefined}
                          onSelect={(selectedDate) => {
                            // Convert the selected date to a string in the format your form expects
                            field.onChange(selectedDate ? selectedDate.toISOString().split('T')[0] : '');
                          }}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* NIN and Occupation */}
            <div className="flex gap-6">
              <FormField
                control={form.control}
                name="nin"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">NIN</FormLabel>
                    <FormControl className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none text-[#5B52B6] text-[16px] leading-[24px]">
                      <Input placeholder="Enter your NIN number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="occupation"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Occupation</FormLabel>
                    <FormControl className="focus:outline-none focus:ring-0 bg-[#F1F1F1] border-none text-[#5B52B6] text-[16px] leading-[24px]">
                      <Input placeholder="Enter your occupation" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {isEditing && (
            <div className="flex gap-4 mt-4">
              <Button variant="outline" onClick={handleCancel} className="w-1/2">
                Cancel
              </Button>

              <Button  onClick={handleSaveChanges} className="bg-[#5B52B6] w-1/2">
                Save Changes
              </Button>
            </div>
          )}
          </form>
        </Form>
      </div>
    </div>


        
        </div>
    );
  };


export default SettingsProfileSection;