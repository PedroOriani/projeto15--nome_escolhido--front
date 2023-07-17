import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import HomePage from "./pages/HomePage/HomePage";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Checkout from "./pages/Checkout/Checkout";
import { useState } from "react";
import PathContext from "./context/PathContext.js";
import AdminPage from "./pages/HomePage/AdminPage";
import { UserLogged } from "./context/UserLogged";

function App() {
  const [path, setPath] = useState("home");
  const [logged, setLogged] = useState(false);
  const [products, setProducts] = useState([]);

  return (
    <PathContext.Provider value={{ path, setPath }}>
      <BrowserRouter>
        <UserLogged.Provider value={{ logged, setLogged }}>
          <Routes>
            <Route path="/log-in" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/" element={<HomePage products={products} setProducts={setProducts}/>} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="cart" element={<ShoppingCart />} />
            <Route path="checkout" element={<Checkout />} />
          </Routes>
        </UserLogged.Provider>
      </BrowserRouter>
    </PathContext.Provider>
  );
}

export default App;
