import React from 'react'

const Pagination = ({ page, setPage }) => {
    return (
        <div className='flex justify-between items-center mt-12'>
            <div disabled={page === 1} onClick={() => setPage(page - 1)} className='p-2 rounded-lg border  px-4 border-gray-100 font-semibold hover:text-lime-700 hover:border-lime-500 cursor-pointer'>PREV</div>
            <div className='flex gap-4 font-semibold'>
                <button className='p-2 px-4 bg-lime-700 text-white rounded-lg cursor-pointer'>{page}</button>
                <button className='p-2 px-4 border border-gray-100  rounded-lg hover:text-lime-700 hover:border-lime-500 cursor-pointer'>2</button>
            </div>
            <div>
                <div onClick={() => setPage(page + 1)} className='p-2   px-4 rounded-lg border border-gray-100 font-semibold hover:text-lime-700 hover:border-lime-500 cursor-pointer' >NEXT</div>
            </div>
        </div>
    )
}

export default Pagination