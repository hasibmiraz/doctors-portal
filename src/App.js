import { Toaster } from 'react-hot-toast';
import './App.css';
import Routers from './Pages/Routes/Routers';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routers />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
