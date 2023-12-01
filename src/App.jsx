
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './Components/User/Login';
import ForgotPassword from './Components/User/ForgotPassword';
import Register from './Components/User/Register';
import Dashboard from './core/Dashboard';
import Frontpage from './Components/LandingPage/Frontpage';
import Admin from './core/Admin';
import Listing from './core/Listing';
import Order from './core/Order';
import Settings from './core/Settings';

import Community from './core/Community'
import Tutorial from './core/Tutorial';


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
