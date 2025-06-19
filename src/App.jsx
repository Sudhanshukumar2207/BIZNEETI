import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationMenu from './compo/navbar'
import Slider from './compo/corosal'
import Aboutus from './compo/aboutus'
import Contact from './compo/contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    < >
    <div className='overflow-hidden h-auto absolute left-0 top-0 right-0'>

    <NavigationMenu /><br />
    <Slider />
    <Aboutus />
    <Contact />
    </div>
    </>
  )
}

export default App
