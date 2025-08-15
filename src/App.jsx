import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import MainBody from './Components/MainBody'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <MainBody />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
