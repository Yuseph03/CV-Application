export default function EduInput (props)   {
    return (
    <div id="edu-info">
        <button onClick={props.handleExpand}>click</button>
        {props.expanded 
        ?
        <div>
            <p>School</p>
            <input type='text' name="school" value={props.school} onChange={(e) => props.setSchool(e.target.value)}/>
            <p>Start Date</p>
            <input type='text' name="uni-start" value={props.uniStartDate} onChange={(e) => props.setDegree(e.target.value)}/>
            <p>End Date</p>
            <input type='text' name="uni-end" value={props.uniEndDate} onChange={(e) => props.setUniStartDate(e.target.value)}/>
            <p>Degree</p>
            <input type="text" name="degree" value={props.degree} onChange={(e) => props.setUniEndDate(e.target.value)}/>
            <p>Location</p>
            <input type="text" name="uni-location" value={props.uniLocation} onChange={(e) => props.setUniLocation(e.target.value)}/>
        </div> : null} 
    </div>
    )
}