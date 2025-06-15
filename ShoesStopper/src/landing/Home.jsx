import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import CategorySection from '../components/CategorySection'
import NewsLetterSection from '../components/NewsLetterSection'
import Footer from '../layouts/Footer'
import HeroSlider from '../pages/HeroSlider'

const Home = () => {
  return (
<>


<HeroSlider />
<FeaturedProducts />
<CategorySection />
<NewsLetterSection />
<Footer />
</>
  )
}

export default Home