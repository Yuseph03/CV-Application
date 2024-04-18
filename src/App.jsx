import { useState } from 'react'
import './App.css'
import CreateForm from './components/CreateForm'
import CV from './components/CV'
import Data from './data.json'
import HandleLoad from './components/HandleLoad' 
import HandleDelete from './components/HandleDelete'
import ColorPicker from './components/ColorPicker'
import FontPicker from './components/FontPicker'
import LayoutPicker from './components/LayoutPicker'

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
  const [jobDesc, setJobDesc] = useState(Data.Job.description)
  const [switchTab, setSwitchTab] = useState(true)
  const [color, setColor] = useState('#1F81E2')
  const [font, setFont] = useState('monospace')
  const [layout, setLayout] = useState('toRightCV')

  const handleLayout = (event) => {
    let layout =  event.target.className;
    if (layout === 'layout1') {
      layout = 'toBottom'
    } else if (layout === 'layout2') {
      layout = 'toRight'
    } else if (layout === 'layout3') {
      layout = 'toLeft'
    } else null

    return setLayout(layout)
  }

  const handleFont = (event) => {
    return setFont(event.target.className)
  }

  const handleColor = (event) => {
    return setColor(event.target.value);
  }

  const handleSwitchTab = () => {
    return setSwitchTab(!switchTab);
  }

  const setterProps = {
    setName, setEmail, setNumber, setAddress, setCompany, setRole, setJobStartDate, 
    setJobEndDate, setJobLocation, setSchool, setDegree, setUniStartDate,
    setUniEndDate, setUniLocation, setJobDesc
  }

  const cvProps = {
    color, fullname, email, number, address, school, degree, font, layout, jobDesc,
    uniStartDate, uniEndDate, uniLocation, company, role, jobStartDate, jobEndDate, jobLocation
  }

  const personFormProps = {
    inputType: "PersonInfo", setName, setEmail, setNumber, setAddress,
     fullname, email, number, address 
  }

  const jobFormProps = {
    inputType: "JobInfo", setCompany, setRole, setJobStartDate, setJobDesc,
    setJobEndDate, setJobLocation, company, role, jobStartDate, jobEndDate, jobLocation, jobDesc
  }

  const eduFormProps = {
    inputType: "EduInfo", setSchool, setDegree, setUniStartDate,
     setUniEndDate, setUniLocation, school, degree, uniStartDate, uniEndDate, uniLocation
  }

  return (
    <div id="app-grid">
        <div className="side-bar">
          <button id='custumization' onClick={handleSwitchTab}>
            {switchTab ? 'Customize' : 'Content'}
          </button>
          <div className="delete-reset-panel">
            <button id="delete" onClick={() => HandleDelete(setterProps)}>Clear Resume</button>
            <button id="reset" onClick={() => HandleLoad(setterProps)}>Load Example</button>
          </div>
          {switchTab
          ?
          <div className="forms">
            <CreateForm {...personFormProps}/>
            <CreateForm {...jobFormProps} />
            <CreateForm {...eduFormProps} />
          </div>
          :
          <div className="customization">
            <ColorPicker  handleColor={handleColor} color={color}/>
            <LayoutPicker handleLayout={handleLayout} color={color}/>
            <FontPicker handleFont={handleFont}/>
          </div>}
        </div>
      <CV {...cvProps}/>
    </div>)
}

export default App