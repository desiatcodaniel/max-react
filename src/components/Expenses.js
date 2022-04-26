import './Expenses.css'
import ExpenseItem from './ExpenseItem'

function Expenses(props) {
  const expenses = props.expenses
  return (
    //Map all data into ExpenseItem Component
    <div className="expenses">
      {expenses.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            date={item.date}
            amount={item.amount}
            key={item.id}></ExpenseItem>
        )
      })}
    </div>
  )
}

export default Expenses
