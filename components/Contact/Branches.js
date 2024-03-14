import React from 'react'

function Branches({ data }) {
  return (
    <div className='branches'>
      <div className='container'>
        <div className='cards'>
        {data?.map((item) => {
          return <div className='card-container'>
            <div className='image-container'>
            <img src={item.image} alt='jo' />
            </div>
            <strong>{item.title}</strong>
            <p>{item?.address}</p>
            <p>{item?.email}</p>
            <p>Tel: {item?.phone_number}</p>
          </div>
        })}

      </div>
      </div>
    </div>
  )
}

export default Branches
