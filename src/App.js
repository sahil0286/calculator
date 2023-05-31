import React, { useState } from 'react'
import "./App.css"

function App() {
  const [valueN, setValue] = useState("");
  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className='display'>
            <input type="text" value={valueN} />
          </div>
          <div>
            <input type="button" value="AC" onClick={e=> setValue("")}/>
            <input type="button" value="DE" onClick={e=> setValue(valueN.slice(0, -1))}/>
            <input type="button" value="." onClick={e=> {
              if(valueN[valueN.length - 1]==="-" || valueN[valueN.length - 1]==="+" || valueN[valueN.length - 1]==="/" || valueN[valueN.length - 1]==="*" || valueN[valueN.length - 1]===".")
              {
                setValue(valueN.slice(0, -1))
              }
              else
              {
                setValue(valueN + e.target.value)
              }
            }}/>
            <input type="button" value="/" onClick={e=> {
              console.log(valueN[valueN.length - 1])
              if(valueN[valueN.length - 1]==="-" || valueN[valueN.length - 1]==="+" || valueN[valueN.length - 1]==="/" || valueN[valueN.length - 1]==="*")
              {
                setValue(valueN.slice(0, -1) + e.target.value)
              }
              else
              {
                setValue(valueN + e.target.value)
              }
            }}/>
          </div>

        </form>
      </div>

    </div>
  )
}

export default App