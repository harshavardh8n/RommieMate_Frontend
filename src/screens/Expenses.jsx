import React from 'react'
import CalculateNet from '../components/CalculateNet'
import ExpenseBox from '../components/ExpenseBox'
import Owe from '../components/Owe'

const Expenses = () => {
    return (
        <>
        <div className='bg-[#EFF3EA]'>
    
        <div className='lg:w-full flex lg:flex-row flex-col h-screen'>
        <div className="lg:w-1/2 pt-10 bg-[#EFF3EA]">
            <h1 class="text-2xl font-semibold lg:ml-24 m-3 text-[#809539]">Expenses</h1>
            <div className="w-4/7 m-auto lg:ml-24 m-2 min-h-[80vh]">
                <ExpenseBox/>
            </div>
        </div>
        <div className="lg:w-1/2 bg-[#D9DFC6] rounded-l-3xl">
            <div className="h-fit">
                
            </div>
            <div className="flex flex-col m-3 mt-14">
                <CalculateNet/>
                <Owe/>
            </div>
        </div>
        </div>
        </div>
        </>
  )
}

export default Expenses