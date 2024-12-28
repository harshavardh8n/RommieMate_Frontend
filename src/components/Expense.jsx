import React from 'react'

const Expense = ({amount,expenseDesc,payername,share}) => {
    
  return (
      <div className='h-20 bg-white rounded-lg m-2'>
                {amount} 
                {" "+expenseDesc} <br/>
                {payername} <br/>
                share: {share}
    </div>
    
  )
}

export default Expense