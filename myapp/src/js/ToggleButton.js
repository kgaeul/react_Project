import React,{useState} from "react";

function ToggleButton(){

const [isOn,setIsOn]=useState(false);

const toggle =() =>{
    setIsOn(!isOn);
}

    return(
        <div>
        {/*
        만약에 버튼이 true이면 글자로 On
        어떤값? true이면 나타날 상태
                false이면 나타날 상태
        */}
        
        <p>버튼 상태 : {isOn ? 'On' : 'Off'}</p>
        <button onClick={toggle}>버튼상태 변경하기</button>
        </div>
    )

}

export default ToggleButton;