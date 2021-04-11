import React from 'react';
import './App.css';
import TablePage from '../pages/TablePage';
const App = ():JSX.Element => {
  return (
    <main className='home_container'>
      <h1>Welcome</h1>
      <TablePage />
    </main>
  );
}

export default App;
