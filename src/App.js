import {ItemListContainer} from "./components/container/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'
import {Route, BrowserRouter, Routes, Navigate} from 'react-router-dom'
import{Contacto} from './components/Contacto'


function App() {
  return (<BrowserRouter>
      
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/productos/:catId" element={<ItemListContainer />}/>
        <Route path="*" element={<Navigate to = '/'/>}/>        
      </Routes>
      
      </BrowserRouter>
    
  );
}

export default App;
