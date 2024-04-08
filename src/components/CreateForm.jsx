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
        fullname: props.fullname,
        email: props.email,
        number: props.number,
        address: props.address,
        setName: props.setName, 
        setEmail: props.setEmail, 
        setNumber: props.setNumber, 
        setAddress: props.setAddress
    }

    const eduProps = {
        handleExpand,
        setExpanded,
        expanded,
        school: props.school, 
        degree: props.degree, 
        uniStartDate: props.uniStartDate, 
        uniEndDate: props.uniEndDate, 
        uniLocation: props.uniLocation,
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
        company: props.company, 
        role: props.role, 
        jobStartDate: props.jobStartDate, 
        jobEndDate: props.jobEndDate, 
        jobLocation: props.jobLocation,
        setCompany: props.setCompany, 
        setRole: props.setRole, 
        setJobStartDate: props.setJobStartDate,
        setJobEndDate: props.setJobEndDate,
        setJobLocation: props.setJobLocation
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