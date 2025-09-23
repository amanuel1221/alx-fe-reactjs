import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Search from "./components/Search";

function App() {
  return (
    <div>
      <h1>GitHub User Search App</h1>
      <Search />
    </div>
  );
}

export default App;
