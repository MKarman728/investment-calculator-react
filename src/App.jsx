import { useState } from 'react';
import Header from "./components/Header";
import InvestmentInput from "./components/InvestmentInput";
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/investment";


function App() {
  const [investmentInputs, setInvestmentInput] = useState({
    'initialInvestment':'',
    'annualInvestment':'',
    'expectedReturn':'',
    'duration':''
  })

  const investmentResults = calculateInvestmentResults(investmentInputs);
  
  return (
    <>
      <Header />
      <InvestmentInput setInvestments = {setInvestmentInput}/>
      <Results results = {investmentResults}/>
    </>
  )
}

export default App
