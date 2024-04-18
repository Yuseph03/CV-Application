function CV(props) {
    return (
        <div id="cv" className={props.layout} style={{fontFamily: props.font}}>
            <section id="cv-heading" style={{backgroundColor: props.color}}>
                <h2>{props.fullname}</h2> 
                <div>
                    <p>{props.email}</p>
                    <p>{props.number}</p>
                    <p>{props.address}</p>
                </div>
            </section>
            <section id="cv-education">
                <h3 id="cv-education-heading" style={{color: props.color}}>Education</h3>
                <div>
                    <p>{props.uniStartDate}-{props.uniEndDate}    <b>{props.school}</b></p>
                    <p>{props.degree}   {props.uniLocation}</p>
                </div>
            </section>
            <section id="cv-job">
                <h3 id="cv-job-heading" style={{color: props.color}}>Professional Experience</h3>
                <div>
                    <p>{props.jobStartDate}-{props.jobEndDate} <b>{props.company}</b></p>
                    <p>{props.jobLocation}  {props.role}</p>
                    <p>{props.jobDesc}</p>
                </div>
            </section>
        </div>
    )
}

export default CV