import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Otp from './pages/Otp';
import { Routes,Route } from 'react-router-dom';
import Password from './pages/Password';
import Otpsuccess from './pages/Otpsuccess';
import Home from './pages/Home';
import CreateMail from './pages/CreateMail';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/otp' element={<Otp/>}></Route>
        <Route path='/password' element={<Password/>}></Route>
        <Route path='/otpsuccess' element={<Otpsuccess/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/createmail' element={<CreateMail/>}></Route>
      </Routes>
  
      {/* <Otp/> */}
    </div>
  );
}

export default App;
