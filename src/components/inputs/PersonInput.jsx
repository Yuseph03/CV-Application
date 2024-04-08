export default function PersonInput(props) {
    return (
        <div id="personal-info"> 
            <p>Full Name</p>
            <input type='text' name="fullname" value={props.fullname} onChange={(e) => props.setName(e.target.value)}/>
            <p>Email</p>
            <input type='email'name='email' value={props.email} onChange={(e) => props.setEmail(e.target.value)}/>
            <p>Phone Number</p>
            <input type="text" name="number" value={props.number}
            pattern="^\+(?:[0-9] ?){6,25}[0-9]$"
            placeholder="+XX XXXXXXXXX" onChange={(e) => props.setNumber(e.target.value)}/>
            <p>Address</p>
            <input type="text" name="address" value={props.address} onChange={(e) => props.setAddress(e.target.value)}/>
        </div>
    )
}