import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Topbar from './components/Topbar';
import Bottombar from './components/Bottombar';
import Home from './pages/Home';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/topbar' element={<Topbar/>}/>
      <Route path='bottombar' element={<Bottombar/>}/>
      <Route path='/' element={<Home/>}/>
      
    </Routes>
    </BrowserRouter>
    
    
  )
}

export default App;
