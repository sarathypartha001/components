import React from 'react'
import "./department.css"

function Department({departmentvalue, children, departmentClickvalue}) {
  // function click(item){
  //   departmentClickvalue(item)
  // }
  return (
    <div>
      {children}
        <ol className='list'>
            {departmentvalue.map((item, index)=>{
                return <li key={index}>
                  <button className='department-btn' onClick={()=>{
                      departmentClickvalue(item)
                  }}>{item}</button>
                </li>
            })}
        </ol>
    </div>
  )
}

export default Department;