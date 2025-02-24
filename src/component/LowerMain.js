import React, { useContext } from 'react'
import { PowerHouse } from '../context/ContextAPI'

const LowerMain = () => {
const {generateAnswer,setQuestion,question}=useContext(PowerHouse)

const handleKeyPress = (e) => {
    if (e.key === "Enter") {  
      generateAnswer();  
    }
  }

    return (
        <>
            <div className="mb-3 d-flex rounded justify-content-start align-items-center w-50 gap-3">
                <div className='lowerdiv ' style={{ width: '88%' }}>
                    <input type="text" className="form-control border-0" id="formGroupExampleInput" placeholder="Search" value={question} onKeyDown={handleKeyPress} onChange={(e)=>{setQuestion(e.target.value)}} />
                </div>
                <i className="fa-solid fa-magnifying-glass" onClick={generateAnswer} ></i>
                <i className="fa-regular fa-file disabled"></i>
            </div>
        </>
    )
}

export default LowerMain