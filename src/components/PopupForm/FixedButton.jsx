import React, { useState } from 'react'
import FormDialog from './FormDialog';

function FixedButton() {
    const[isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <button onClick={()=>{setIsOpen(!isOpen)}} className="fixedButton">
            Get a quote
        </button>
        {isOpen &&  <FormDialog setIsOpen={setIsOpen}/>}
    </div>
  )
}

export default FixedButton