import { useDispatch, useSelector } from "react-redux"
import React from "react";
function BtRedux() {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch();

    return (
        <>
            <div className="w-50">
                <div className="font-bold ">
                    Redux
                </div>
                <div className="text-center align-middle align-items-center h-10 mb-3 rounded-lg border border-blue-300">
                    <span>{count}</span>
                </div>
                <div className="flex">
                    <button onClick={() => dispatch({type: "INCREMENT"})}
                        className="w-25 border-2 border-red-200 rounded-lg font-bold text-red-200">
                        +
                    </button>
                    <button onClick={() => dispatch({type: "DECREMENT"})}
                        className="w-25 border-2 border-green-200 rounded-lg font-bold text-green-200">
                        -
                    </button>
                </div>
            </div>
        </>
    )
}
export default BtRedux