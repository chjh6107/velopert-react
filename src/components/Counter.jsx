import { useReducer } from "react";

const reducer=(state,action)=>{
    switch(action.type){
    case "INCREMENT":
        return state+1;
    case "DECREMENT":
        return state-1;
    default:
        return state;
    }
}
const Counter=()=>{
    // const [number, setNumber] = useState(0);
    const [number,setNumber]=useReducer(reducer,0);
    const onIncrease=()=>{
        // setNumber(n=>n+1);
        setNumber({type:"INCREMENT"});
    }
    const onDecrease=()=>{
        // setNumber(n=>n-1);
        setNumber({type:"DECREMENT"});
    }
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}
export default Counter;