
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import Home from './pages/Home';
import Umpcomingex from './pages/Umpcomingex';

function App() {
  
  return (
    
    <Routes>
      <Route path='/counter' element={<Counter />} />
      <Route path='/' element={<Home/>} />
      <Route path='/ex' element={<Umpcomingex/>} />
    </Routes>
  )
}

export default App;
