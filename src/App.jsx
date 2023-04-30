import React from 'react';
import Sidebar from './components/Sidebar'
import Admin from './components/Admin'

const App = () => {
  return (
    <>
      <main>
        <Sidebar />
        <Admin />
      </main>
    </>
  );
};

export default App;