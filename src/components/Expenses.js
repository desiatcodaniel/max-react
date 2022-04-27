import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from './Card'

function Expenses(props) {
  const expenses = props.expenses
  return (
    //Map all data into ExpenseItem Component
    <Card className="expenses">
      {expenses.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            date={item.date}
            amount={item.amount}
            key={item.id}></ExpenseItem>
        )
      })}
    </Card>
  )
}

export default Expenses
