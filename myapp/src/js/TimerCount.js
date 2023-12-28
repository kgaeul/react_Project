//TimerCount.js
import React,{useState,useEffect} from "react";

function Timer(){

const [count, setCount]=useState(0);
useEffect(()=>{
    document.title=`남은티켓?${count}`;
})


const increament=()=>{
    setCount(count-1);
}

    return(
        <div>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>증가!!!!</button>
            <button onClick={increament}>감소!!!!</button>
        </div>
    )
}

export default Timer;

