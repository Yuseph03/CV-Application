function CV(props) {
    return (
        <div id="cv">
            <div id="cv-heading">
                <h3>{props.fullname}</h3> 
                <p>{props.email}</p> 
                <p>{props.number}</p> 
                <p>{ props.address}</p>
            </div>
            <div id="cv-education">
                <h3>{props.school}</h3> 
                <p>{props.degree}</p> 
                <p>{props.uniStartDate}-{props.uniEndDate}</p>
                <p>{props.uniLocation}</p>
            </div>
            <div id="cv-job">
                <h3>{props.company}</h3> 
                <p>{props.role}</p> 
                <p>{props.jobStartDate}-{props.jobEndDate}</p>
                <p>{props.jobLocation}</p>
            </div>
        </div>
    )
}

export default CV