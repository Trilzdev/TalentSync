import React from 'react'
import NavBar from './components/NavBar'
import Section1 from './containter/Section1'
import pattern from './assets/pattern.png'
import ImagePattern from './containter/ImagePattern'
import SponsorsSection from './containter/SponsorsSection'
import WhyChoose from './containter/WhyChoose'
import ShopifyReview from './containter/ShopifyReview'
import Faq from './containter/Faq'
import Ready from './containter/Ready'
import FooterComponent from './containter/FooterComponent'
const App = () => {
  return (
      <div className='relative'>
        <ImagePattern/>
        <NavBar />
        <Section1 />
        <SponsorsSection/>
        <WhyChoose/>
        <ShopifyReview/>
        <Faq/>
        <Ready/>
        <FooterComponent/>
      </div>
  )
}

export default App