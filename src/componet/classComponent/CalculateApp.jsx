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
            <div>
                <div className='calculatorBody'>
                    <div className='displaySection'></div>
                    <div className='calculatorBody'>

                        <div className={"first"}>
                            <button className={"button"}>1</button>
                            <button className={"button"}>2</button>
                            <button className={"button"}>3</button>
                        </div>
                        <div className={"first"}>
                            <button className={"button"}>4</button>
                            <button className={"button"}>5</button>
                            <button className={"button"}>6</button>
                        </div>
                        <div className={"first"}>
                            <button className={"button"}>7</button>
                            <button className={"button"}>8</button>
                            <button className={"button"}>9</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CalculateApp;