import React, { useState } from 'react'
import listData from './Data'
import { FqaItem } from './FqaItem';
import './Fqa.css'
export const Fqa = () => {
    const [fqa,setFqa] = useState(listData);
    console.log(fqa);
  return (
    <div className='fqa'>
        <h1>FAQ Pages</h1>
        <div className='map-fqa'>
            {
                fqa.map((fqa) => (
                    <FqaItem  key={fqa.id} {...fqa}/>
                ))
            }
        </div>
    </div>
  )
}
