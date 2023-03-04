import Home from "./Components/Home";
import TopBar from "./Components/TopBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import CartPurcharse from "./Components/CartPurcharse";

function App() {
  const [cartItem, setCartItem] = useState([]);
  return (
    <BrowserRouter>
      <TopBar cartItem={cartItem} />
      <Routes>
        <Route path="/" element={<Home setCartItem={setCartItem} />} />
        <Route path="/cart" element={<CartPurcharse cartItem={cartItem} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
