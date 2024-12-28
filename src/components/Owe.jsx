import React from 'react'

const Owe = () => {
    const expenses = [
        {
            amount: 614,
            name: 'yellow' // Fixed missing quotes
        },
        {
            amount: -514,
            name: 'red' // Fixed missing quotes
        },
        {
            amount: -614,
            name: 'apple' // Fixed missing quotes
        },
    ];

    return (
        <div className='min-h-[50vh]'>
            <div>

            You'll get Money from:
            <div className="h-fit p-2 mt-5 rounded-md bg-white"> 
                {expenses.map((exp, index) => (
                    exp.amount > 0 ? (
                        <div key={index}> {/* Use 'index' as a fallback key */}
                        <div className='flex justify-between'>
                            {exp.name}: {exp.amount}
                            <button className='bg-green-400 p-1'>Notify</button>
                        </div>
                        </div>
                    ) : null
                    ))}
                    </div>
            </div>
            <div>

                <br />
                <br />

            You'll Pay Money To:
            <div > 
                {expenses.map((exp, index) => (
                    exp.amount < 0 ? (
                        <div key={index} className="h-fit p-2 mt-5 rounded-md bg-white"> {/* Use 'index' as a fallback key */}
                        <div className='flex justify-between'>
                            {exp.name}: {exp.amount}
                            <button className='bg-green-400 p-1'>Pay Now</button>
                        </div>
                        </div>
                    ) : null
                    ))}
                    </div>
            </div>
        </div>
    );
}

export default Owe;
