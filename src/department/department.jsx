import React from 'react'
import "./department.css"

function Department({departmentvalue, children}) {
  return (
    <div>
      {children}
        <ol className='list'>
            {departmentvalue.map((item, index)=>{
                return <li key={index}>
                  <button className='department-btn'>{item}</button>
                </li>
            })}
        </ol>
    </div>
  )
}

export default Department;