import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../components/redux/counterSlice.js";

function BtReduxToolkit(){
    const count = useSelector((state) => state.counter.value)
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
                    <button onClick={() => dispatch(increment())}
                        className="w-25 border-2 border-red-200 rounded-lg font-bold text-red-200">
                        +
                    </button>
                    <button onClick={() => dispatch(decrement())}
                        className="w-25 border-2 border-green-200 rounded-lg font-bold text-green-200">
                        -
                    </button>
                </div>
            </div>
        </>
    )
}
export default BtReduxToolkit