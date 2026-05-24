import React from 'react'

const Loader = () => {
    return (
        <div className='space-y-10'>

            {[1, 2, 3].map((item) => (
                <div
                    key={item}
                    className='grid grid-cols-1 sm:grid-cols-3 gap-6 pb-10 border-b border-gray-100 animate-pulse'
                >


                    <div className='h-[240px] rounded-2xl bg-gray-300'></div>

                    <div className='sm:col-span-2 flex flex-col justify-center gap-5'>

                        <div className='h-8 bg-gray-300 rounded w-[80%]'></div>

                        <div className='space-y-3'>
                            <div className='h-4 bg-gray-300 rounded'></div>
                            <div className='h-4 bg-gray-300 rounded'></div>
                            <div className='h-4 bg-gray-300 rounded w-[70%]'></div>
                        </div>

                        <div className='flex items-center gap-3'>
                            <div className='w-8 h-8 rounded-full bg-gray-300'></div>

                            <div className='h-4 w-[150px] rounded bg-gray-300'></div>
                        </div>

                    </div>

                </div>
            ))}

        </div>
    )
}

export default Loader