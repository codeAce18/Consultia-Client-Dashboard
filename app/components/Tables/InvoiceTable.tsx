import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination
} from '@mui/material';

import Image from 'next/image';
import InOutIcon from "../../../public/assets/InOutIcon.svg"

import CrossX from "../../../public/assets/CrossX.svg"

const invoiceData = [
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
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null);

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
  const handleStatusClick = (invoice: any) => {
    setSelectedInvoice(invoice);
  };

  // Render invoice details view
  const renderInvoiceDetails = () => {
    if (!selectedInvoice) return null;

    return (
      <div className="flex flex-col justify-center items-center">
        <div className="p-6 bg-white shadow-md max-w-[651px] w-full min-h-[832px]">
        
        
          <div>
        
            <div className="flex items-start justify-between">
              <p className="text-[#101828] text-[20px] leading-[30px] font-bold">{selectedInvoice.invoice}</p>
              <div>
                <button
                  onClick={() => setSelectedInvoice(null)}
        
                >
                <Image src={CrossX} alt="CrossX" />
                </button>
                <div>
                  <h1 className="text-[#101828] text-[16px] leading-[24px] font-medium">Dora Consulting Ltd.</h1>
                  <p className="text-[#757678] text-[14px] leading-[21px] font-normal">Business Strategy & Mgt Consulting</p>
                  <p className="text-[#757678] text-[14px] leading-[21px] font-normal">Abuja, Nigeria</p>
                </div>
              </div>
            </div>
        
            <div>
        
              <button
                className="px-4 py-2 rounded"
                style={{
                  color: selectedInvoice.status === 'Paid' ? '#008000' :
                         selectedInvoice.status === 'Unpaid' ? '#FF0000' : '#FF8679',
                  borderColor: '#A3A2AB',
                  borderWidth: '1px',
                  fontWeight: 700,
                  borderRadius: '8px',
                }}
              >
                {selectedInvoice.status}
              </button>
            </div>
            <div className="pt-10">
              <div className="bg-[#F1F1F1] p-[10px]">
                <p className="text-[#101828] text-[16.5px] leading-[24.5px] font-bold">{selectedInvoice.invoice}</p>
                <div className="flex items-center gap-[10px]">
                  <p className="text-gray-600">Invoice Date</p>
                  <p className="font-semibold">{selectedInvoice.date}</p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <p className="text-gray-600">Due Date</p>
                  <p className="font-semibold">{selectedInvoice.dueDate}</p>
                </div>
              </div>
            </div>


            <div className="pt-10">
              <p>Invoiced To</p>

              <h1>Bankole Onafuwa</h1>
            </div>
            {/* <div className="pt-10">
              <p className="text-gray-600">Total Amount</p>
              <p className="font-semibold text-lg">{selectedInvoice.total}</p>
            </div> */}
          </div>


          <div className="pt-10">
            <div className="flex justify-between items-center bg-[#F1F1F1] p-[10px]">
              <h1>Description</h1>
              <div className="flex items-center gap-10">
                <h1>Qty</h1>
                <h1>Unit Price</h1>
                <h1>Amount</h1>
              </div>
            </div>


            <div className="flex items-start justify-between pt-[15px]">
              <div>
                <h1>Full Market Research</h1>
                <h1>Business Plan</h1>
              </div>

              <div className="flex gap-4 items-center">
                <div>
                  <h1>1</h1>

                  <h1>1</h1>
                </div>

                <div>
                  <h1>NGN115,000</h1>

                  <h1>NGN115,000</h1>
                </div>

                <div>
                  <h1>NGN115,000</h1>

                  <h1>NGN115,000</h1>
                </div>

              </div>

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