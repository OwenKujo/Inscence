// App.jsx
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className=' flex'>
      <Navbar />
      <main className='flex-1 mt-[60px] p-4'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;