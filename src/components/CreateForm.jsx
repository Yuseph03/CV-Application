import { useState } from "react"
import PersonInput from "./inputs/PersonInput"
import JobInput from "./inputs/JobInput"
import EduInput from "./inputs/EduInput"

function CreateForm(props) {
    const [expanded, setExpanded] = useState(false)
    
    function handleExpand() {
         setExpanded(!expanded)
    }

    const personProps = {
        setName: props.setName, 
        setEmail: props.setEmail, 
        setNumber: props.setNumber, 
        setAddress: props.setAddress
    }
    const eduProps = {
        handleExpand,
        setExpanded,
        expanded,
        setSchool: props.setSchool, 
        setDegree: props.setDegree, 
        setUniStartDate: props.setUniStartDate,
        setUniEndDate: props.setUniEndDate,
        setUniLocation: props.setUniLocation
    }

    const jobProps = {
        handleExpand,
        setExpanded,
        expanded,
        setCompany: props.setCompany, 
        setRole: props.setRole, 
        setJobStartDate: props.setJobStartDate,
        setJobEndDate: props.setJobEndDate,
    }

    return (
        <>
            {props.inputType === 'PersonInfo' && <PersonInput {...personProps} />}
            {props.inputType === 'EduInfo' && <EduInput {...eduProps} />}
            {props.inputType === 'JobInfo' && <JobInput {...jobProps} />}
        </>
    )
}

export default CreateForm