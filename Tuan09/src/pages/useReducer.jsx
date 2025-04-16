import { useReducer } from "react"

function BtUseReducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0 })


    function reducer(state, action) {
        switch (action.type) {
            case "+":
                return { ...state, count: state.count + 1 }
            case "-":
                return { ...state, count: state.count - 1 }
            case "rs":
                return { ...state, count: 0 }
        }
    }

    const handleInc = () => {
        dispatch({ type: "+" });
    }


    const handleDec = () => {
        dispatch({ type: "-" });
    }
    return (
        <>
            <div className="w-50">
                <div className="font-bold ">
                    UseReducer
                </div>
                <div className="text-center align-middle align-items-center h-10 mb-3 rounded-lg border border-blue-300">
                    <span>{state.count}</span>
                </div>
                <div className="flex">
                    <button onClick={handleInc}
                        className="w-25 border-2 border-red-200 rounded-lg font-bold text-red-200">
                        +
                    </button>
                    <button onClick={handleDec}
                        className="w-25 border-2 border-green-200 rounded-lg font-bold text-green-200">
                        -
                    </button>
                </div>
            </div>
        </>
    )
}
export default BtUseReducer 