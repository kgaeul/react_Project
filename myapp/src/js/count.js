import React,{useState} from 'react';

//증가시키는 함수

function AddCount(){

const [count,setCount] = useState(0);

const increament = () => {
    setCount(count+1);
}
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increament}>증가!!!!</button>
        </div>
    )

}

function Count(){

return(
    <div>
        {/*위에서 쓴 함수 import해오는 것!*/}
        <AddCount />

    </div>
)

}

export default Count;
