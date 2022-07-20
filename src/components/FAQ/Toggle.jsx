import React, { useState } from 'react'
import {AiOutlineDown,AiOutlineUp} from "react-icons/ai"
import { IconContext } from "react-icons";


function Toggle({question,answer}) {
    const [toggle,setToggle]=useState(false);

    function handler(){
        setToggle(!toggle);
    }
  return (
    <>
    <div className='flex-row faq-card' onClick={handler}>
        <div className="content" >
        <h2>{question}</h2>
        {toggle && <div className="accordion-content">{answer}</div>}
        </div>
        <div className="toggle">
        <IconContext.Provider value={{ className: "faq-icons" }}>

            {toggle ? 
            <AiOutlineDown/>
            :  <AiOutlineUp />  }
            </IconContext.Provider>
            
        </div>
        
    </div>
    <hr />
    </>
  )
}

export default Toggle