import React from 'react'

function InvestmentInput({ setInvestments }) {
  function updateInvestment(e){
    setInvestments(prevValues=>(
      {
        ...prevValues,
        [e.target.id]: +e.target.value
      }
    )
    )
  }
  return (
    <div className='input-group' id='user-input'>
        <div className="input-row">
            <div>
              <label htmlFor="initialInvestment">INITIAL INVESTMENT</label>
              <input type="number" id="initialInvestment" onChange={updateInvestment}/>
            </div>
            <div>
              <label htmlFor="annualInvestment">ANNUAL INVESTMENT</label>
              <input type="number" id="annualInvestment" onChange={updateInvestment}/>
            </div>
        </div>
        <div className='input-row'>
          <div>
            <label htmlFor="expectedReturn">EXPECTED RETURN</label>
            <input type="number" id="expectedReturn" onChange={updateInvestment}/>
          </div>
          <div>
            <label htmlFor="duration">DURATION</label>
            <input type="number" id="duration"onChange={updateInvestment}/>
          </div>
        </div>
    </div>
  )
}

export default InvestmentInput