import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Admin from './components/Admin';
import Client from './components/Client';

const App = () => {
  return (
    <>
      <main>
        <Sidebar />
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/client" element={<Client />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
