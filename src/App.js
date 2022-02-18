import { ItemListContainer } from "./components/container/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContext } from "./context/CartContext";
import { useState } from "react";


function App() {
  const [cart, setCart] = useState([])
  const agregarAlCarrito=(item)=>{
    setCart([...cart,item])
  }
  return (
    <CartContext.Provider value={{cart, agregarAlCarrito}}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:catId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>

  );
}

export default App;
