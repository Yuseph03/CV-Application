import { useState } from 'react'
import './App.css'
import CV from './components/cv'

function App() {
const [name, setName] = useState('Yuseph')
const [email, setEmail] = useState('Yuseph@gmail.com')
const [number, setNumber] = useState('038120548')
const [address, setAddresss] = useState('Frankfurt')

const [startDate, setStartDate] = useState('2025')
const [endDate, setEndDate] = useState('present')
const [school, setSchool] = useState('Karaj Azad Islamic University')
const [degree, setDegree] = useState('Computer Engineering (Software)')
const [location, setLoc] = useState('Iran, Karaj')

const formHandler = (e) => {
  e.preventDefault();
}

const PersonInfo = 
  <div>
        <form id="personal-info" action='submit' onSubmit={formHandler}>
          <label htmlFor='fullname'><p>Full Name</p> </label>
          <input type='text' id='fullname' name='fullname' onChange={(e) => setName(e.target.value)}/>
          <label htmlFor='email'><p>Email</p></label>
          <input type='email' id='email' name='email' onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="number"><p>Phone Number</p></label>
          <input name="number" type="text"  
          pattern="^\+(?:[0-9] ?){6,25}[0-9]$" 
          placeholder="+XX XXXXXXXXX" onChange={(e) => setNumber(e.target.value)}/>          
          <label htmlFor="address"><p>Address</p></label>
          <input type="text" id='address' name='address' onChange={(e) => setAddresss(e.target.value)}/>
        </form>
  </div>

const EducationInfo = 
  <div>
      <form id='edu-info' action="submit" onSubmit={formHandler}>
        <label htmlFor="school"><p>School</p></label>
        <input type="text" id='school' name='school' onChange={(e) => setSchool(e.target.value)}/>
        <label htmlFor="degree"><p>Degree</p></label>
        <input type="text" id='degree' name='degree' onChange={(e) => setDegree(e.target.value)}/>
        <label htmlFor="start-date"><p>Start Date</p></label>
        <input type="date" id='start-date' name='start-date' onChange={(e) => setStartDate(e.target.value)}/>
        <label htmlFor="end-date"><p>End Date</p></label>
        <input type="date" id='end-date' name='end-date' onChange={(e) => setEndDate(e.target.value)}/>  
        <label htmlFor="location"><p>Location</p></label>
        <input type="text" id='lcoation' name='location' onChange={(e) => setLoc(e.target.value)}/>
      </form>
  </div>

  const headsProps={name, email, number, address, school, degree, startDate, endDate, location}
  return (
    <div id='app-grid'>
      {PersonInfo}
      {EducationInfo}
      <CV {...headsProps} />
    </div>
  )
}

export default App
