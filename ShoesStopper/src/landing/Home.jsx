import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import CategorySection from '../components/CategorySection'
import NewsletterSection from '../components/NewsletterSection'
import Footer from '../layouts/Footer'
import HeroSlider from '../pages/HeroSlider'

const Home = () => {
  return (
<>


<HeroSlider />
<FeaturedProducts />
<CategorySection />
<NewsletterSection />
<Footer />
</>
  )
}

export default Home