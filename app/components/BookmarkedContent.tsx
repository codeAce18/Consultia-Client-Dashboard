import DashboardHeader from './DashboardHeader';
import { Separator } from "@/components/ui/separator"








interface BookmarkedContentProps {
    setActiveComponent: (component: string) => void;
}

const BookmarkedContent: React.FC<BookmarkedContentProps> = ({ setActiveComponent }) => {



    return (
        <div>
            {/*  Bookmarks  Header for the Dashboard Screen */}
            <DashboardHeader title="Bookmarks" setActiveComponent={setActiveComponent} /> 



            <div className="pt-[24px]">
                <Separator />
            </div>

        </div>
    )
} 


export default BookmarkedContent;