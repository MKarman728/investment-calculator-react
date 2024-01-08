import React from 'react'

function InvestmentInput({ setInvestments }) {
  function updateInvestment(e){
    setInvestments(prevValues=>(
      {
        ...prevValues,
        [e.target.id]: e.target.value
      }
    )
    )
  }
  return (
    <div className='input-group' id='user-input'>
        <div className="input-row">
            <label htmlFor="initial-investment">INITIAL INVESTMENT</label>
            <input type="number" id="initial-investment" onChange={updateInvestment}/>
            <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
            <input type="number" id="annual-investment" onChange={updateInvestment}/>
        </div>
        <div className='input-row'>
            <label htmlFor="expected-investment">EXPECTED RETURN</label>
            <input type="number" id="expected-return" onChange={updateInvestment}/>
            <label htmlFor="duration">DURATION</label>
            <input type="number" id="duration"onChange={updateInvestment}/>
        </div>
    </div>
  )
}

export default InvestmentInput