import ExpenseItem from './expenseItem';

export default function ExpenseList({ expenses, selectedMonth, handleExpenseDelete }) {
  const monthExpenses = expenses
  .filter((expense) => new Date(expense.date).getMonth().toString() === selectedMonth)
  .map((expense) => (<ExpenseItem key={expense.id} expense={expense} handleExpenseDelete={handleExpenseDelete}/>));

  return (
    <div className="scroll-container expense-list-container">
      <div className="list-titles-container">
        <label>DATE</label>
        <label>TITLE</label>
        <label>CATEGORY</label>
        <label>AMOUNT</label>
      </div> 
       {monthExpenses}
       {monthExpenses.length === 0 && <h4>No expenses for this month</h4>}
      </div>
  )
}