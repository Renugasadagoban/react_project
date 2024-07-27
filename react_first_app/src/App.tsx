
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Support } from './pages/Support/Support';
import Card from './pages/Query/Query-Card';
import LoginForm from './pages/Login/Login-Form';
import Home from './pages/Home/Home';

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/support" element={<Support />} />
      <Route path='/query' element={<Card />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default App
