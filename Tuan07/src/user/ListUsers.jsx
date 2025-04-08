import axios from "axios"
import { useEffect, useState } from "react";

function ListUsers() {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((req) => setUsers(req.data))
            .catch(console.error)
    }, [])
  return (
    <>
        <div className="">
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" name="" id="" /></th>
                        <th>CUSTOMER NAME</th>
                        <th>COMPANY</th>
                        <th>ORDER VALUE</th>
                        <th>ORDERDATE</th>
                        <th>STATUS</th>
                    </tr>  
                </thead>
                <tbody>
                    {users.map((user) => (
                            <tr key={user.id}>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td>{user.name}</td>
                                <td>{user.company.name}</td>
                                <td>{user.username}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                </tbody>    
            </table>
        </div>
    </>
    
  );
}
export default ListUsers