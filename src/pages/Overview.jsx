import React from 'react';
import OverviewCard from '../components/OverviewCard';
import DisbursedLoansChart from '../components/DisbursedLoansChart';
import ActiveUsers from '../components/ActiveUsers';
import RecentActivities from '../components/RecentActivities';
import LoanIcon1 from '../assets/LoanIcon1.svg';
import LoanIcon2 from '../assets/LoanIcon2.svg';
import LoanIcon3 from '../assets/LoanIcon3.svg';
import LoanIcon4 from '../assets/LoanIcon4.svg';


const Overview = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Overview</h2>
      <div className="grid grid-cols-5 gap-4 mb-6">
        <OverviewCard title="Disbursed Loans" amount="N10,001,168" unit="1,000" bgColor="bg-blue-100" icon={LoanIcon1}/>
        <OverviewCard title="Closed Loans" amount="N5,028,480" unit="520" bgColor="bg-green-100" icon={LoanIcon2}/>
        <OverviewCard title="Overdue Loans" amount="N1,520,790" unit="152" bgColor="bg-pink-100" icon={LoanIcon3}/>
        <OverviewCard title="Running Loans (Paid)" amount="N2,668,726" unit="366" bgColor="bg-yellow-50" icon={LoanIcon4}/>
        <OverviewCard title="Running Loans (Unpaid)" amount="N918,204" unit="198" bgColor="bg-yellow-50" icon={LoanIcon4}/>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <DisbursedLoansChart />
        </div>
        <ActiveUsers />
      </div>
      <div className="mt-6">
        <RecentActivities />
      </div>
    </div>
  );
};

export default Overview;