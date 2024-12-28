import React from 'react'

const CalculateNet = () => {
    const NetMoney = 514.8
  return (
    <div className='min-h-[20vh]'>
        Your Net transfer is:

        <div className="h-10 p-2 mt-5 rounded-md bg-white"> 
            {NetMoney}
        </div>

    </div>
  )
}

export default CalculateNet