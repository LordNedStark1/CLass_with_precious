import {useState} from "react";
import './functional.css'
import CalculateApp from "../classComponent/CalculateApp";


const Person =() =>{
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [isFormed, setIsForm] = useState()
    const [form, setForm] = useState()
    const handleFirstName = (event)=>{
        const value = event.target.value
        setFirstName(value)

    }
    const handleLastName = (event)=>{
        const value = event.target.value
        setLastName(value)

    }
    const handleEmail = (event)=>{
        const value = event.target.value
        setEmail(value)

    }
    function handleForm(){
        setIsForm( true)
        setForm([{
            "firstName": firstName,
            "LastName": lastName,
            "Email": email
        }])
    }

    function displayForm(){
        if (isFormed) {
            console.log(form)
            return <div className={"formDisplay"}>
                <p> First name: {firstName}</p>
                <p>Last name: {lastName}</p>
                <p>Email: {email}</p>

            </div>
        }
        else{
            return ""
        }

    }

    return(
        <div>
            <div className={"divToAdjust"}>
                <input onChange={handleFirstName} id={"firstName"} className={"input"} placeholder={"firstName"} value={firstName} type={"text"}/>
                <input onChange={handleLastName} id={"lastName"} className={"input"} placeholder={"lastName"} value={lastName} type={"text"}/>
                <input onChange={handleEmail} id={"email"} className={"input"} placeholder={"email"} value={email} type={"text"}/>
               <button onClick={handleForm} className={"submitButton"} >submit</button>
            </div>
           <div>
               {displayForm()}
           </div>

        </div>
    )
}
export default Person;
