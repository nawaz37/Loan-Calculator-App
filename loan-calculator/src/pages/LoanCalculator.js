import React, { useState } from 'react';

function LoanCalculator() {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [term, setTerm] = useState('');
  const [payment, setPayment] = useState(null);

  const calculate = () => {
    const principal = parseFloat(amount);
    const interest = parseFloat(rate) / 100 / 12;
    const payments = parseInt(term) * 12;
    const x = Math.pow(1 + interest, payments);
    const monthly = (principal * x * interest) / (x - 1);
    setPayment(monthly.toFixed(2));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Loan Calculator</h2>
      <div>
        <input type="number" placeholder="Loan Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <input type="number" placeholder="Interest Rate (%)" value={rate} onChange={(e) => setRate(e.target.value)} />
        <input type="number" placeholder="Term (Years)" value={term} onChange={(e) => setTerm(e.target.value)} />
        <button onClick={calculate}>Calculate</button>
      </div>
      {payment && <h3>Monthly Payment: ${payment}</h3>}
    </div>
  );
}

export default LoanCalculator;
