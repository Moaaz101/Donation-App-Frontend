import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import BrowserRouter and Routes
import DocRegister from './components/DocRegister';
import DonationPost from './components/DonationPost';
import DonorDetails from './components/DonorDetails';
import DonorHome from './components/DonorHome';
import DonorLogin from './components/DonorLogin';
import DonorRegister from './components/DonorRegister';
import FullfilledDonations from './components/FullfilledDonations';
import OrganizationHome from './components/OrganizationHome';
import OrganizationLogin from './components/OrganizationLogin';
import OrganizationRegister from './components/OrganizationRegister';
import PendingPosts from './components/PendingPosts';
import TeacherRegister from './components/TeacherRegister';
import Test from './components/Test';
import Vision from './components/Vision';
import Index from './components/index';
import OrganizationAcc from './components/OrganizationAcc';
import AdAccountManagement from './components/AdAccountManagement';
import AdDonorRequests from './components/AdDonorRequests';
import AdOrganizationRequests from './components/AdOrganizationRequests';
import AdRegisteredOrganizations from './components/AdRegisteredOrganizations';
import AdminHome from './components/AdminHome';
import AdminLogin from './components/AdminLogin';
import BloodDonation from './components/BloodDonation';
import Clothes from './components/Clothes';
import DonationCategory from './components/DonationCategory';import AccountManagement from './components/AccountManagement';
import DonorType from './components/DonorType';
import Food from './components/Food';
import MedicalSupplies from './components/MedicalSupplies';
import Notification from './components/Notification';
import ScheduleDelivery from './components/ScheduleDelivery';
import SchoolSupplies from './components/SchoolSupplies';
import Toys from './components/Toys';
import Transportation from './components/Transportation';



import RegisteredOrgs from './components/RegisteredOrgs';
import AdDonorAccountRequests from "./components/AdDonorAccountRequests"



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Index" element={<Index />} /> 
        <Route path="/DonorRegister" element={<DonorRegister />} />
        <Route path="/DocRegister" element={<DocRegister />} /> 
        <Route path="/TeacherRegister" element={<TeacherRegister />} /> 
        <Route path="/DonorType" element={<DonorType />} /> 
        <Route path="/DonorLogin" element={<DonorLogin />} /> 
        <Route path="/DonorHome" element={<DonorHome />} /> 
        <Route path="/Test" element={<Test />} /> 
        <Route path="/" element={<Vision />} /> 
        <Route path="/OrganizationLogin" element={<OrganizationLogin />} />
        <Route path="/OrganizationRegister" element={<OrganizationRegister />} />
        <Route path="/DonationPost" element={<DonationPost />} />
        <Route path="/FullfilledDonations" element={<FullfilledDonations />} />
        <Route path="/OrganizationHome" element={<OrganizationHome />} />
        <Route path="/DonorDetails" element={<DonorDetails />} />
        <Route path="/PendingPosts" element={<PendingPosts />} />
        <Route path="/ScheduleDelivery" element={<ScheduleDelivery />} />
        <Route path="/Transportation" element={<Transportation />} /> 
        <Route path="/Notification" element={<Notification />} /> 
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/AdminHome" element={<AdminHome />} /> 
        <Route path="/AdOrganizationRequests" element={<AdOrganizationRequests />}/>
        <Route path="/AdRegisteredOrganizations" element={<AdRegisteredOrganizations />}/>
        <Route path="/AdDonorRequests" element={<AdDonorRequests />}/>
        <Route path="/AdDonorAccountRequests" element={<AdDonorAccountRequests />}/>
        <Route path="/AdAccountManagement" element={<AdAccountManagement />}/>
        <Route path="/DonationCategory" element={<DonationCategory />}/>
        <Route path="/Toys" element={<Toys />}/>
        <Route path="/Clothes" element={<Clothes />}/>
        <Route path="/Food" element={<Food />}/>
        <Route path="/MedicalSupplies" element={<MedicalSupplies />}/>
        <Route path="/SchoolSupplies" element={<SchoolSupplies />}/>
        <Route path="/BloodDonation" element={<BloodDonation />}/>
        <Route path="/OrganizationAcc" element={<OrganizationAcc />}/>
        <Route path="/AccountManagement" element={<AccountManagement />}/>
        <Route path="/RegisteredOrgs" element={<RegisteredOrgs />}/>
      </Routes>    
    </Router>
  );
}

export default App;