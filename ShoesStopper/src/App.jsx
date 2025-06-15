import { Routes, Route } from 'react-router-dom'
import Home from './landing/Home'
import MenShoesPage from './pages/Men'
import WomenShoesPage from './pages/Womens'
import SaleSection from './pages/Sale'
import CollectionPage from './pages/Collection'
import Navbar from './layouts/Navbar'




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
   </Routes>
    </>
  )
}

export default App
