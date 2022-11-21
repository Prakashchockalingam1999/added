import { useState } from "react"


export default function AddUserForm(props){
    const initialFormState ={id:null,name:"",Location:""}
    const [user,setUser]=useState(initialFormState)
    const[selectedDate,setSelectedDate]=useState(null)
    const handleInputchange=(event)=>{
        const {name,value}=event.target
        setUser({...user,[name]:value})
    }
   
    return(
        <form 
        onSubmit={
            event=>{
                event.preventDefault();
                if(!user.name||!user.Location)return;
                props.addUser(user);
                setUser(initialFormState)
            }
        }
        >
            <label>name</label>
            <input type="text" onChange={handleInputchange} name="name" value={user.name}/>
            <label>Location</label>
            <select onChange={handleInputchange} name="Location" value={user.Location}>
<option value="">type</option>
<option value="chennai">chennai</option>
<option value="coimbatore">coimbatore</option>
<option value="Madurai">madurai</option>
</select>
           
             <button>submit</button>       
        </form>
    )
}
{/* <select onChange={handleInputchange} name="Location" value={user.Location}>
<option value="">type</option>
<option value="chennai">chennai</option>
<option value="coimbatore">coimbatore</option>
<option value="Madurai">madurai</option>
</select> */}