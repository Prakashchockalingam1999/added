const UserTable = (props)=>(
    <table className="table">
    <thead>
      <tr >
        <th scope="col">Name</th>
        <th scope="col">Location</th>
        
       
      </tr>
    </thead>
    <tbody>
        {props.users.length>0?(
            props.users.map((user)=>(
                <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.Location}</td>
                       
                    </tr>
  
            ))
            ):(
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )
        }
      
    </tbody>
  </table>
  );
  
  export default UserTable;