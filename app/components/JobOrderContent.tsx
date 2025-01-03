import React from 'react';
import JobOrdersTable from "./Tables/JobOrdersTable"
import DashboardHeader from './DashboardHeader';
import { Separator } from "@/components/ui/separator"


















interface JobOrderContentProps {
    setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
}

const JobOrderContent: React.FC<JobOrderContentProps> = ({ setActiveComponent }) => {



    return (
        <div>

           <DashboardHeader title="Job Orders" setActiveComponent={setActiveComponent} />


            <div className="pt-[24px]">
                <Separator />
            </div>



            <JobOrdersTable />

        </div>

           
    )
} 


export default JobOrderContent;