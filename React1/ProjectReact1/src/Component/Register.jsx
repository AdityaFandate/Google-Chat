import React, { useState } from "react";

function Register() {
    const[displayname,setDisplayname]=useState('')
    const[email,setEmail]=useState('')
    const[password,setpassword]=useState('')

    function submit(){
        console.log('Submit')
    }
    return (
        <div>
            <form action={submit}>
                <h1>Register</h1>
            <input type="text" 
                   onChange={e=>setDisplayname(e.target.value)} 
                   placeholder="Display Name"
                   style={{margin :"10px", flexDirection:"row", display:"flex", padding:"10px 60px"}} />
            
            <input type="text" 
                   onChange={e=>setEmail(e.target.value)} 
                   placeholder="Email" 
                   style={{margin :"10px", flexDirection:"row", display:"flex", padding:"10px 60px"}} />
            
            <input type="password"
                   onChange={e=>setpassword(e.target.value)}  
                   placeholder="Password" 
                   style={{margin :"10px", flexDirection:"row", display:"flex", padding:"10px 60px"}} />
            <button style={{}}>Register</button>
            </form>
        </div>
    )
}

export default Register