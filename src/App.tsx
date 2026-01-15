// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// import { CartProvider } from "./context/CartContext";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

function App() {
  return (
    // TODO: 
    // 1. Envolver con CartProvider
    // 2. Configurar BrowserRouter y Routes
    // 3. Añadir Navbar



    
    <div>
      <BrowserRouter>
        <CartProvider>
          <Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>

          </Routes>
          </Navbar>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;