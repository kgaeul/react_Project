import React, { useEffect, useState } from "react";

function Board(){

    //만약 로컬 스토리지에 저장된 값이 있으면 로컬 스토리지에서 게시글 데이터 불러오기
    //만약 저장된 게시글이 없으면 [] 빈 배열 가지고 옴 
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];

    //게시글 목록관리
    const [posts,setPosts]=useState(savedPosts);

    //새로운 게시글 입력받기
    const [newPost,setNewPost]=useState('');

    //페이지가 로딩될 때 게시글이 업데이트 될 때 로컬 스토리지에 저장
    useEffect(()=>{
        localStorage.setItem('posts',JSON.stringify(posts));
    },[posts]);


    //새로운 게시글 추가함수
    const addPost = () => {
        setPosts([...posts,newPost]);
        setNewPost('');

        //입력된 게시글을 로컬 스토리지에 저장
        //localStorage 밑에 Item과 setItem 존재함
        //'posts'키에 현재 게시글 목록과 새로운 게시글을 추가한 배열을 JSON 문자열로 변환해서 저장
    localStorage.setItem('posts',JSON.stringify([...posts,newPost]));

    }

    const removeTodos=(index)=>{
        const deleteTodos = [...posts];

        deleteTodos.splice(index,1);
        setPosts(deleteTodos);
        localStorage.setItem('posts',JSON.stringify(deleteTodos));

    }
    /*
    게시글 삭제하기
    todoList 할일 목록 유지할 수 있도록 추가해주기
    */
    return(
        <div>
            <h1>게시팡</h1>
            <div>
                <textarea required placeholder="팡파파라파라팡팡팡" value={newPost} onChange={(e)=>setNewPost(e.target.value)} >
                </textarea>
                <button onClick={addPost}>게시글 추가</button>
                <h2>게시글 목록</h2>
                <ul>
                    {posts.map((post,index)=>(
                         <li key={index}>{post}
                          <button onClick={removeTodos}>삭제하기</button>
                         </li>
                    ))}
                </ul>
        
            </div>
        </div>
    )
}

export default Board;