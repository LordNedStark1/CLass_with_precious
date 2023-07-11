
import React, {Component} from "react";

export class Elite extends Component {
    constructor(props) {
        super(props)
        this.state= {
            temperature : 24,
            isOn : true,
            acName : "Ned Stack A.C"
        }
        this.displayTemperature = this.displayTemperature.bind(this)
        this.increaseTemperature = this.increaseTemperature.bind(this)
        this.powerOn = this.powerOn.bind(this)
        this.getAcName = this.getAcName.bind(this)
    }
    powerOn(){
        this.setState(
            this.state.isOn = this.isOn = !this.isOn
        )

    }
    displayTemperature(){

        if (this.isOn){
            return this.temperature}
        else
            return "Off"
    }
    increaseTemperature(){
        if (this.temperature < 30 && this.isOn)
                this.temperature ++
    }
    decreaseTemperature(){
        if (this.temperature > 16 && this.isOn)
                this.temperature --
    }
    setAcName(acName){
        this.acName = acName
    }
    getAcName(){
        return this.acName
    }
    render(){
        return (
            <div>
                <div >{this.state.temperature}</div>
                <button onClick={this.powerOn}>PowerButton</button>
                <button onClick={this.increaseTemperature}>Increase</button>
                <button onClick={this.decreaseTemperature}>Decrease</button>

            </div>
        )
    }
}



// module.exports = Elite;