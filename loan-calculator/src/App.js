import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LoanCalculator from './pages/LoanCalculator';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <LoanCalculator />
    </div>
  );
}

export default App;
