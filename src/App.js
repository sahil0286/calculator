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
          <div>
            <input type="button" value="7" onClick={e=> setValue(valueN + e.target.value)}/>
            <input type="button" value="8" onClick={e=> setValue(valueN + e.target.value)}/>
            <input type="button" value="9" onClick={e=> setValue(valueN + e.target.value)}/>
            <input type="button" value="*" onClick={e=> {
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
          <div>
            <input type="button" value="4" onClick={e=> setValue(valueN + e.target.value)}/>
            <input type="button" value="5" onClick={e=> setValue(valueN + e.target.value)}/>
            <input type="button" value="6" onClick={e=> setValue(valueN + e.target.value)}/>
            <input type="button" value="+" onClick={e=> {
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
          <div>
            <input type="button" value="1" onClick={e=> setValue(valueN + e.target.value)}/>
            <input type="button" value="2" onClick={e=> setValue(valueN + e.target.value)}/>
            <input type="button" value="3" onClick={e=> setValue(valueN + e.target.value)}/>
            <input type="button" value="-" onClick={e=> {
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
          <div>
            <input type="button" value="00" onClick={e=> setValue(valueN + e.target.value)}/>
            <input type="button" value="0" onClick={e=> setValue(valueN + e.target.value)}/>
            <input type="button" value="=" className='equal' onClick={e=> {
              console.log(valueN,valueN[0])
              if(valueN==="" || valueN[0]==="-" || valueN[0]==="+" || valueN[0]==="/" || valueN[0]==="*")
              {
                setValue("")
              }
              else if(valueN[valueN.length - 1]==="-" || valueN[valueN.length - 1]==="+" || valueN[valueN.length - 1]==="/" || valueN[valueN.length - 1]==="*")
              {
                setValue(valueN.slice(0, -1))
              }
              else
              {
                // eslint-disable-next-line
                setValue(eval(valueN))
              }
            }}/>
          </div>
        </form>
      </div>

    </div>
  )
}

export default App