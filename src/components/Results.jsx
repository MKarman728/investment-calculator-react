import React from 'react'
import { formatter } from '../util/investment'

function Results({results}) {
  function calculateTotalInterest(results){
    let totalInterest = 0;
    return results.map( (row, idx) => {
      totalInterest += row.interest;
      return {
      ...row,
      'rowInterest':  totalInterest
    }}
    )
  }
  const newResults = calculateTotalInterest(results);
  return (
    <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        {newResults.map((row, idx) => (
          <tr>
            <td>{row.year}</td>
            <td>{formatter.format(row.valueEndOfYear)}</td>
            <td>{formatter.format(row.interest)}</td>
            <td>{formatter.format(row.rowInterest)}</td>
            <td>{formatter.format(row.valueEndOfYear - row.rowInterest)}</td>
          </tr>
        ))}
    </table>
  )
}

export default Results