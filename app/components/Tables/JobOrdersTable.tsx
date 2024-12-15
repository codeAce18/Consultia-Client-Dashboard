// JobOrdersTable.tsx
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Drawer,
  IconButton,
  TablePagination,
} from '@mui/material';
import Image from 'next/image';
import CancelIcon from "../../../public/assets/CancelIcon.svg"
import PreviewIcon from "../../../public/assets/PreviewIcon.svg"
import Export from "../../../public/assets/Export.svg"
import HighPriorityIcon from "../../../public/assets/HighPriorityIcon.svg"
import AssigneeIcon from "../../../public/assets/AssigneeIcon.svg"
import deadline from "../../../public/assets/deadline.svg"
import Status from "../../../public/assets/Status.svg"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { format } from 'date-fns';

import { Button } from "@/components/ui/button";

import OngoingTask from "../OngoingTask"

interface JobOrder {
  companyName: string;
  companyDescription: string;
  location: string;
  companyLogo: string;
  serviceType: string;
  startDate: string;
  dueDate: string;
  status: 'Ongoing' | 'Completed' | 'Rejected';
}

const companyNames = [
  "Dora Consulting Ltd.",
  "Alimanto Nig. Ltd.",
  "Dora Consulting Ltd.",
  "Alimanto Nig. Ltd.",
  "Dora Consulting Ltd.",
  "Alimanto Nig. Ltd.",
  "Alimanto Nig. Ltd.",
  "Dora Consulting Ltd.",
  "Dora Consulting Ltd.",
  "Alimanto Nig. Ltd."
];

const companyLogos = [
  "/assets/ConsultantCompanyLogo1.svg",
  "/assets/ConsultantCompanyLogo2.svg",
  "/assets/ConsultantCompanyLogo2.svg",
  "/assets/ConsultantCompanyLogo1.svg",
  "/assets/ConsultantCompanyLogo2.svg",
  "/assets/ConsultantCompanyLogo1.svg",
  "/assets/ConsultantCompanyLogo2.svg",
  "/assets/ConsultantCompanyLogo1.svg",
  "/assets/ConsultantCompanyLogo2.svg",
  "/assets/ConsultantCompanyLogo1.svg"
];

const companyDescriptions = [
  "Dora Consulting Ltd is a financial institution offering savings, investments, loans, and financial advisory services. They focus on personalized solutions to help individuals and businesses achieve financial stability and growth.",
  "Dora Consulting Ltd is a financial institution offering savings, investments, loans, and financial advisory services. They focus on personalized solutions to help individuals and businesses achieve financial stability and growth.",
  "Dora Consulting Ltd is a financial institution offering savings, investments, loans, and financial advisory services. They focus on personalized solutions to help individuals and businesses achieve financial stability and growth.",
  "Dora Consulting Ltd is a financial institution offering savings, investments, loans, and financial advisory services. They focus on personalized solutions to help individuals and businesses achieve financial stability and growth.",
  "Dora Consulting Ltd is a financial institution offering savings, investments, loans, and financial advisory services. They focus on personalized solutions to help individuals and businesses achieve financial stability and growth.",
  "Dora Consulting Ltd is a financial institution offering savings, investments, loans, and financial advisory services. They focus on personalized solutions to help individuals and businesses achieve financial stability and growth.",
  "Dora Consulting Ltd is a financial institution offering savings, investments, loans, and financial advisory services. They focus on personalized solutions to help individuals and businesses achieve financial stability and growth.",
  "Dora Consulting Ltd is a financial institution offering savings, investments, loans, and financial advisory services. They focus on personalized solutions to help individuals and businesses achieve financial stability and growth.",
  "Dora Consulting Ltd is a financial institution offering savings, investments, loans, and financial advisory services. They focus on personalized solutions to help individuals and businesses achieve financial stability and growth.",
  "Dora Consulting Ltd is a financial institution offering savings, investments, loans, and financial advisory services. They focus on personalized solutions to help individuals and businesses achieve financial stability and growth."
];

const companyLocations = [
  "Lagos, Nigeria",
  "Lagos, Nigeria",
  "Lagos, Nigeria",
  "Lagos, Nigeria",
  "Lagos, Nigeria",
  "Lagos, Nigeria",
  "Lagos, Nigeria",
  "Lagos, Nigeria",
  "Lagos, Nigeria",
  "Lagos, Nigeria"
];

// Generate data with unique images, service types, and formatted dates
const jobOrdersData: JobOrder[] = Array.from({ length: 50 }, (_, index) => ({
  companyName: `${companyNames[index % companyNames.length]}`,
  companyLogo: companyLogos[index % companyLogos.length], // Different logos for each entry
  companyDescription: companyDescriptions[index % companyLogos.length],
  location: companyLocations[index % companyLocations.length],
  serviceType: index % 2 === 0 ? 'Market Entry Strategy' : 'Audit and Assurance Services', // Alternate service types
  startDate: format(new Date(2024, index % 12, (index % 28) + 1), 'MMM dd, yyyy'),
  dueDate: format(new Date(2024, (index % 12) + 1, (index % 28) + 10), 'MMM dd, yyyy'),
  status: index % 3 === 0 ? 'Ongoing' : index % 3 === 1 ? 'Completed' : 'Rejected',
}));

const JobOrdersTable: React.FC = () => {
  const [openRow, setOpenRow] = useState<{ rowId: number | null; filter: string | null }>({
    rowId: null,
    filter: null,
  });

  const toggleMenu = (id: number) => {
    if (openRow.rowId === id && openRow.filter === statusFilter) {
      setOpenRow({ rowId: null, filter: null }); // Close if already open for the same row in the same filter
    } else {
      setOpenRow({ rowId: id, filter: statusFilter }); // Open for specific row in the current filter
    }
  };

  const closeMenu = () => {
    setOpenRow({ rowId: null, filter: null });
  };




  const [selectedOrder, setSelectedOrder] = useState<JobOrder | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState<'All' | 'Ongoing' | 'Completed' | 'Rejected'>('All');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const filteredData = statusFilter === 'All'
    ? jobOrdersData
    : jobOrdersData.filter((order) => order.status === statusFilter);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page when changing rows per page
  };

  // Paginate the filtered data
  const paginatedData = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  // Helper to style the status cell based on the status value
  const getStatusStyle = (status: JobOrder['status']) => {
    return {
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
          ? { backgroundColor: '#FAD9C2', color: '#F87B24' } // Yellow
          : status === 'Completed'
          ? { backgroundColor: '#D2F6D2', color: '#008000' } // Green
          : { backgroundColor: '#F5BFC1', color: '#DD2025' } // Red for Rejected
      )
    };
  };


  const handlePreview = (order: JobOrder) => {
    setSelectedOrder(order);
    setIsSheetOpen(true);
    closeMenu();
  };

  const closeSheet = () => {
    setIsSheetOpen(false);
    setSelectedOrder(null);
  };

  const handleChangeStatus = () => {
    if (selectedOrder) {
      const updatedOrder = {
        ...selectedOrder,
        status: 'Ongoing' as const
      };
      setSelectedOrder(updatedOrder);
    }
  };
  

  return (
    <div className="pt-10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-8">
          <h1
            className={`text-[#41404B] text-[16px] font-normal cursor-pointer ${statusFilter === 'All' ? 'font-semibold border-b-[4px] border-b-[#5B52B6] pb-[5px]' : ''}`}
            onClick={() => setStatusFilter('All')}
          >
            All Job Orders
          </h1>
          <h1
            className={`text-[#41404B] text-[16px] font-normal cursor-pointer ${statusFilter === 'Ongoing' ? 'font-semibold border-b-[4px] border-b-[#5B52B6] pb-[5px] ' : ''}`}
            onClick={() => setStatusFilter('Ongoing')}
          >
            Ongoing
          </h1>
          <h1
            className={`text-[#41404B] text-[16px] font-normal cursor-pointer ${statusFilter === 'Completed' ? 'font-semibold border-b-[4px] border-b-[#5B52B6] pb-[5px]' : ''}`}
            onClick={() => setStatusFilter('Completed')}
          >
            Completed
          </h1>
          <h1
            className={`text-[#41404B] text-[16px] font-normal cursor-pointer ${statusFilter === 'Rejected' ? 'font-semibold border-b-[4px] border-b-[#5B52B6] pb-[5px]' : ''}`}
            onClick={() => setStatusFilter('Rejected')}
          >
            Rejected
          </h1>
        </div>

        <button
          className="flex items-center bg-[#5B52B6] text-white w-[121px] rounded-[4px] gap-[10px] p-[5px]"
          
        >
          <Image src={Export} alt="Export" />

          Export CSV
        </button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><h1 className="text-[16.5px] leading-[19.8px] text-[#7B91B0] font-semibold">Company Name</h1></TableCell>
              <TableCell><h1 className="text-[16.5px] leading-[19.8px] text-[#7B91B0] font-semibold">Service Type</h1></TableCell>
              <TableCell><h1 className="text-[16.5px] leading-[19.8px] text-[#7B91B0] font-semibold">Start/Due Date</h1></TableCell>
              <TableCell><h1 className="text-[16.5px] leading-[19.8px] text-[#7B91B0] font-semibold">Status</h1></TableCell>
              <TableCell><h1 className="text-[16.5px] leading-[19.8px] text-[#7B91B0] font-semibold" >Action</h1></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((order, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center">
                    <img
                      src={order.companyLogo}
                      alt={`${order.companyName} logo`}
                      className="w-10 h-10 mr-4"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-[14px] leading-[21px] text-[#101828]">{order.companyName}</span>
                      <span className="text-[#A3A2AB] text-[11px] leading-[16.5px] font-normal">{order.location}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{order.serviceType}</TableCell>
                <TableCell>{order.startDate} / {order.dueDate}</TableCell>
                <div className="pt-[20px]">
                  <TableCell style={getStatusStyle(order.status)}>{order.status}</TableCell>
                </div>
                <TableCell>
                  <IconButton aria-label="actions" onClick={() => toggleMenu(index)}>
                    <MoreVertIcon />
                  </IconButton>

                  {openRow.rowId === index && openRow.filter === statusFilter && (
                    <div className="absolute bg-white border border-gray-200 rounded-lg shadow-md p-2 mt-2 w-[120px] z-50">
                      <div 
                        className="flex items-center p-2 cursor-pointer hover:bg-gray-100" 
                        onClick={() => handlePreview(order)}>
                        <Image src={PreviewIcon} alt="Preview Icon" width={16} height={16} />
                        <span className="text-[13px] leading-[19.5px] font-normal text-[#101828] ml-2">Preview</span>
                      </div>
                      <div className="flex items-center p-2 cursor-pointer hover:bg-gray-100" onClick={closeMenu}>
                        <Image src={CancelIcon} alt="Cancel Icon" width={16} height={16} />
                        <span className="text-[13px] leading-[19.5px] font-normal text-[#101828] ml-2">Cancel</span>
                      </div>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination Controls */}
        <TablePagination
          component="div"
          count={filteredData.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 15, 20]}
          labelRowsPerPage="Rows per page:"
        />
      </TableContainer>

      {/* Preview Sheet */}
      <Drawer
      
        anchor="right"
        open={isSheetOpen}
        onClose={closeSheet}
        PaperProps={{
          sx: {
            width: '477px',
            padding: '24px',
          }
        }}
      >
        {selectedOrder && (
          <div className="flex flex-col h-full">
            <div className="flex flex-col items-start mb-6">
              <h1 className='text-[#101828] text-[25px] leading-[37.5px] font-bold'>Project Overview</h1>

              <div className='pt-[15px]'>
                <div className='bg-[#F1F1F1] max-w-[152px] rounded-[8px] w-full whitespace-nowrap p-2 flex items-center gap-[10px] text-[#A3A2AB] text-[19.5px] leading-[19.5px] font-normal'>
                  <Image width={16} height={16} src={HighPriorityIcon} alt='HighPriorityIcon' />
                  High Priority
                </div>
              </div>

              <div className='pt-[15px]'>
                <h2 className="text-[20px] leading-[30px] text-[#101828] font-medium">{selectedOrder.companyName}</h2>
                <p className='pt-[10px] text-[#A3A2AB] text-[10px] leading-[15px] font-normal'>{selectedOrder.companyDescription}</p>
              </div>

              <div className='pt-8 space-y-[15px]'>
                <div className='flex items-center gap-10'>
                  <div className='flex items-center gap-[10px]'>
                    <Image width={24} height={24} src={Status} alt="Status" />

                    <p className='text-[#D0D0D3] text-[16px] leading-[22.4px] font-normal'>Status</p>
                  </div>
                  <div style={getStatusStyle(selectedOrder.status as JobOrder['status'])}>
                    {selectedOrder.status}
                  </div>
                </div>

                <div className='flex items-center gap-10'>
                  <div className='flex items-center gap-[10px]'>
                    <Image width={24} height={24} src={deadline} alt="deadline" />

                    <p className='text-[#D0D0D3] text-[16px] leading-[22.4px] font-normal'>Deadline</p>
                  </div>
                 
                  {selectedOrder.dueDate}
                </div>


                <div className='flex items-center gap-10'>
                  <div className='flex items-center gap-[10px]'>
                    <Image width={24} height={24} src={AssigneeIcon} alt="AssigneeIcon" />

                    <p className='text-[#D0D0D3] text-[16px] leading-[22.4px] font-normal'>Assignee</p>
                  </div>


                  <Image 
                    src={selectedOrder.companyLogo} 
                    alt="" 
                    width={36}
                    height={36}
                  />
                </div>
              </div>


              <div className='pt-10'>
                <div className="bg-[#FFFFFF] w-[420px] h-[546px] p-[17.83px] overflow-y-auto scrollbar-thin">
                  <div className="flex items-center justify-between">
                    <h1 className="text-[#101828] text-[20px] leading-[30px] font-bold">Ongoing Tasks</h1>
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

            {/* <div className="mt-auto flex space-x-4">
              <Button 
                // variant="contained" 
                color="primary" 
                onClick={handleChangeStatus}
                className="bg-[#5B52B6] hover:bg-[#4a41a3] text-white"
              >
                {selectedOrder.status === 'Completed' || selectedOrder.status === 'Rejected' 
                  ? 'Mark as In Progress' 
                  : 'Update Status'}
              </Button>
              <Button 
                // variant="outlined" 
                onClick={closeSheet}
              >
                Close
              </Button> */}
            {/* </div> */}
          </div>
        )}
      </Drawer>
    </div>
  );
};

              
export default JobOrdersTable;
             

          


