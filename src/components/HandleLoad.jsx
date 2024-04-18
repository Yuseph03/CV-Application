import Data from '../data.json'

export default function HandleLoad(props) {
    props.setName(Data.Person.name)
    props.setEmail(Data.Person.email)
    props.setNumber(Data.Person.number)
    props.setAddress(Data.Person.address)
    props.setSchool(Data.Education.school)
    props.setDegree(Data.Education.degree)
    props.setUniStartDate(Data.Education.uniStartDate)
    props.setUniEndDate(Data.Education.uniEndDate)
    props.setUniLocation(Data.Education.location)
    props.setCompany(Data.Job.company)
    props.setRole(Data.Job.role)
    props.setJobStartDate(Data.Job.jobStartDate)
    props.setJobEndDate(Data.Job.jobEndDate)
    props.setJobLocation(Data.Job.location)  
}