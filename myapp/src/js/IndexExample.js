import React,{useState} from "react";

function IndexExample(){

    const [inputText,setInputText] = useState('');
                                    //빈글자를 나타낼때는  ' '," "를 사용한다.

    const handleChange = (e) => {
        setInputText(e.target.value);
        /*
        (버튼틀)
        e.target.value
        e: 사용자가 입력하거나 선택했을 때 어떤 입력값을 입력하고 선택했는 지를 담기위한 객체에 속함

        target: 사용자가 작성하거나 입력한 html 입력란을 나타냄
        value: 사용자가 입력한 값을 가져옴
        */
    }
    return(
        <div>{/*==<html>태그*/}
            <input type="text" value={inputText} onChange={handleChange} required/>
            <p>내가작성한 글 : {inputText}</p>
            <input type="month" />
            <input type="range"  />
        </div>
    )
}

export default IndexExample;