import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination
} from '@mui/material';

import Image from 'next/image';
import InOutIcon from "../../../public/assets/InOutIcon.svg"

import CrossX from "../../../public/assets/CrossX.svg"


type Invoice = {
  id: number;
  invoice: string;
  date: string;
  dueDate: string;
  total: string;
  status: 'Paid' | 'Unpaid' | 'Pending';
};

const invoiceData: Invoice[]  = [
    { id: 1, invoice: 'INV234567', date: 'July 24, 2024', dueDate: 'September 24, 2024', total: '₦114,000.00', status: 'Paid' },
    { id: 2, invoice: 'INV234568', date: 'July 24, 2024', dueDate: 'September 24, 2024', total: '₦114,000.00', status: 'Unpaid' },
    { id: 3, invoice: 'INV234569', date: 'July 24, 2024', dueDate: 'September 24, 2024', total: '₦114,000.00', status: 'Pending' },
    { id: 4, invoice: 'INV234570', date: 'July 24, 2024', dueDate: 'September 24, 2024', total: '₦120,500.00', status: 'Paid' },
    { id: 5, invoice: 'INV234571', date: 'July 24, 2024', dueDate: 'September 24, 2024', total: '₦140,000.00', status: 'Unpaid' },
    { id: 6, invoice: 'INV234572', date: 'July 24, 2024', dueDate: 'September 24, 2024', total: '₦95,000.00', status: 'Pending' },
    { id: 7, invoice: 'INV234573', date: 'July 24, 2024', dueDate: 'September 24, 2024', total: '₦200,000.00', status: 'Paid' },
    { id: 8, invoice: 'INV234574', date: 'July 24, 2024', dueDate: 'September 24, 2024', total: '₦85,500.00', status: 'Unpaid' },
    { id: 9, invoice: 'INV234575', date: 'July 24, 2024', dueDate: 'September 24, 2024', total: '₦130,000.00', status: 'Pending' },
    { id: 10, invoice: 'INV234576', date: 'July 24, 2024', dueDate: 'September 24, 2024', total: '₦110,750.00', status: 'Paid' },
    { id: 11, invoice: 'INV234577', date: 'July 24, 2024', dueDate: 'September 24, 2024', total: '₦123,450.00', status: 'Unpaid' },
    { id: 12, invoice: 'INV234578', date: 'July 24, 2024', dueDate: 'September 24, 2024', total: '₦142,000.00', status: 'Paid' },
    { id: 13, invoice: 'INV234579', date: 'July 24, 2024', dueDate: 'September 24, 2024', total: '₦134,000.00', status: 'Pending' },
    { id: 14, invoice: 'INV234580', date: 'July 24, 2024', dueDate: 'September 24, 2024', total: '₦160,000.00', status: 'Paid' },
    { id: 15, invoice: 'INV234581', date: 'July 24, 2024', dueDate: 'September 24, 2024', total: '₦75,000.00', status: 'Unpaid' },
];

const InvoiceTable: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<'All' | 'Paid' | 'Unpaid' | 'Pending'>('All');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  // Filter data based on the status selected
  const filteredData = statusFilter === 'All'
    ? invoiceData
    : invoiceData.filter((invoice) => invoice.status === statusFilter);

  const getCount = (status: string) => invoiceData.filter((invoice) => invoice.status === status).length;

  // Handle pagination changes
  const handleChangePage = (event: unknown, newPage: number) => setPage(newPage);
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Handle status button click
  const handleStatusClick = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
  };

  // Render invoice details view
  const renderInvoiceDetails = () => {
    if (!selectedInvoice) return null;

    return (
      <div className="relative flex flex-col justify-center items-center">
        <div className="p-6 bg-white shadow-md max-w-[651px] w-full min-h-[832px] relative overflow-hidden">
          {/* Invoice Header */}
          <div className="flex items-start justify-between">
            <p className="text-[#101828] text-[20px] leading-[30px] font-bold">
              {selectedInvoice.invoice}
            </p>
            <div>
              <button onClick={() => setSelectedInvoice(null)}>
                <Image src={CrossX} alt="CrossX" />
              </button>
              <div>
                <h1 className="text-[#101828] text-[16px] leading-[24px] font-medium">
                  Dora Consulting Ltd.
                </h1>
                <p className="text-[#757678] text-[14px] leading-[21px] font-normal">
                  Business Strategy & Mgt Consulting
                </p>
                <p className="text-[#757678] text-[14px] leading-[21px] font-normal">
                  Abuja, Nigeria
                </p>
              </div>
            </div>
          </div>

          {/* Slanted Status */}
          <div className="absolute -right-8 -top-[0.5px]">
            <div
              className="bg-orange-200 text-orange-500 uppercase font-bold px-14 py-4 transform rotate-45 
      "
              style={{
                color:
                  selectedInvoice.status === "Paid"
                    ? "#FFFFFF"
                    : selectedInvoice.status === "Unpaid"
                    ? "#FFFFFF"
                    : "#F87B24",
                backgroundColor:
                  selectedInvoice.status === "Paid"
                    ? "#1ED11E"
                    : selectedInvoice.status === "Unpaid"
                    ? "#DD2025"
                    : "#FAD9C2",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              {selectedInvoice.status}
            </div>
          </div>

          {/* Invoice Details */}
          <div className="pt-10">
            <div className="bg-[#F1F1F1] p-[10px] flex items-center justify-between rounded-[8px] ">
              <div>
                <p className="text-[#101828] text-[16.5px] leading-[24.5px] font-bold">
                  {selectedInvoice.invoice}
                </p>
                <div className="flex items-center gap-[10px]">
                  <p className="text-gray-600">Invoice Date</p>
                  <p className="font-semibold">{selectedInvoice.date}</p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <p className="text-gray-600">Due Date</p>
                  <p className="font-semibold">{selectedInvoice.dueDate}</p>
                </div>
              </div>


              {(selectedInvoice.status === 'Unpaid' || selectedInvoice.status === 'Pending') && (
                <div>
                  <button className='bg-[#5B52B6] flex flex-col items-center justify-center text-[#FFFFFF] text-[16px] leading-[24px] h-[32px] p-[10px] rounded-[8px] font-normal max-w-[104px] w-full'>
                    Pay Now
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Invoiced To */}
          <div className="pt-10">
            <p className='text-[#757678] text-[14px] leading-[21px] font-medium'>Invoiced To</p>

            <h1 className='text-[#101828] text-[16px] leading-[24px] font-medium pt-[8px]'>Bankole Onafuwa</h1>
          </div>

          {/* Invoice Items */}
          <div className="pt-10">
            <div className="flex justify-between items-center bg-[#F1F1F1] p-[10px] rounded-r-[8px]  rounded-l-[8px]">
              <h1>Description</h1>
              <div className="flex items-center gap-10">
                <h1>Qty</h1>
                <h1>Unit Price</h1>
                <h1>Amount</h1>
              </div>
            </div>
            <div className="flex items-start justify-between pt-[15px]">
              <div>
                <h1 className='text-[#757678] text-[14px] leading-[21px] font-medium'>Full Market Research</h1>
                <h1 className='text-[#757678] text-[14px] leading-[21px] font-medium pt-[20px]'>Business Plan</h1>
              </div>
              <div className="flex gap-4 items-center">
                <div>
                  <h1 className='text-[#757678] text-[14px] leading-[21px] font-medium'>1</h1>
                  <h1 className='text-[#757678] text-[14px] leading-[21px] font-medium  pt-[20px]'>1</h1>
                </div>
                <div>
                  <h1 className='text-[#757678] text-[14px] leading-[21px] font-medium'>NGN115,000</h1>
                  <h1 className='text-[#757678] text-[14px] leading-[21px] font-medium  pt-[20px]'>NGN115,000</h1>
                </div>
                <div>
                  <h1 className='text-[#757678] text-[14px] leading-[21px] font-medium'>NGN115,000</h1>
                  <h1 className='text-[#757678] text-[14px] leading-[21px] font-medium  pt-[20px]'>NGN115,000</h1>
                </div>
              </div>
            </div>
          </div>



          <div className='pt-10'>
            <div className='bg-[#F1F1F1] p-2 rounded-[8px] flex flex-col items-end justify-end space-y-[10px]'>
              <div className='flex items-center gap-10'>
                <h1 className='text-[#101828] text-[14px] leading-[21px] font-medium'>Sub Total</h1>
                <p className='text-[#757678] text-[14px] leading-[21px] font-medium '>NGN230,000</p>
              </div>
              <div className='flex items-center gap-24'>
                <h1 className='text-[#101828] text-[14px] leading-[21px] font-medium'>VAT</h1>
                <p className='text-[#757678] text-[14px] leading-[21px] font-medium '>7.5%</p>
              </div>
              <div className='flex items-center gap-10'>
                <h1 className='text-[#101828] text-[14px] leading-[21px] font-medium'>Total</h1>
                <p className='text-[#757678] text-[14px] leading-[21px] font-medium '>NGN210,000</p>
              </div>
            </div>
          </div>

          <div className='pt-10'>
            <h1 className='text-[#101828] text-[16px] leading-[24px] font-medium'>Transactions</h1>

            <div className='pt-[20px]'>
              <div className='flex items-center bg-[#F1F1F1] justify-between p-[10px] rounded-[8px]'>
                <h1 className='text-[#101828] text-[16px] leading-[24px] font-medium'>Transaction ID</h1>
                <h1 className='text-[#101828] text-[16px] leading-[24px] font-medium'>Method</h1>
                <h1 className='text-[#101828] text-[16px] leading-[24px] font-medium'>Date/Time</h1>
                <h1 className='text-[#101828] text-[16px] leading-[24px] font-medium'>Amount</h1>
              </div>
            </div>

            <h1 className='pt-[10px] text-[#101828] text-center text-[16px] leading-[24px] font-medium'>No Related Transaction Found</h1>
          </div>

          <div className='pt-[20px]'>
            <div className='flex items-center bg-[#F1F1F1] rounded-[8px] p-[10px] gap-[34px] justify-end'>
              <h1 className='text-[#101828] text-[16px] leading-[24px] font-medium'>Wallet Balance</h1>

              <p className='text-[#101828] text-[16px] leading-[24px] font-medium'>NGN00,
                <span className='text-[11px] leading-[16.5px]'>00</span>
              </p>
            </div>
          </div>
        </div>
      </div>

    );
  };

  // Render invoice table
  const renderInvoiceTable = () => {
    return (
      <div className="pt-6">
        {/* Status Tabs - Now only shown when no invoice is selected */}
        <div className="flex items-center gap-10 mb-4">
          {['All', 'Paid', 'Unpaid', 'Pending'].map((status) => (
            <div 
              key={status}
              onClick={() => setStatusFilter(status as 'All' | 'Paid' | 'Unpaid' | 'Pending')}
              className={`cursor-pointer ${statusFilter === status && 'font-semibold'}`}
              style={{
                borderBottom: statusFilter === status ? '4px solid #5B52B6' : 'none',
              }}
            >
              <h1 className={`text-[16px] leading-[19.8px] ${statusFilter === status ? 'font-bold text-[#101828] text-[16.5px] leading-[22.4px] pb-[5px]' : 'text-[#41404B] font-normal'}`}>
                {status} <span>({status === 'All' ? invoiceData.length : getCount(status)})</span>
              </h1>
            </div>
          ))}
        </div>

        <TableContainer component={Paper}>
          <Table>
            <TableHead className='bg-[#F0F0F9]'>
              <TableRow>
                {['Invoice', 'Invoice Date', 'Due Date', 'Total', 'Status'].map((header) => (
                  <TableCell key={header}>
                    <div className="flex items-center gap-2">
                      <h1 className='text-[16.5px] laeding-[19.8px] text-[#7B91B0] font-semibold'>{header}</h1>
                      <Image width={24} height={24} src={InOutIcon} alt="InOutIcon" />
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>{invoice.invoice}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.dueDate}</TableCell>
                  <TableCell>{invoice.total}</TableCell>
                  <TableCell>
                    <button
                      onClick={() => handleStatusClick(invoice)}
                      className="hover:bg-[#000]"
                      style={{
                        color: invoice.status === 'Paid' ? '#008000' :
                               invoice.status === 'Unpaid' ? '#FF0000' : '#FF8679',
                        borderColor: '#A3A2AB',
                        borderWidth: '1px',
                        width: '131px',
                        height: '48px',
                        textTransform: 'capitalize',
                        fontWeight: 700,
                        padding: 0,
                        borderRadius: '8px',
                      }}
                    >
                      {invoice.status}
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </div>
    );
  };

  return (
    <div className="p-4">
      {/* Conditional Rendering */}
      {selectedInvoice ? renderInvoiceDetails() : renderInvoiceTable()}
    </div>
  );
};

export default InvoiceTable;