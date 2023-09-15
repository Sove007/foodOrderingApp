import React from 'react'

const Shimmerr = () => {
  const numCards = 8
  return (

    <div className='flex flex-wrap container mx-auto'>


        {Array(8).fill('').map((e, index)=>
        <div key={index}>
         <div className="w-[200px] p-3 m-5 shadow-lg bg-pink-50 animate-pulse">
  <div className="bg-gray-200 h-6 w-1/2 mb-2 rounded"></div>
  <img  className="animate-none" />
  <h3 className="font-bold text-xl mb-2 animate-none"></h3>
  <h4 className="mb-2 animate-none">⭐</h4>
  <span>
    <div className="bg-gray-200 h-4 w-1/4 mb-2 rounded animate-none"></div>
    
    <p className="bg-gray-200 h-4 w-3/4 mb-2 rounded animate-none"></p>
  </span>
  <p className="mb-2 animate-none">
  </p>
  <h5 className="p-2 font-bold mb-2 animate-none">
  </h5>
</div>
</div> )}

    </div>
    

    
  )
}

export default Shimmerr