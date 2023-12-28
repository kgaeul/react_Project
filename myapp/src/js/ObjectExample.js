import React,{useState} from "react";

function ObjectExample(){
    const [person, setPerson] = useState({name:"KH",age:20});
    const updateAge=()=>{
        setPerson({...person, age : person.age + 1});
    }

    return(
        <div>
            <p>name:{person.name}</p>
            <p>age:{person.age}</p>
            <button onClick={updateAge}>나이올리기 버튼</button>
        </div>
    )
}
export default ObjectExample;