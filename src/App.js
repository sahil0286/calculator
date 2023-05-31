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

        </form>
      </div>

    </div>
  )
}

export default App