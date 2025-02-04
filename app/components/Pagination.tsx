import React from 'react'

const Pagination = () => {
    const pages = [1,2,3,4,5,6,7]
  return (
    <div className='container mx-auto'>
        {
            pages.map((item)=> <p key={item}> {item}</p>)
        }
    </div>
  )
}

export default Pagination