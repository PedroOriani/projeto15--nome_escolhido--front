import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import HomePage from './pages/HomePage/HomePage'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'
import Checkout from './pages/Checkout/Checkout'
import { useState } from "react"
import PathContext from "./context/PathContext.jsx"
import AdminPage from './pages/HomePage/AdminPage'

function App() {

  const [path, setPath] = useState('');

  return (
    <PathContext.Provider value={{ path, setPath }}>

      <BrowserRouter>

        <Routes>

          <Route path='/log-in' element={<SignIn />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='cart' element={<ShoppingCart />} />
          <Route path='checkout' element={<Checkout />} />

        </Routes>

      </BrowserRouter>

    </PathContext.Provider>
  )
}

export default App