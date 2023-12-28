import React,{useCallback,useState} from "react";

function ExamCallBack(){


    const [count,setCount] = useState(1);

    const increaClick = useCallback(()=>{
        setCount(count+1);
    },[count]);

    /*
    useCalback : 호출되었을때만 돌아감
    useEffect :계속 대기하는애
    
    */

    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={increaClick}>증가하기</button>
        </div>
    )
}

export default ExamCallBack;
