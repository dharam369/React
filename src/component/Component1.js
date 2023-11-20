import React from 'react'
import Component2 from './Component2'

const Component1 = (prop) => {
  return (
    <div>
      {prop.myData}
      <input type="text" value={prop.myData} onChange={e=>{
      prop.setMyData(e.target.value)
    }}/>
    <button onClick={prop.displayData}>Print1</button>
      <Component2 data2={prop.myData} setMyData2={prop.setMyData} displayData={prop.displayData}/>
      
    </div>
  )
}

export default Component1
