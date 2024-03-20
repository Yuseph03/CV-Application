import { useState } from 'react'
import './App.css'
import CreateForm from './components/CreateForm'
import CV from './components/CV'
import Data from './data.json'

function App() {
  const [fullname, setName] = useState(Data.Person.name)
  const [email, setEmail] = useState(Data.Person.email)
  const [number, setNumber] = useState(Data.Person.number)
  const [address, setAddress] = useState(Data.Person.address)
  const [school, setSchool] = useState(Data.Education.school)
  const [degree, setDegree] = useState(Data.Education.degree)
  const [uniStartDate, setUniStartDate] = useState(Data.Education.uniStartDate)
  const [uniEndDate, setUniEndDate] = useState(Data.Education.uniEndDate)
  const [uniLocation, setUniLocation] = useState(Data.Education.location)
  const [company, setCompany] = useState(Data.Job.company)
  const [role, setRole] = useState(Data.Job.role)
  const [jobStartDate, setJobStartDate] = useState(Data.Job.jobStartDate)
  const [jobEndDate, setJobEndDate] = useState(Data.Job.jobEndDate)
  const [jobLocation, setJobLocation] = useState(Data.Job.location)

  const cvProps = {
    fullname, email, number, address, school, degree, 
    uniStartDate, uniEndDate, uniLocation, company, role, jobStartDate, jobEndDate, jobLocation
  }


  const personFormProps = {
    inputType: "PersonInfo", setName, setEmail, setNumber, setAddress
  }

  const jobFormProps = {
    inputType: "JobInfo", setCompany, setRole, setJobStartDate, setJobEndDate, setJobLocation
  }

  const eduFormProps = {
    inputType: "EduInfo", setSchool, setDegree, setUniStartDate, setUniEndDate, setUniLocation
  }

  return (
    <div id="app-grid">
      <div className="forms">
        <CreateForm {...personFormProps}/>
        <CreateForm {...jobFormProps} />
        <CreateForm {...eduFormProps} />
      </div>

      <CV {...cvProps}/>
    </div>
  )
}

export default App
