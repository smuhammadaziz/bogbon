import './App.css';

import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/home/home';

// Components
import SelectRole from './components/selectrole/selectrole';
import RegisterAsBogbon from './components/registerAsBogbon/register';
import RegiterAsNihol from './components/registerAsNihol/register';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SelectRole />} />
        <Route path='/signup/as/investor' element={<RegisterAsBogbon />} />
        <Route path='/signup/registration' element={<RegiterAsNihol />} />
      </Routes>
    </div>
  );
}

export default App;
