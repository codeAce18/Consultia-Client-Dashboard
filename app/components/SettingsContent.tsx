import { useState } from 'react';
import { Separator } from "@/components/ui/separator"
import Image from "next/image";
import UpdateIcon from "../../public/assets/UpdateIcon.svg"
import SettingsProfileSection from './SettingsProfileSection';
import SettingsAuthenticationSection from './SettingsAuthenticationSection';
import SettingsAlertsSection from './SettingsAlertSection';
import SettingsManageCardsSection from './SettingsManageCardsSection';
import DashboardHeader from './DashboardHeader';













interface SettingsContentProps {
    setActiveComponent: (component: string) => void;
}

const SettingsContent: React.FC<SettingsContentProps> = ({ setActiveComponent }) => {


 

    const [activeTab, setActiveTab] = useState('profile');

    const renderContent = () => {
        switch (activeTab) {
        case 'profile':
            return <SettingsProfileSection />;
        case 'authentication':
            return <SettingsAuthenticationSection />;
        case 'alerts':
            return <SettingsAlertsSection />;
        case 'cards':
            return <SettingsManageCardsSection />;
        default:
            return <SettingsProfileSection />;
        }
    };

    return (
        <div>
            {/*  Settings Header for the Dashboard Screen */}
            <DashboardHeader title='Settings' setActiveComponent={setActiveComponent} />


            <div className="pt-[24px]">
                <Separator />
            </div>


            <div className="pt-10">
                <div className="lg:flex lg:flex-row flex  flex-col items-start justify-start  lg:items-center lg:justify-between">
                    <div className="flex flex-wrap items-center lg:space-x-10 md:space-x-10 space-x-2">
                        <button
                            onClick={() => setActiveTab('profile')}
                            className={`pb-2 ${
                            activeTab === 'profile'
                                ? 'border-b-[#5B52B6] border-b-[4px] font-medium'
                                : 'text-gray-600'
                            }`}
                        >
                            Profile
                        </button>

                        <button
                            onClick={() => setActiveTab('authentication')}
                            className={`pb-2 ${
                            activeTab === 'authentication'
                                ? 'border-b-[#5B52B6] border-b-[4px] font-medium'
                                : 'text-gray-600'
                            }`}
                        >
                            Authentication
                        </button>

                        <button
                            onClick={() => setActiveTab('alerts')}
                            className={`pb-2 ${
                            activeTab === 'alerts'
                                ? 'border-b-[#5B52B6] border-b-[4px] font-medium'
                                : 'text-gray-600'
                            }`}
                        >
                            Alerts
                        </button>

                        <button
                            onClick={() => setActiveTab('cards')}
                            className={`pb-2 ${
                            activeTab === 'cards'
                                ? 'border-b-[#5B52B6] border-b-[4px] font-medium'
                                : 'text-gray-600'
                            }`}
                        >
                            Manage Cards
                        </button>
                    </div>

                    <button className="bg-[#FF7D20] lg:mt-0 mt-8 border-[0.6px] border-[#FF7D20] rounded-[4px] flex items-center gap-[8px] text-white text-[14px] leading-[20px] font-normal px-[5px] py-[5px]">
                        <Image src={UpdateIcon} alt="UpdateIcon" />
                        <span>Update Profile</span>
                    </button>
                </div>

                {/* The Content Section */}

                <div className="pt-32">
                    {renderContent()}
                </div>
            </div>
        </div>
    )
} 


export default SettingsContent;