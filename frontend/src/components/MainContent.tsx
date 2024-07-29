import React from 'react';
import './MainContent.css';

const MainContent: React.FC = ({ children }) => (
  <main className="main-content">
    {children}
  </main>
);

export default MainContent;
