import React, { useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import DropdownIcon from '../assets/dropdown.svg';
import DownloadIcon from '../assets/Arrow Download.svg';
import ShareIcon from '../assets/Share Android.svg';
import '../styles/slider.css';

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend );

const DisbursedLoansChart = () => {
  const chartRef = useRef(null);
  const [selectedPoint, setSelectedPoint] = useState(null);

  const data = {
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [400000, 200000, 600000, 500000, 400000, 300000, 350000, 500000, 600000],
        borderColor: '#2563EB',
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#2563EB',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: (ctx) => (selectedPoint === ctx.dataIndex ? 5 : 0),
        pointHoverRadius: 7,
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 600000,
        ticks: {
          stepSize: 200000,
          callback: (value) => `${value.toLocaleString()}`,
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.03)',
        },
      },
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        setSelectedPoint(index === selectedPoint ? null : index);
      } else {
        setSelectedPoint(null);
      }
    },
  };

  const getPopupPosition = (index) => {
    const chart = chartRef.current;
    if (!chart) return { top: 0, left: 0 };
    const chartArea = chart.chartArea;
    const x = chart.scales.x.getPixelForValue(index);
    const y = chart.scales.y.getPixelForValue(data.datasets[0].data[index]);
    return {
      top: y + chartArea.top - 30,
      left: x + chartArea.left + 20,
    };
  };

  return (
    <div className="p-2 bg-white rounded-lg font-axiforma text-sm">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              Disbursed Loans
              <img src={DropdownIcon} alt="Dropdown Icon" className="ml-2 w-4 h-4" />
            </h3>
          </div>
          <span className="text-gray-600 text-sm font-medium mt-2 block">
              Total: ₦8,063,000
          </span>
        </div>

        {/* Right: Dropdown + Icons */}
        <div className="flex items-center space-x-3">
        {/* Year Dropdown */}
          <select className="bg-white border border-gray-300 text-gray-600 rounded-md p-1 text-sm focus:outline-none">
            <option>2022</option>
            <option>2023</option>
          </select>

        {/* Share Icon Image */}
        <div className="bg-gray-100 p-2 rounded-xl hover:bg-gray-200 cursor-pointer">
          <img src={ShareIcon} alt="Share" className="w-5 h-5" />
        </div>

        {/* Download Icon Image */}
        <div className="bg-gray-100 p-2 rounded-xl hover:bg-gray-200 cursor-pointer">
          <img src={DownloadIcon} alt="Download" className="w-5 h-5" />
        </div>
      </div>
      </div>


      {/* Chart */}
      <div className="relative h-72">
        <Line ref={chartRef} data={data} options={options} />
        {selectedPoint !== null && (
          <div
            className="absolute bg-blue-900 text-white text-xs px-3 py-1.5 rounded shadow-lg z-10"
            style={{
              top: `${getPopupPosition(selectedPoint).top}px`,
              left: `${getPopupPosition(selectedPoint).left}px`,
              whiteSpace: 'nowrap',
            }}
          >
            ₦{data.datasets[0].data[selectedPoint].toLocaleString()}
            <div className="text-[10px] font-light">{data.labels[selectedPoint]} 2022</div>
            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-blue-900 border-t-8 border-t-transparent border-b-8 border-b-transparent"></div>
          </div>
        )}
      </div>

      {/* Slider */}
      <div className="mt-4 bg-gray-100 px-4 py-2 rounded-lg flex items-center gap-6 text-xs text-gray-600">
        <span className='mr-6'>Apr - Dec</span>
        <div className="h-4 w-px bg-gray-300">
          <div className='w-80' >
            <input type="range" min="1" max="12" defaultValue="9" className="custom-slider w-full"
              style={{
                background: 'linear-gradient(to right, #2563EB 0%, #2563EB 75%, #E5E7EB 75%)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisbursedLoansChart;
