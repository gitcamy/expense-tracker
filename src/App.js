import { useState } from 'react';
import MonthSelector from './components/monthSelector';
import AddExpense from './components/addExpense';
import CategoryTotals from './components/categoryTotals';
import ExpenseList from './components/expenseList';
import ExpenseTotal from './components/expenseTotal';
import { useEffect } from 'react';



const expenseData = [
  {
    id: 1,
    title: 'Mercadona',
    amount: 94.12,
    date: '2024-08-12',
    category: 'Food',
    categoryId: 1,
  },
  {
    id: 2,
    title: 'Bank transfer',
    amount: 500.00,
    date: '2024-08-12',
    category: 'Rent/Utilities',
    categoryId: 2,
  },
  {
    id: 3,
    title: 'Vodafone',
    amount: 25.30,
    date: '2024-05-12',
    category: 'Rent/Utilities',
    categoryId: 2,
  },
  {
    id: 4,
    title: 'Oysho',
    amount: 54.99,
    date: '2024-07-12',
    category: 'Other',
    categoryId: 3,
  },
  {
    id: 5,
    title: 'Amazon',
    amount: 100.00,
    date: '2024-04-12',
    category: 'Other',
    categoryId: 3,
  },  
  {
    id: 6,
    title: 'Amazon',
    amount: 100.00,
    date: '2024-03-12',
    category: 'Other',
    categoryId: 3,
  }
]

const initialCategories = [
  {
    id: 1,
    name: 'Food',
    icon: '🍔',
    total: 0,
  },
  {
    id: 2,
    name: 'Rent/Utilities',
    icon: '🏠',
    total: 0,
  },
  {
    id: 3,
    name: 'Other',
    icon: '🤑',
    total: 0,
  },
]


export default function App() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth().toString());
  const [monthExpenseTotal, setMonthExpenseTotal] = useState(0);
  const [categories, setCategories] = useState(initialCategories);
  const [expenses, setExpenses] = useState(expenseData);

  function calculateCategoryTotals(month){
    const updatedCategories = categories.map((category) => {
      const total = expenses
        .filter((expense) => expense.categoryId === category.id && String(new Date(expense.date).getMonth()) === month)
        .reduce((acc, expense) => acc + expense.amount, 0);
      return {...category, total:total};
    });

    setCategories(updatedCategories);
  }

  function calculateMonthExpenseTotal(month){
    const total = expenses
    .filter((expense) => String(new Date(expense.date).getMonth()) === month)
    .reduce((acc, expense) => acc + expense.amount, 0);
    setMonthExpenseTotal(total);
  }

  function handleMonthChange(month){
    setSelectedMonth(month);

    calculateMonthExpenseTotal(month);

    calculateCategoryTotals(month);
  }

  function handleExpenseDelete(id) {
    const updatedExpenses = expenses.filter((expense) => expense.id !==id);
    setExpenses(updatedExpenses);
  }

  useEffect(() => {
    calculateMonthExpenseTotal(selectedMonth);
    calculateCategoryTotals(selectedMonth);
  }, [expenses, selectedMonth]);

  function handleExpenseAdd(expense){
    setExpenses(expenses => [...expenses, expense]);
  }

  function handleConvertMonth(month) {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',  
      'October',
      'November',
      'December',
    ]
    return monthNames[month];
  }

  return (
    <div className="App">
      

      <div className="action-container">
      <h1>Monthly Expense Tracker</h1>
       

        <AddExpense onAddExpense={handleExpenseAdd} initialCategories={initialCategories} />
      </div>
      
      <h3 className="month-title">{handleConvertMonth(selectedMonth)}</h3>
      <MonthSelector 
          selectedMonth={selectedMonth} 
          setSelectedMonth={handleMonthChange}
          />

      <CategoryTotals 
        categories={categories}
       />

      <ExpenseList 
        expenses={expenses}
        selectedMonth={selectedMonth}
        handleExpenseDelete={handleExpenseDelete}
        />

      <ExpenseTotal 
        monthExpenseTotal={monthExpenseTotal}/>

    </div>
  );
}

