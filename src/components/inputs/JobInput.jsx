
export default function JobInput (props) {
    return (
    <div id="job-info">
        <button onClick={props.handleExpand}>click</button>
        {props.expanded 
        ? 
        <div>
            <p>Company</p>
            <input type='text' name="company" onChange={(e) => props.setCompany(e.target.value)}/>
            <p>Role</p>
            <input type='text' name="role" onChange={(e) => props.setRole(e.target.value)}/>
            <p>Start Date</p>
            <input type='number' name="job-start" onChange={(e) => props.setJobStartDate(e.target.value)}/>
            <p>End Date</p>
            <input type='number' name="job-end" onChange={(e) => props.setJobEndDate(e.target.value)}/>
        </div> : null}
    </div>
    )
}