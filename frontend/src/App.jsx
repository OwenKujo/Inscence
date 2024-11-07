import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './page/Home';

// Create the router with future flags enabled
function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,      // Enable startTransition for state updates
        v7_relativeSplatPath: true,     // Enable the new relative splat path resolution
      }}
    >
      <div className='min-h-screen flex'>
      <Navbar />

        <main className='flex-1 mt-[60px]'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
