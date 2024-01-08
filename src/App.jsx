import { useState } from 'react';
import Header from "./components/Header";
import InvestmentInput from "./components/InvestmentInput";
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/investment";


function App() {
  const [investmentInputs, setInvestmentInput] = useState({
    'initial-investment':'',
    'annual-investment':'',
    'expected-investment':'',
    'duration':''
  })
  
  return (
    <>
      <Header />
      <InvestmentInput setInvestments = {setInvestmentInput}/>
      <Results results = {investmentInputs}/>
    </>
  )
}

export default App
