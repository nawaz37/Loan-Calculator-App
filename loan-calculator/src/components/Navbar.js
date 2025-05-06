import React from 'react';

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: darkMode ? '#333' : '#eee' }}>
      <div>
        <button>Home</button>
        <button>Exchange Rates</button>
        <button>About</button>
        <button onClick={() => window.close()}>Exit</button>
      </div>
      <div>
        <label>
          Dark Mode
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
