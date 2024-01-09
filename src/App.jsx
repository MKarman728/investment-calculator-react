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

  const isValidInput = ()=>+investmentInputs.duration > 0;
  
  return (
    <>
      <Header />
      <InvestmentInput setInvestments = {setInvestmentInput}/>
      {!isValidInput() && <p className='center'>Please enter a duration greater than zero.</p>}
      {isValidInput() && <Results results = {investmentResults}/>}
    </>
  )
}

export default App
