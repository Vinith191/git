import React from 'react'
import { useState } from 'react'
const State = () => {
    //hooks always above return
    const [count,setcount]=useState(0)
    const [like,setlike]=useState(0)
    const [dislike,setdislike]=useState(0)
    const handleIncrement=()=>{
      setcount(count+1)
    }
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>setcount(count+1)}>Increment</button>
        <h1>like:{like}</h1>
        <button onClick={()=>setlike(like+1)}>Increment</button>
        <h1>dislike:{dislike}</h1>
        <button onClick={()=>setdislike(dislike+1)}>Increment</button>
    </div>
  )
}

export default State
