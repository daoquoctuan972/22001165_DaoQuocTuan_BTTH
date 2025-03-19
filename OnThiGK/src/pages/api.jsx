import { useEffect, useReducer, useRef, useState } from "react";
import axios from 'axios';

function Api (){
    const [users, setUsers] = useState([]);
    const [state, dispatch] = useReducer(reducer, {count: 0})
    
    
    function reducer (state, action){
        switch(action.type){
            case "+": 
                return {...state, count: state.count + 1}
            case "-":
                return {...state, count: state.count - 1}
            case "rs":
                return {...state, count: 0}
        }
    }

    const handleAdd = () =>{
        dispatch({type: "+"});
    }

    
    const handleMinus = () =>{
        dispatch({type: "-"});
    }

    const handleRs = () =>{
        dispatch({type: "rs"});
    }

    useEffect (() =>{
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((req) => setUsers(req.data))
            .catch(console.error)
    }, [])
    return(
        <>
            <div className="bg-green-200 flex justify-content-center w-full">
                {users.map((user)=>(
                    <div key={user.id} className="mr-5 border border-3 border-blue-300 rounded-xl">
                        <li className="list-none">
                            <h1 className="font-medium">{user.name}</h1>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                        </li>
                    </div>
                ))}
            </div>
            <div className="justify-content-center flex w-full">
                <span>{state.count}</span>
                <br />
                <button onClick={handleAdd} 
                    className="w-20 border-2 border-red-200 rounded-lg font-bold text-red-200">
                        +
                </button>
                <button onClick={handleMinus} 
                    className="w-20 border-2 border-green-200 rounded-lg font-bold text-green-200">
                        -
                </button>
                <button onClick={handleRs} 
                    className="w-20 border-2 border-yellow-200 rounded-lg font-bold text-yellow-200 hover:border-black hover:bg-yellow-200 hover:text-black">
                        Rs
                </button>
            </div>
        </>
    )
}
export default Api;