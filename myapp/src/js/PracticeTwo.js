import React,{useEffect,useCallback,useState} from "react";

    function PracticeTwo(){

        const [count,setCount]=useState(1);

        const [todos,setTodos]=useState([]);
        const[newTodo,setNewTodo]=useState([]);

      
        const increament=()=>{setCount(count+1);};

        const addTodo=()=>{
            setTodos([...todos,newTodo]);
            setNewTodo('');
            setCount(count+1);
        }

        const removeTodo=(index)=>{
            const updateTodos=[...todos];
            updateTodos.splice(index,1);
            setTodos(updateTodos);
            setCount(count-1);
        }

        useEffect(()=>{
            document.title=`${count}`;
        },[count]);
             

        return(
            <div>
                <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
                <button onClick={addTodo}>등록하기</button>
               <ul>
                    {todos.map((todo,index)=>(
                        <li key={index}>
                            {todo}
                            <button onClick={()=>removeTodo(index)}>삭제하기</button>
                        </li>
                    ))}
               </ul>
            </div>
        )

    }

export default PracticeTwo;