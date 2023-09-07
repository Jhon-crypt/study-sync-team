/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
*/
import Header from './components/header/header'
import HeaderHero from './components/hero/headerHero'
import HowItWorks from './components/section/howItWorks'
import StatsSection from './components/section/statsSection'
import Features from './components/section/featuresSection'
import CallToAction from './components/section/callToAction'
import Footer from './components/footer/footer'

function App() {


  return (
    <>

      <div style={{ backgroundColor: "#EDF1F8" }}>
        <div className="font-heading font-medium relative">

          <Header />

          <HeaderHero />

          <HowItWorks />

          <StatsSection />

          <Features />

        </div>
      </div>

      <CallToAction />

      <Footer />

    </>
  )
}

export default App
