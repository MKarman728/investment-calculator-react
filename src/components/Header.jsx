import React from 'react'
import investment from '../assets/investment-calculator-logo.png';

function Header() {
  return (
    <header id="header">
        <img src={investment} alt="investment Image" />
        <h1>Investment Calculator</h1>
    </header>
  )
}

export default Header