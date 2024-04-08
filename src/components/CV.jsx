function CV(props) {
    return (
        <div id="cv">
            <section id="cv-heading">
                <h2>{props.fullname}</h2> 
                <div>
                    <p>{props.email}</p>
                    <p>{props.number}</p>
                    <p>{ props.address}</p>
                </div>
            </section>
            <section id="cv-education">
                <h3 id="cv-education-heading">Education</h3>
                <div>
                    <p><b>{props.school}</b></p>
                    <p>{props.degree}</p>
                    <p>{props.uniStartDate}-{props.uniEndDate}</p>
                    <p>{props.uniLocation}</p>
                </div>
            </section>
            <section id="cv-job">
                <h3 id="cv-job-heading">Professional Experience</h3>
                <div>
                    <p><b>{props.company}</b></p>
                    <p>{props.role}</p>
                    <p>{props.jobStartDate}-{props.jobEndDate}</p>
                    <p>{props.jobLocation}</p>
                </div>
            </section>
        </div>
    )
}

export default CV