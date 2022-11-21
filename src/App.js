import { useState } from "react";
import AddUserForm from "./components/forms/adduser";
import UserTable from "./components/usertable";




export default function App() {
  const Data = [
  
  ];
  const addUser=(user)=>{
    user.id=user.length+1;
    setUsers([...users,user])
  }

  const [users, setUsers] = useState(Data);
  return (
    <div className="App">
      <div className="container">
        <h1>Crud</h1>
        <div className="flex-row">
          <div className="flex-large">
            <h2>Add user</h2>
            <AddUserForm  addUser={addUser}/>
          </div>
          <div className="flex-large">
            <h2>view user</h2>
            <UserTable users={users} />
          </div>
        </div>
      </div>
    </div>
  );
}