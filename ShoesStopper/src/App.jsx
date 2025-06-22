import { Routes, Route } from 'react-router-dom'
import Home from './landing/Home'
import MenShoesPage from './pages/Men'
import WomenShoesPage from './pages/Womens'
import SaleSection from './pages/Sale'
import CollectionPage from './pages/Collection'
import Navbar from './layouts/Navbar'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AiStylistPage from './pages/AiStylistPage'





const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/men" element={<MenShoesPage />} />
      <Route path="/womens" element={<WomenShoesPage />} />
      <Route path="/Collection" element={<CollectionPage />} />
      <Route path="/sale" element={<SaleSection />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/ai-stylist" element={<AiStylistPage />} />

   </Routes>
    </>
  )
}

export default App
