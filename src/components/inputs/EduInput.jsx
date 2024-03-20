export default function EduInput (props)   {
    return (
    <div id="edu-info">
        <button onClick={props.handleExpand}>click</button>
        {props.expanded 
        ?
        <div>
            <p>School</p>
            <input type='text' name="school" onChange={(e) => props.setSchool(e.target.value)}/>
            <p>Start Date</p>
            <input type='number' name="uni-start" onChange={(e) => props.setDegree(e.target.value)}/>
            <p>End Date</p>
            <input type='number' name="uni-end" onChange={(e) => props.setUniStartDate(e.target.value)}/>
            <p>Degree</p>
            <input type="text" name="degree" onChange={(e) => props.setUniEndDate(e.target.value)}/>
            <p>Location</p>
            <input type="text" name="uni-location" onChange={(e) => props.setUniLocation(e.target.value)}/>
        </div> : null} 
    </div>
    )
}