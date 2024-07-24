import React from 'react'

const Records = () => {
    return (
        <div className='bg-white flex flex-col items-center justify-center p-10 gap-10 md:flex-row'>
            <div className='w-40 h-40 bg-blue-500 rounded-full flex flex-col items-center justify-center text-white p-4'>
                <p className='text-4xl'>1000+</p>
                <p>Students</p>
            </div>
            <div className='w-40 h-40 bg-green-500 rounded-full flex flex-col items-center justify-center text-white p-4'>
                <p className='text-4xl'>500+</p>
                <p>Staffs</p>
            </div>
            <div className='w-40 h-40 bg-red-500 rounded-full flex flex-col items-center justify-center text-white p-4'>
                <p className='text-4xl'>50 ac.</p>
                <p>of land</p>
            </div>

        </div>
    )
}

export default Records