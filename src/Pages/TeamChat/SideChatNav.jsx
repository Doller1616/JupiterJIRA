import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import IndivisualChat from "./IndivisualChat"
const Sn=(props)=>{
const [users, setUsers]=useState([])
const [sender, setSender]=useState("")
const params = new URLSearchParams(window.location.search);
const reciever = params.get("user");
console.log(reciever," sn")
    // fetching users 
    useEffect(()=>{
if(props.isLogin){
    const cookieName = 'user';

    // Get the value of the cookie by name
    const user = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${cookieName}=`))
      ?.split('=')[1];

    setSender(user)
    fetch('http://localhost:5100/users')
    // {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         sender:"abhishek",
    //         reciever:"deepak"
    //     })
    // }

    
      .then((response) => response.json())
      .then((data) => {
console.log(data, "usersssss")
     setUsers([...data])})
}
else{
    console.log("not fired")
}

    },[props.isLogin])

    const handleAdd=()=>{

    }
return(
    <div style={{display:'flex', flexDirection:"column", width:"350px", height:"95vh",position:"sticky", overflowY:'auto'}}>
    <h2 style={{textAlign:"center"}} >TEAM</h2>
   
{
    users?.map((user)=>{
        // extract name from email = 
        let userName = user.email ? user.email.substring(0, user.email.indexOf('@')) : '';
        return(
           <a href={`/indivisualChat?user=${userName}&me=${sender}`}><p key={user.id} style={{height:"30px", fontSize:"1.5rem", border:"1px solid white", cursor:"pointer"
        , textAlign:"center", paddingTop:"10px", marginRight:"10px", backgroundColor:reciever==userName?"white":"", color:reciever==userName?"black":"white"
        }} onClick={()=>handleUserClick(user.id)}>{userName}</p></a> 
        )
    })
}
    {/* <button onClick={handleAdd}>ADD USER</button> */}
    </div>
)
}
export default Sn
