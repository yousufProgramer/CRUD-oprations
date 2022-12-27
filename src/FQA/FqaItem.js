import React, { useState } from 'react'

export const FqaItem = ({title,des}) => {
   const [toggle,setToggle] = useState(false); 
  return (
    <div className='mainfqaitem'>
        <div className='fqaitem'>
            <div>
            <h3>{title}</h3>
            </div>
            <div className='p'>
                { 
                toggle &&
                ( <p>{des}</p>
                )
                }
                
            </div>

            <button onClick={() => {
                setToggle(!toggle)
            }}>
                {toggle ? '-' : '+'}
            </button>
        </div>
    </div>
  )
}
