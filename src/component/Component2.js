import React from 'react'
import Component3 from './Component3'

const Component2 = ({data2,setMyData2,displayData}) => {
  return (
    <div>
      {data2}
      <input type="text" value={data2} onChange={e=>{
      setMyData2(e.target.value)
    }}/>
    <button onClick={displayData}>Print</button>
      <Component3 data3={data2}/>
      

    </div>
  )
}

export default Component2
