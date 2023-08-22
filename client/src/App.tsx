import React from 'react';
import UsersTable from './components/UserTable'; // Make sure the path is correct

function App() {
  
  const useCsv = true; // Set to true if you want to use the .csv file or true for postgressql [default=true]
  
  return (
    <div className="App">
      <div className="App-header">
        <h1>Welcome to the PWA Demo</h1>
        <p>This is a demo PWA using React, TypeScript, Node.js, Postgresql, and SCSS/SASS/LESS.</p>
      </div>
      <div className="UsersTable">
        <UsersTable useCsv={useCsv} /> {}
      </div>
    </div>
  );
}

export default App;

