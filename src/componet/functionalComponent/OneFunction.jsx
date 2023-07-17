import React, { useState } from "react";


const OneFunction = () => {
    const [number, setNumber] = useState("0")

    const handleChange =(props)=>{
        if(props.target.value === "+1")
            setNumber(parseInt(number) + 1)
        
        if(props.target.value === "-1")
            if(number >0 )
                setNumber(number -1)

        if(props.target.value === "+5")
            setNumber(parseInt(number)+5)

        if(props.target.value === "-5")
            if(number - 5 >0 )
                setNumber(number -5)
    } 

        return(
            <div>
            <div> <p>Number : {number}</p> </div>
            <button onClick={handleChange} value={"+1"}>+1</button>
            <button onClick={handleChange} value={"-1"}>-1</button>
            <button onClick={handleChange} value={"+5"}>+5</button>
            <button onClick={handleChange} value={"-5"}>-5</button>
            </div>
        )

    

}

export default OneFunction;