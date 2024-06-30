import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPopUP } from './components/LoginPopup/LoginPopUP'
import { Footer } from './components/footer/Footer'
import { Navbar } from './components/navbar/Navbar'
import { Cart } from './pages/Cart/Cart'
import { Home } from './pages/Home/Home'
import Myorders from './pages/Myorders/Myorders'
import { PlaceOrder } from './pages/PlaceOrder/PlaceOrder'
import Verify from './pages/Verify/Verify'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <div className="app">
        {showLogin ? <LoginPopUP setShowLogin={setShowLogin} /> : <></>}
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/myorders'element={<Myorders/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
export default App