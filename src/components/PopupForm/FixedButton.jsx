import React, { useState } from 'react'
import PopupForm from './PopupForm';

function FixedButton() {
    const[isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <button onClick={()=>{setIsOpen(!isOpen)}} className="fixedButton">
            Get a quote
        </button>
        {isOpen &&  <PopupForm setIsOpen={setIsOpen}/>}
    </div>
  )
}

export default FixedButton