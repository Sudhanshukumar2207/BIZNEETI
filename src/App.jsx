import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationMenu from './compo/navbar'
import Slider from './compo/corosal'
import Aboutus from './compo/aboutus'
import Contact from './compo/contact'
import Footer from './compo/footer'
import Team from './compo/team'
import Clients from './compo/client'
import Services from './compo/service'
import { Toaster } from 'react-hot-toast'
function App() {

  return (
    < >
    <div className='overflow-hidden h-auto absolute left-0 top-0 right-0 scroll-smooth'>
    <Toaster position="top-right" reverseOrder={false} />
    <NavigationMenu />
    <Slider />
    <Aboutus />
    <Services />
    <Clients />
    <Team />
    <Contact />
    <Footer />

    </div>
    </>
  )
}

export default App
