import React from 'react'

export default function Category({finalCategory}) {
    let category = finalCategory.map((v,i)=>{
        return (
            <li key={i} className='bg-[#ccc] p-[7px] font-serif text-[20px] font-[500] mb-2 cursor-pointer'>{v.name}</li>
        )
    })
  return (
    <div>
        <h3 className='text-[25px] font-[500px] p-[10px] mb-3'>Products Category</h3>
        <ul>
            {category}
        </ul>
    </div>
  )
}
