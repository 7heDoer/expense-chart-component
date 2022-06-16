import { useState } from 'react'
import "./styles/App.css"
import Header from './components/Header'
import BalDetails from './components/BalDetails'

function App() {

  return (
    <div className="App">
      <div className="container">
        <Header />
        <BalDetails />
      </div>
      <div aria-hidden class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="">7heDoer</a>.
    </div>
    </div>
  )
}

export default App
