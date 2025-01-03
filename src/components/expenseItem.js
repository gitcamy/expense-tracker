export default function ExpenseItem({ expense, handleExpenseDelete }) {
  return (
      <div className="expense-item">
        <p>{expense.date}</p>
        <p>{expense.title}</p>
        <p>{expense.category}</p>
        <p>$ {expense.amount}</p>
        <div className="delete-container">
        <button className="button" onClick={() => handleExpenseDelete(expense.id)}>❌</button>
      </div>
    </div>
    

  )
}