import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', expenditure: 2 },
  { name: 'Feb', expenditure: 4 },
  { name: 'Mar', expenditure: 3 },
  { name: 'Apr', expenditure: 5 },
  { name: 'May', expenditure: 6 },
  { name: 'Jun', expenditure: 8 },
  { name: 'Jul', expenditure: 10 },
  { name: 'Aug', expenditure: 12 },
  { name: 'Sep', expenditure: 9 },
  { name: 'Oct', expenditure: 15 },
  { name: 'Nov', expenditure: 17 },
  { name: 'Dec', expenditure: 20 },
];

const ExpenditureAnalysisChart = () => {
  const [year, setYear] = useState(2024);
  const years = [2024, 2023, 2022];

  return (
    <div className="flex flex-col shadow-custom-light items-start bg-[#FFFFFF] max-w-[538px] w-full h-[336px] rounded-[8px] border-[1.06px] border-[#F8F9FA]">
      {/* Header with Dropdown */}
      <div className="flex items-center lg:gap-[200px] gap-[20px] md:gap-[150px] mb-4 pt-4">
        <h2 className="text-[20px] leading-[32px] tracking-[-2%]  font-bold mr-4 whitespace-nowrap pl-10 text-[#1B2559]">Expenditure Analysis</h2>
        <select
          className="outline-none text-[14px] leading-[24px] tracking-[-2%] font-bold text-[#7B91B0]"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        >
          {years.map((yr) => (
            <option key={yr} value={yr}>
              {yr}
            </option>
          ))}
        </select>
      </div>

      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis
            tickLine={false}
            axisLine={false}
            ticks={[0, 1, 5, 10, 15, 20]}
            tickFormatter={(value) => `${value}m`}
          />
          <Tooltip />
          <Bar dataKey="expenditure" fill="#3A3285" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenditureAnalysisChart;
