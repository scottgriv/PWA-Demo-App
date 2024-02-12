import React from 'react';
import UsersTable from './components/UserTable'; // Make sure the path is correct

function App() {
  
  const useCsv = true; // Set to true if you want to use the .csv file or true for postgressql [default=true]
  
  return (
    <div className="App">
      <div className="App-header">
        <div className="logo-title">
          <a href="https://en.wikipedia.org/wiki/Progressive_web_app" target="_blank" rel="noreferrer">
            <img src={`${process.env.PUBLIC_URL}/icons/logo512.png`} alt="Logo" className="App-logo" />
          </a>
          <h1>Welcome to the PWA Demo</h1>
        </div>
        <p>This is a demo PWA using React, TypeScript, Node.js, Postgresql, and Scss/Sass/Less.<br /><a href="https://github.com/scottgriv/pwa-demo_app" target="_blank" rel="noreferrer">Visit the repository on GitHub</a> for more information on how to build your own PWA website.</p>
      </div>
      <div className="UsersTable">
        <UsersTable useCsv={useCsv} /> {}
      </div>
    </div>
  );
}

export default App;

