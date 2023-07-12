import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import HomePage from './pages/HomePage/HomePage'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'
import Checkout from './pages/Checkout/Checkout'

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={ <SignIn /> }/>
        <Route path='/register' element={ <SignUp /> }/>
        <Route path='home' element={ <HomePage /> }/>
        <Route path='cart' element={ <ShoppingCart /> }/>
        <Route path='checkout' element={ <Checkout /> }/>

      </Routes>
      
    </BrowserRouter>
  )
}

export default App