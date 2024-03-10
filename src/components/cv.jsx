// import Education from "./education" 

function CV(headProps) {
    return (
        <div>
            <div id="cv-heading">
                <h1>{headProps.name}</h1> 
                <h3>{headProps.email}</h3> 
                <h3>{headProps.number}</h3>
                <h3>{headProps.address}</h3>
            </div>

            <div id="education">
                <table>
                <thead>
                    <tr>
                        <th scope="col">Education</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{headProps.startDate}-{headProps.endDate}</th>
                        <td>{headProps.school}</td>
                    </tr>
                    <tr>
                        <th scope="row">{headProps.location}</th>
                        <td>{headProps.degree}</td>
                    </tr>
                </tbody>
                </table>1
            </div>
        </div>
    )
}

export default CV