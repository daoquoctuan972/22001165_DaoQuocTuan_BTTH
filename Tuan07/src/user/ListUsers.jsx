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
                    <th><input type="checkbox" name="" id="" /></th>
                    <th>CUSTOMER NAME</th>
                    <th>COMPANY</th>
                    <th>ORDER VALUE</th>
                    <th>ORDERDATE</th>
                    <th>STATUS</th>
                </thead>
                {users.map((user)=>{
                        <div key={user.id} className="flex">
                        </div>
                    })}
            </table>
                
        </div>
    </>
    
  );
}
export default ListUsers