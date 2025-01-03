import PaymentHistoryTable from "./Tables/PaymentHistoryTable"
import DashboardHeader from './DashboardHeader';
import { Separator } from "@/components/ui/separator"



interface PaymentContentProps {
    setActiveComponent: (component: string) => void;
}

const PaymentHistoryContent: React.FC<PaymentContentProps> = ({setActiveComponent}) => {

  

    return (
        <div>
            {/*  Payment History Header for the Dashboard Screen */}
            <DashboardHeader title='Payments' setActiveComponent={setActiveComponent} />


            <div className="pt-[24px]">
                <Separator />
            </div> 



            <PaymentHistoryTable />
        </div>
    )
} 


export default PaymentHistoryContent;















