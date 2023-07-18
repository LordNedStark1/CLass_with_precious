
import React, { useState } from "react";
import './quotesDisplay.css'

const QuotesDisplayFunction= () =>{
    const [cardDisplay, setCardDisplay] = useState()
    const[index, setIndex] = useState(0)
    const[count, setCount] = useState(1)
    const [message, setMessage] = useState('')
    let quotes = []
    
   
    function saveFunction(event){
        setMessage(event.target.value);
       quotes.push("message") 
       console.log(message);
      
    }
    function nextFunction(){
        
        if (index < quotes.length ){
            setIndex(parseInt(index) + 1)
            setCardDisplay(disp)
        }
    }
    function previousFunction(){
        if (index > 0){
            setIndex(index - 1)
            setCardDisplay(disp)
        }
    
    }
    function disp(){
        let value =  quotes[index] + count

        return <div className="outerCardBox">
            <div className="innerCardBox">
                <div className="quoteSession">
                    <p className="quotes">
                        {value}
                    </p>
                </div>
            </div>
        </div>
    }
    return(
        <div className="carryingDiv">
            <div className="textDiv">
                <textarea name="" id="" cols="30" rows="10" className="text"
                value={message}
                onChange={saveFunction}
                />
            </div>
            <div className="buttonsDiv">
                <button className="savedQuoteButton" onClick={saveFunction}>Save Quote</button>
                <button className="nextQuoteButton" onClick={nextFunction}>Next Quote</button>
                <button className="prevQuoteButton" onClick={previousFunction}>Previous Quote</button>
            </div>
            <div className="displayDiv">
              <p>{cardDisplay}</p>  
            </div>
        </div>
    )
}
export default QuotesDisplayFunction