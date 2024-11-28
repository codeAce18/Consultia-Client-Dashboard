import React, { useState } from 'react';
import Image from 'next/image';
import Export from "../../../public/assets/Export.svg"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  IconButton,
} from '@mui/material';
import { MoreVert } from '@mui/icons-material';

const DUMMY_DATA = [
  {
    id: 1,
    receiver: {
      image: "/assets/ConsultantCompanyLogo1.svg",
      name: "Dora Consulting Ltd.",
      location: "Lagos, Nigeria"
    },
    date: "June 20, 2024 (17:12 UTC)",
    amount: "500,000",
    method: "Bank Transfer",
    status: "successful"
  },
  {
    id: 2,
    receiver: {
      image: "/assets/ConsultantCompanyLogo1.svg",
      name: "Dora Consulting Ltd.",
      location: "Lagos, Nigeria"
    },
    date: "June 19, 2024 (15:30 UTC)",
    amount: "250,000",
    method: "Bank Transfer",
    status: "pending"
  },
  {
    id: 3,
    receiver: {
      image: "/assets/ConsultantCompanyLogo1.svg",
      name: "Dora Consulting Ltd.",
      location: "Lagos, Nigeria"
    },
    date: "June 18, 2024 (12:45 UTC)",
    amount: "750,000",
    method: "Bank Transfer",
    status: "failed"
  },
  {
    id: 4,
    receiver: {
      image: "/assets/ConsultantCompanyLogo1.svg",
      name: "Dora Consulting Ltd.",
      location: "Lagos, Nigeria"
    },
    date: "June 20, 2024 (17:12 UTC)",
    amount: "500,000",
    method: "Bank Transfer",
    status: "successful"
  },
  {
    id: 5,
    receiver: {
      image: "/assets/ConsultantCompanyLogo1.svg",
      name: "Dora Consulting Ltd.",
      location: "Lagos, Nigeria"
    },
    date: "June 19, 2024 (15:30 UTC)",
    amount: "250,000",
    method: "Bank Transfer",
    status: "pending"
  },

  {
    id: 6,
    receiver: {
      image: "/assets/ConsultantCompanyLogo1.svg",
      name: "Dora Consulting Ltd.",
      location: "Lagos, Nigeria"
    },
    date: "June 18, 2024 (12:45 UTC)",
    amount: "750,000",
    method: "Bank Transfer",
    status: "failed"
  },

  {
    id: 7,
    receiver: {
      image: "/assets/ConsultantCompanyLogo1.svg",
      name: "Dora Consulting Ltd.",
      location: "Lagos, Nigeria"
    },
    date: "June 20, 2024 (17:12 UTC)",
    amount: "500,000",
    method: "Bank Transfer",
    status: "successful"
  },
  {
    id: 8,
    receiver: {
      image: "/assets/ConsultantCompanyLogo1.svg",
      name: "Dora Consulting Ltd.",
      location: "Lagos, Nigeria"
    },
    date: "June 19, 2024 (15:30 UTC)",
    amount: "250,000",
    method: "Bank Transfer",
    status: "pending"
  },
  {
    id: 9,
    receiver: {
      image: "/assets/ConsultantCompanyLogo1.svg",
      name: "Dora Consulting Ltd.",
      location: "Lagos, Nigeria"
    },
    date: "June 18, 2024 (12:45 UTC)",
    amount: "750,000",
    method: "Bank Transfer",
    status: "failed"
  },

  {
    id: 10,
    receiver: {
      image: "/assets/ConsultantCompanyLogo1.svg",
      name: "Dora Consulting Ltd.",
      location: "Lagos, Nigeria"
    },
    date: "June 20, 2024 (17:12 UTC)",
    amount: "500,000",
    method: "Bank Transfer",
    status: "successful"
  },
  {
    id: 11,
    receiver: {
      image: "/assets/ConsultantCompanyLogo1.svg",
      name: "Dora Consulting Ltd.",
      location: "Lagos, Nigeria"
    },
    date: "June 19, 2024 (15:30 UTC)",
    amount: "250,000",
    method: "Bank Transfer",
    status: "pending"
  },
  {
    id: 12,
    receiver: {
      image: "/assets/ConsultantCompanyLogo1.svg",
      name: "Dora Consulting Ltd.",
      location: "Lagos, Nigeria"
    },
    date: "June 18, 2024 (12:45 UTC)",
    amount: "750,000",
    method: "Bank Transfer",
    status: "failed"
  },

  {
    id: 13,
    receiver: {
      image: "/assets/ConsultantCompanyLogo1.svg",
      name: "Dora Consulting Ltd.",
      location: "Lagos, Nigeria"
    },
    date: "June 20, 2024 (17:12 UTC)",
    amount: "500,000",
    method: "Bank Transfer",
    status: "successful"
  },
  {
    id: 14,
    receiver: {
      image: "/assets/ConsultantCompanyLogo1.svg",
      name: "Dora Consulting Ltd.",
      location: "Lagos, Nigeria"
    },
    date: "June 19, 2024 (15:30 UTC)",
    amount: "250,000",
    method: "Bank Transfer",
    status: "pending"
  },
  {
    id: 15,
    receiver: {
      image: "/assets/ConsultantCompanyLogo1.svg",
      name: "Dora Consulting Ltd.",
      location: "Lagos, Nigeria"
    },
    date: "June 18, 2024 (12:45 UTC)",
    amount: "750,000",
    method: "Bank Transfer",
    status: "failed"
  },

  {
    id: 16,
    receiver: {
      image: "/assets/ConsultantCompanyLogo1.svg",
      name: "Dora Consulting Ltd.",
      location: "Lagos, Nigeria"
    },
    date: "June 20, 2024 (17:12 UTC)",
    amount: "500,000",
    method: "Bank Transfer",
    status: "successful"
  },
  {
    id: 17,
    receiver: {
      image: "/assets/ConsultantCompanyLogo1.svg",
      name: "Dora Consulting Ltd.",
      location: "Lagos, Nigeria"
    },
    date: "June 19, 2024 (15:30 UTC)",
    amount: "250,000",
    method: "Bank Transfer",
    status: "pending"
  },
  {
    id: 18,
    receiver: {
      image: "/assets/ConsultantCompanyLogo1.svg",
      name: "Dora Consulting Ltd.",
      location: "Lagos, Nigeria"
    },
    date: "June 18, 2024 (12:45 UTC)",
    amount: "750,000",
    method: "Bank Transfer",
    status: "failed"
  },

  {
    id: 19,
    receiver: {
      image: "/assets/ConsultantCompanyLogo1.svg",
      name: "Dora Consulting Ltd.",
      location: "Lagos, Nigeria"
    },
    date: "June 20, 2024 (17:12 UTC)",
    amount: "500,000",
    method: "Bank Transfer",
    status: "successful"
  },
  {
    id: 20,
    receiver: {
      image: "/assets/ConsultantCompanyLogo1.svg",
      name: "Dora Consulting Ltd.",
      location: "Lagos, Nigeria"
    },
    date: "June 19, 2024 (15:30 UTC)",
    amount: "250,000",
    method: "Bank Transfer",
    status: "pending"
  },
  {
    id: 21,
    receiver: {
      image: "/assets/ConsultantCompanyLogo1.svg",
      name: "Dora Consulting Ltd.",
      location: "Lagos, Nigeria"
    },
    date: "June 18, 2024 (12:45 UTC)",
    amount: "750,000",
    method: "Bank Transfer",
    status: "failed"
  },
];

const PaymentHistoryTable = () => {
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleFilterChange = (newFilter: React.SetStateAction<string>) => {
    setFilter(newFilter);
    setPage(0);
  };

  const filteredData = DUMMY_DATA.filter(item => {
    if (filter === 'all') return true;
    return item.status === filter;
  });

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null, 
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: { target: { value: string; }; }) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'successful':
        return 'bg-[#D2F6D2] text-[#008000]';
      case 'pending':
        return 'bg-[#FAD9C2] text-[#F87B24]';
      case 'failed':
        return 'bg-[#F5BFC1] text-[#DD2025]';
      default:
        return '';
    }
  };

  return (
    <div className="w-full">
      <div className="pt-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            {['all', 'successful', 'pending', 'failed'].map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => handleFilterChange(filterOption)}
                className={`px-4 py-2  ${
                  filter === filterOption
                    ? 'border-b-[#5B52B6] pb-[5px] border-b-[4px] font-semibold'
                    : 'text-[16px] font-normal text-[#41404B] cursor-pointer'
                }`}
              >
                {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
              </button>
            ))}
          </div>

          <button className="flex items-center w-[121px] gap-[10px] bg-[#5B52B6] border-[0.6px] border-[#5B52B6] rounded-[4px] p-[10px]">
            <Image width={20} height={20} src={Export} alt="Export" />
            <span className="text-white text-[14px] leading-[20px] font-normal">
              Export CSV
            </span>
          </button>
        </div>

        <TableContainer component={Paper} className="shadow-lg">
          <Table sx={{ minWidth: 650 }} aria-label="payment history table">
            <TableHead>
              <TableRow className="bg-[#FFFFFF]">
                <TableCell><h1 className="text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold">Receiver</h1></TableCell>
                <TableCell><h1 className="text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold">Date</h1></TableCell>
                <TableCell><h1 className="text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold">Amount</h1></TableCell>
                <TableCell><h1 className="text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold">Method</h1></TableCell>
                <TableCell><h1 className="text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold">Status</h1></TableCell>
                <TableCell><h1 className="text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold">Action</h1></TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="bg-[#F9FAFE]">
              {filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Image
                          src={row.receiver.image}
                          alt={row.receiver.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <div className="font-semibold text-[#101828] text-[14px] leading-[21px]">{row.receiver.name}</div>
                          <div className="text-[#A3A2AB] text-[11px] leading-[16.5px] font-normal">
                            {row.receiver.location}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell><div className="text-[#101828] text-[14px] leading-[21px]">{row.date}</div></TableCell>
                    <TableCell><div className="text-[#101828] text-[14px] leading-[21px] font-normal">₦{row.amount}</div></TableCell>
                    <TableCell><div className="text-[#101828] text-[14px] leading-[21px]">{row.method}</div></TableCell>
                    <TableCell>
                      <span
                        className={`p-[10px] flex items-center justify-center rounded-full text-[14px] leading-[21px] ${getStatusColor(
                          row.status
                        )}`}
                      >
                        {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell>
                      <IconButton size="small">
                        <MoreVert />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            className="bg-[#F9FAFE]"
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </div>
    </div>
  ); 
};

export default PaymentHistoryTable;