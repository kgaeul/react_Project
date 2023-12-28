import React,{useState,useEffect} from "react"
//Animal
//컴포넌트는 자바에서의 객체

function AnimalSound(){

const [animal, setAnimal]=useState("Cat");

useEffect(() =>{
    //연결될 때 바로 실행이 되는 부분
    console.log(`시작!! ${animal}:야용`)

    //안에 함수나 변수명을 사용하고자 한다면 '' " "

    //함수연결이 정리될 때(언마운트) 실행되는 함수
    return () => {
        console.log(`종료!! ${animal}`);
    };

/*
[animal] animal이라는 값이 변경될때마다 userEffect안에 작성한 내부 코드를 다시 실행하기 위해 작성
[] 추후에는 animal 하나만 들어있는 것이 아니라 여러변수들이 들어있을 수 있으므로 배열로 묶어주는 것
*/

},[animal]);//animal이 바뀔때마다 실행

const handleSound = (newAnimal) =>{
    setAnimal(newAnimal);
}

return(
    <div>
        <h1>동물 소리 앱</h1>
        <p>{animal} 소리는</p>
        <button onClick={()=>handleSound('cat')}>Cat</button>
        <button onClick={()=>handleSound('dog')}>dog</button>
        <button onClick={()=>handleSound('bird')}>Bird</button>
    </div>
)
}

export default AnimalSound