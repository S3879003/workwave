import './App.css';
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import React, { useState } from 'react';
import CustomNavbar from './components/navigation/navbar';
import SecondaryNavbar from './components/navigation/SecondaryNavbar';
import LoginPage from './components/login and Signup/login';
import SignUpPage from './components/login and Signup/signup';
import JobBoard from './components/JobSearch/JobBoard';
import Dashboard from './components/DashboardHome/Dashboard';
import ActiveProjectList from './components/DashboardActiveProjectsList/ActiveProjectList/ActiveProjectList';


setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.18.0/cdn/');

function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        {/* {isLogin ? (
          <LoginPage onSwap={() => setIsLogin(false)}/>
        ) : (
          <SignUpPage onSwap={() => setIsLogin(true)}/>
        )} */}
        <CustomNavbar />
        <SecondaryNavbar />
        {/* <JobBoard /> */}
        {/* <Dashboard /> */}
        <ActiveProjectList />
      </header>
    </div>
    
  );
}

export default App;
