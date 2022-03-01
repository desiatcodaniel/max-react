import ExpenseItem from './components/ExpenseItem'

function App() {
  const expenses = [
    {
      title: 'Car Insurance',
      amount: '50.00',
      date: new Date(2021, 12, 4),
      id: 0
    },
    {
      title: 'License',
      amount: '120.00',
      date: new Date(2021, 12, 6),
      id: 1
    },
    {
      title: 'Gas',
      amount: '30.00',
      date: new Date(2021, 12, 9),
      id: 2
    }
  ]
  return (
    <div>
      <h2>Let&apos;s get started!</h2>

      {
        //Map all data into ExpenseItem Component
        expenses.map((item) => {
          return (
            <ExpenseItem
              title={item.title}
              date={item.date}
              amount={item.amount}
              key={item.id}></ExpenseItem>
          )
        })
      }
    </div>
  )
}

export default App
