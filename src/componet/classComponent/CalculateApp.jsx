import React, {Component} from 'react';
// import  './cal.css'
import './cal.css'
class CalculateApp extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <div className={"calculatorBackground"}>
                <div className='calculatorBody'>
                    <div className={"topBar"}>
                        <img src={"./images/semicolon picture.jpg"}/>
                        <div className={"imagesTopBar"}>
                            <img src='./images/semicolon picture.jpg'/>
                            <img src='./images/semicolon picture.jpg'/>
                            <img src='./images/semicolon picture.jpg'/>
                        </div>
                    </div>
                    <div className={"calculatorName"}><span>C</span>alculator</div>
                    <div className='displaySection'></div>
                    <div className='calculatorNumberBody'>
                        <div className={"layer"}>
                            <button className={"specialButton"}>AC</button>
                            <button className={"specialButton"}>+/-</button>
                            <button className={"specialButton"}>%</button>
                            <button className={"specialButton"}>/</button>
                        </div>
                        <div className={"layer"}>
                            <button className={"button"}>7</button>
                            <button className={"button"}>8</button>
                            <button className={"button"}>9</button>
                            <button className={"specialButton"}>*</button>
                        </div>
                        <div className={"layer"}>
                            <button className={"button"}>4</button>
                            <button className={"button"}>5</button>
                            <button className={"button"}>6</button>
                            <button className={"specialButton"}>-</button>
                        </div>
                        <div className={"layer"}>
                            <button className={"button"}>1</button>
                            <button className={"button"}>2</button>
                            <button className={"button"}>3</button>
                            <button className={"specialButton"}>+</button>
                        </div>
                        <div className={"zeroDiv"}>
                            <button className={"zeroButton"}>0</button>
                            <button className={"button"}>.</button>
                            <button className={"specialButton"}>=</button>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default CalculateApp;