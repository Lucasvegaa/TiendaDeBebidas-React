import { ItemListContainer } from "./components/container/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";

function App() {

  return (
    <CartProvider >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:catId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
