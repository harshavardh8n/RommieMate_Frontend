import React from 'react'
import Expense from './Expense'
import ExpenseTabs from './ExpenseTabs'

const ExpenseBox = () => {
    const expenses=[{amount:1000,expenseDesc:"rent",payername:"Harshavardhan",splitters:["Shubham","Pavan"], share:501},
    {amount:1000,expenseDesc:"rent",payername:"Harshavardhan",splitters:["Shubham","Pavan"], share:501},
    {amount:1000,expenseDesc:"rent",payername:"Harshavardhan",splitters:["Shubham","Pavan"], share:501},
    {amount:1000,expenseDesc:"rent",payername:"Harshavardhan",splitters:["Shubham","Pavan"], share:501},
    {amount:1000,expenseDesc:"rent",payername:"Harshavardhan",splitters:["Shubham","Pavan"], share:501},
    {amount:1000,expenseDesc:"rent",payername:"Harshavardhan",splitters:["Shubham","Pavan"], share:501},
    {amount:1000,expenseDesc:"rent",payername:"Harshavardhan",splitters:["Shubham","Pavan"], share:501},
    {amount:1000,expenseDesc:"rent",payername:"Harshavardhan",splitters:["Shubham","Pavan"], share:501}
]

  return (
    <div className="">
        <div>
            <ExpenseTabs/>
        </div>
        <div className="max-h-[75vh] overflow-auto">
            {
                expenses.map(expense=>(
                    <Expense amount={expense.amount} expenseDesc={expense.expenseDesc} payername={expense.payername} share={expense.share}/>
                ))
            }
            
        </div>
    </div>
  )
}

export default ExpenseBox