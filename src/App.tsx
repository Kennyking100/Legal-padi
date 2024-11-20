import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CasesPage from './pages/CasesPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Sidebar />
      
      <div className="lg:pl-64">
        <main>
          <CasesPage />
        </main>
      </div>
    </div>
  );
}

export default App;