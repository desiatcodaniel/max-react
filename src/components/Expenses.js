import './Expenses.css'
import ExpenseItem from './ExpenseItem'

function Expenses(props) {
  const expenses = props.expenses
  return (
    //Generate Expense items based on the number of given expenses
    expenses.map((item) => {
      return (
        <div className="expenses">
          <ExpenseItem title={item.title} date={item.date} amount={item.amount} key={item.id} />
        </div>
      )
    })
  )
}

export default Expenses
