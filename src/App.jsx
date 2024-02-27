import React from 'react';
import MainLayout from './Dashboard/MainLayout';
// import Login from './Pages/Login';
import { RouterProvider, BrowserRouter } from 'react-router-dom';

function App() {
  // const token = localStorage.getItem('token');
  
  return (
    <>
      <BrowserRouter>
        <MainLayout/>
      </BrowserRouter>
    </>
  );
}

export default App;








// // import React from 'react';
// // import MainLayout from './MainLayout/MainLayout';
// // import Login from './Pages/Login';
// // import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// // function App() {
// //   const token = localStorage.getItem('token');
  
// //   return (
// //     <>
// //       <MainLayout/>
// //     </>
// //   );
// // }

// // export default App;




// import React from 'react';
// import MainLayout from './MainLayout/MainLayout';
// import Login from './Pages/Login';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import ForgotPassword from './Pages/ForgotPassword';
// import SetNewPass from './Pages/SetNewPass';
// import ForgetSuccess from './Pages/ForgetSuccess';

// function App() {

//   // const router = createBrowserRouter([
//   //   {
//   //     path: "/",
//   //     element: <Login/>,
//   //   },
//   // ])

//   const token = localStorage.getItem('token');
  
//   return (
//     <>
//       <MainLayout/>
//       {/* <div>
//         <RouterProvider router={router} />
//       </div>
//       {!token ? <Login/> : <MainLayout/>} */}
//     </>
//   );
// }

// export default App;
