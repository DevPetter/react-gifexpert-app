import React from 'react'

export const GifGridItem = ({title, url}) => {

    console.log({title, url})

  return (
    <div className='card animate__animated animate__bounce'>
        <p>{title}</p>
        <img src={url} alt={title}/>
        
    </div>
  )
}
