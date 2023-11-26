
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './Components/User/Login';
import ForgotPassword from './Components/User/ForgotPassword';
import Register from './Components/User/Register';
// import Sidebar from './Components/navbar/Sidebar';
import Dashboard from './Components/Navbar/Components/Dashboard';
import Frontpage from './Components/FrontPage/Frontpage';
import Admin from './Components/Navbar/Components/Admin';
import Listing from './Components/Navbar/Components/Listing';
import Order from './Components/Navbar/Components/Order';
import Settings from './Components/Navbar/Components/Settings';
import Community from './Components/Navbar/Components/Links/Community';
import Tutorial from './Components/Navbar/Components/Links/Tutorial';

function App() {
  return (
    <div className='conatianer-fluid'>
    <BrowserRouter>
   
   <Routes>
    
    <Route path='/' element={<Frontpage />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/admin' element={<Admin />} />
    <Route path='/listing' element={<Listing />} />
    <Route path='/order' element={<Order />} />
    <Route path='/settings' element={<Settings />} />
    <Route path='/community' element={<Community />} />
    <Route path='/tutorial' element={<Tutorial />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/forgot-password' element={<ForgotPassword />} />
   </Routes>

    
</BrowserRouter>
  </div>

  );
}

export default App;
