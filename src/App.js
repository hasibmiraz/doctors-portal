import './App.css';
import Routers from './Pages/Routes/Routers';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routers />
      <ToastContainer />
    </div>
  );
}

export default App;
