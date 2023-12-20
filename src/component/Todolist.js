import React, {useState,useEffect}  from 'react';
import '../Todolist.css';
import tree from '../img/bf82c1e7-4158-43e8-b241-eac81a8b5241.jpg';



const Todolist = () =>  {

  //todos 초기값을 빈 배열로 생성하겠다는 의미

  //todos는 할일 목록을 저장하는 공간
    const [todos, setTodos] = useState(['메이플하기','쿠키런하기']);

    //newTodo는 새로운 할일을 추가 작성할 수 있는 공간
    const [newTodo, setNewTodo] = useState('');

    //할일이 추가될 때마다 추가할 수 있는 const 생성
    const addTodo=() => {
        if(newTodo.trim() !== ''){
        // setTodos([...todos,newTodo]) 현재 입력되어 있는 할일 목록
        //배열인 todos를 복사해서 복사한 todos에 새로운 할일인 newTodo를 배열에 추가한 후 할 일 목록 설정에 newTodo가 추가된 목록으로 최종 설정해주기 위한 setTodos

        setTodos([...todos,newTodo]);

      //저장된 할일 목록을 초기화 시켜주기 위해 setNewTodo를 초기화 시켜줌
        setNewTodo('');
      }
    };

  const removeTodo = (index) => {
    //현재 할 일 목록 배열을 복사
      const updateTodos = [...todos]
    // 복사된 배열에서 지정된 자리값(index)를 제거하겠다는 의미
    //updateTodos:복사된 배열
    //slice :제거

      updateTodos.splice(index,1);
      //내가 제거하고 싶은 할일을 제거한 후 setTodos를 활용해서 할일 목록을 재설정
      setTodos(updateTodos);
  };

  //할 일을 삭제할 때마다 삭제할 수 있는 const 생성

  /*
  //일반 함수 형태
  arr.map(function(item, index) {
      console.log(index+"번 값", item);
  });

  //화살표 함수 형태
  arr.map((item, index) => {
      console.log(index+"번 값", item);
  });
  */

  useEffect( () =>{
    console.log('todos 변경됨 : ',todos);
  } ,[todos]);

  return (
    <div>
      <img src={tree}></img>
      <h2>useState를 활용한 TodoList</h2>
      <div id="todolist">  
        <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
        &nbsp;
        <button onClick={addTodo}>댓글등록</button>
        <ul>
         {todos.map((todo,index)=>(
          <li id="today" key={index}>
            {todo}
            <button id="btn" onClick={addTodo}>수정하기</button>
            &nbsp;&nbsp;
            <button onClick={()=>removeTodo(index)}>삭제하기</button>
            <hr></hr>
          </li>
         ))} 
        </ul>
      </div>
    </div>
  );
};

export default Todolist;


//my-app
/*


const newArray = array.map((value,index,array)=>{});

{todos.map((todo,index)=>(
  //key={index} map 함수로 요소를 생성할 때 각 요소에 고유한 key 값을 지정
  //react 각 값에 대한 번호를 부여함으로써 목록을 부여된 번호로 추적하기 위해 사용됨
  <li key={index}>
    {todo}
    <button onClick={()=>removeTodo}>삭제하기</button>
  </li>
))}
/*
array.map((요소,자리값,만약 새로운 배열이 필요하다면 배열 값 넣어줌))
*/

//value : 현재 배열 안에 있는 배열의 요소
//index : 배열 안에 있는 자리값
//array : 배열의 원본
//반환값 : 새로운 배열에서 해당하는 인덱스에 들어갈 값