import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import './Dashboard.css';

const Dashboard: React.FC = () => (
  <div className="dashboard">
    <Header />
    <Sidebar />
    <MainContent>
      <h2>Welcome to the Dashboard</h2>
      {/* Add more components and content here */}
    </MainContent>
  </div>
);

export default Dashboard;
