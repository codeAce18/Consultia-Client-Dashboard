import Image from 'next/image';
import MasterCardImage from "../../public/assets/MasterCardImage.svg"
import VisaCardImage from "../../public/assets/VisaImage.svg"
import trashIcon from "../../public/assets/trashIcon.svg"

import AddNewCardIcon from "../../public/assets/AddNewCardIcon.svg"

import { Switch } from "@/components/ui/switch"



const SettingsManageCardsSection = () => {
    return (
      <div>
        <div>
          <div>
            <h1 className="text-[#101828] text-[24px] leading-[36px] font-bold">Manage Cards</h1>

            <p className="text-[#41404B] text-[16px] leading-[22.4px] font-normal">Choose your preferred transactional Cards</p>
          </div>

          <div className="pt-10">
            <div className="flex gap-20">
              <div className="max-w-[671px] w-full">
                <div className="flex items-center justify-between">
                  <h1 className="text-[#A3A2AB] text-[16px] leading-[22.4px] font-normal">Card Type</h1>
                  <div className="flex items-center gap-10">
                    <h1 className="text-[#5B52B6] text-[16px] leading-[22.4px] font-normal">On/Off</h1>
                    <h1 className="text-[#5B52B6] text-[16px] leading-[22.4px] font-normal">Delete</h1>
                  </div>
                </div>
                <div className="pt-[10px] space-y-[5px]">
                  <div className="flex items-center justify-between bg-[#F9FAFE] p-[10px] shadow-custom-lg">
                    <div>
                      <div className="flex items-center gap-[4px]">
                        <Image src={MasterCardImage} alt="MasterCardImage" />
                        <p className="text-[#41404B] text-[16.5px] leading-[24.75px] font-semibold">*************5557</p>
                      </div>
                      <p className="text-[#A3A2AB] text-[16px] leading-[22.4px] font-normal">Guarantee Trust Bank Expires 12/26 </p>
                    </div>
                    <div className="flex items-center gap-16">
                      <Switch id="two-factor-switch" />
                      <Image width={24} height={24} src={trashIcon} alt="trashIcon" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-[#F9FAFE] p-[10px] shadow-custom-lg">
                    <div>
                      <div className="flex items-center gap-[4px]">
                        <Image src={VisaCardImage} alt="MasterCardImage" />
                        <p className="text-[#41404B] text-[16.5px] leading-[24.75px] font-semibold">*************5557</p>
                      </div>
                      <p className="text-[#A3A2AB] text-[16px] leading-[22.4px] font-normal">Guarantee Trust Bank Expires 12/26 </p>
                    </div>
                    <div className="flex items-center gap-16">
                      <Switch id="two-factor-switch" />
                      <Image width={24} height={24} src={trashIcon} alt="trashIcon" />
                    </div>
                  </div>


                  <div className="flex items-center justify-between bg-[#F9FAFE] p-[10px] shadow-custom-lg">
                    <div>
                      <div className="flex items-center gap-[4px]">
                        <Image src={MasterCardImage} alt="MasterCardImage" />
                        <p className="text-[#41404B] text-[16.5px] leading-[24.75px] font-semibold">*************5557</p>
                      </div>
                      <p className="text-[#A3A2AB] text-[16px] leading-[22.4px] font-normal">Guarantee Trust Bank Expires 12/26 </p>
                    </div>
                    <div className="flex items-center gap-16">
                      <Switch id="two-factor-switch" />
                      <Image width={24} height={24} src={trashIcon} alt="trashIcon" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-[#F9FAFE] p-[10px] shadow-custom-lg">
                    <div>
                      <div className="flex items-center gap-[4px]">
                        <Image src={VisaCardImage} alt="MasterCardImage" />
                        <p className="text-[#41404B] text-[16.5px] leading-[24.75px] font-semibold">*************5557</p>
                      </div>
                      <p className="text-[#A3A2AB] text-[16px] leading-[22.4px] font-normal">Guarantee Trust Bank Expires 12/26 </p>
                    </div>
                    <div className="flex items-center gap-16">
                      <Switch id="two-factor-switch" />
                      <Image width={24} height={24} src={trashIcon} alt="trashIcon" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-[#F9FAFE] p-[10px] shadow-custom-lg">
                    <div>
                      <div className="flex items-center gap-[4px]">
                        <Image src={MasterCardImage} alt="MasterCardImage" />
                        <p className="text-[#41404B] text-[16.5px] leading-[24.75px] font-semibold">*************5557</p>
                      </div>
                      <p className="text-[#A3A2AB] text-[16px] leading-[22.4px] font-normal">Guarantee Trust Bank Expires 12/26 </p>
                    </div>
                    <div className="flex items-center gap-16">
                      <Switch id="two-factor-switch" />
                      <Image width={24} height={24} src={trashIcon} alt="trashIcon" />
                    </div>
                  </div>
                </div>
              </div>


              <div>
                <div className="flex flex-col items-center justify-center space-y-[16px] bg-[#F0F0F9] p-[12px] w-[241px] h-[154px] border-[1px] border-[#CFCDEC] rounded-[8px]">
                  <Image width={39} height={39} src={AddNewCardIcon} alt="AddNewCardIcon" />

                  <h1 className="text-[#41404B] text-[16px] leading-[19.2px] font-normal">Add New Card</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};


export default SettingsManageCardsSection;
  