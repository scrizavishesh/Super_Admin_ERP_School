import React from 'react';
import styled from 'styled-components'
// import Login from '../Pages/Login';
import DashboardPage from '../Pages/AdminDashboard';
import AllSchoolsPage from '../Pages/AllSchool';
import AddSchoolsPage from '../Pages/AddNewSchool';
import AddonsPage from '../Pages/Addons';
import AllPackagesPage from '../Pages/AllPackages';
import { Route, Routes } from 'react-router-dom';
import Subscription from '../Pages/Subscription';
import Request from '../Pages/Request';
import SystemSetting from '../Pages/SystemSetting';
import WebsiteSetting from '../Pages/WebsiteSetting';
import ManageFaq1 from '../Pages/ManageFaq1';
import PaymentSetting from '../Pages/PaymentSetting';

const Container = styled.div`
  background-color: #F2F3F6;
`;
const Main = () => {
  
  return (
    <>
      <Container>

        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/allSchoolsPage" element={<AllSchoolsPage />} />
          <Route path="/addSchoolsPage" element={<AddSchoolsPage />} />
          <Route path="/addons" element={<AddonsPage />} />
          <Route path="/allPackagesPage" element={<AllPackagesPage />} />
          <Route path="/subscriptionPage" element={<Subscription />} />
          <Route path="/requestPage" element={<Request/>} />
          <Route path="/systemSettingPage" element={<SystemSetting/>} />
          <Route path="/websiteSettingPage" element={<WebsiteSetting/>} />
          <Route path="/manageFaqPage" element={<ManageFaq1/>} />
          <Route path="/paymentSettingPage" element={<PaymentSetting/>} />
        </Routes>
      </Container>
    </>
  );
};

export default Main;






        {/* <div>
          <RouterProvider router={router} />
        </div> */}
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login/>,
//   },
//   {
//     path: "/dashboard",
//     element: <DashboardPage/>,
//   },
//   {
//     path: "/allSchoolsPage",
//     element: <AllSchoolsPage/>,
//   },
//   {
//     path: "/addSchoolsPage",
//     element: <AddSchoolsPage/>,
//   },
//   {
//     path: "/addons",
//     element: <AddonsPage/>,
//   },
//   {
//     path: "/allPackagesPage",
//     element: <AllPackagesPage/>,
//   },
// ]);

// import React, { useEffect } from 'react';
// import styled from 'styled-components'
// import DashboardPage from '../AdminDashboard';
// import AllSchoolsPage from '../AllSchool';
// import AddSchoolsPage from '../AddNewSchool';
// import AddonsPage from '../Addons';
// import AllPackagesPage from '../AllPackages';

// const Container = styled.div`
//   background-color: #F2F3F6;
// `;

// const Main = ({ activeLink }) => {

//   const pages = {
//     dashboard: <DashboardPage />,
//     schools: <AllSchoolsPage />,
//     addSchools: <AddSchoolsPage />,
//     addons: <AddonsPage />,
//     // subscription: <AddSchoolsPage />,
//     packages: <AllPackagesPage />,
//     // request: <AddSchoolsPage />,
//   };

//   const pageComponent = pages[activeLink] || <div>Page not found</div>;

//   useEffect(() => {
//     console.log('activeLink changed:', activeLink);
//   }, [activeLink]);

//   return (
//     <>
//       <Container>{pageComponent}</Container>
//     </>
//   );
// };

// export default Main;
