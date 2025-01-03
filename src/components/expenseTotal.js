export default function ExpenseTotal({ monthExpenseTotal }) {
  return (
    <div className="expense-total-container">
        <div className="expense-total-box">
      <p>Total Monthly Expenses</p>
      <h3 style={{textWrap:"nowrap"}}>$ {monthExpenseTotal}</h3>
    </div>
    </div>
    
  )
}