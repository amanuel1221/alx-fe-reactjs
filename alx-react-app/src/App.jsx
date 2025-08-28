import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage.jsx'
import Header from './components/Header.jsx';

import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import Userprofile from './components/UserProfile.jsx'; 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Userprofile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />

    </>
  )
}

export default App
