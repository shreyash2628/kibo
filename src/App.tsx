import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage  from './Components/LoginPage';
import TopNavBar from './Components/TopNavBar';
import HomePage from './Screens/HomePage';
import EmployeeList from './Screens/EmployeeList';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <BrowserRouter>

          {/* <LoginPage/> */}
          {/* <HomePage/> */}
          {/* <EmployeeList/> */}
          <TopNavBar/>


    <Routes>
         
      <Route  path="/" element={<HomePage/>} />

      {/* // <Route exact path="/login" element={<FormUser/>} /> */}
      



        <Route path="/employeeList" element={<EmployeeList  />} />
       

      {/* </Route> */}

     

    </Routes>
   


  </BrowserRouter>













    </div>
  );
}

export default App;
