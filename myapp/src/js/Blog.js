import React, { useEffect, useState } from "react";


function Blog (){

    const savePosts = JSON.parse(localStorage.getItem('posts')) || [];
    const [posts,setPosts] = useState(savePosts);
    const[newPosts,setNewPost]=useState('');
    const [editIndex,seteditIndex]=useState(null);
    const[editPost,seteditPost]=useState('');

    useEffect(()=>{
        localStorage.setItem('posts',JSON.stringify(posts));
    },[posts])

    const addPost=()=>{
        setPosts([...posts,newPosts]);
        setNewPost('');

        localStorage.setItem('posts',JSON.stringify([...posts,newPosts]));
    }

    const removePosts =(index)=>{
        const deletePosts = [...posts];

        deletePosts.splice(index,1);
        setPosts(deletePosts);

        localStorage.setItem('posts',JSON.stringify(deletePosts));

    }

    //수정하러 가기기
    const startediting=(index,posts)=>{
        seteditIndex(index);
        seteditPost(posts);
    }

    //수정 저장하기
    const saveEdit=()=>{
        const updatePost = [...posts];

        updatePost[editIndex] = editPost;
        setPosts(updatePost);
        seteditIndex(null);
    }

     //수정 취소하기
    const cancleEdit=()=>{
        seteditIndex(null);
        seteditPost('');
    }

    return(
        <div>
            <h1>내블로그</h1>
         <div>
            <input type="text" value={newPosts} onChange={(e)=>setNewPost(e.target.value)}required />
            <button onClick={addPost}>작성하기</button>
            <ul>
            {posts.map((post,index)=>(
                <li key={index}>
                    {editIndex===index ? (
                        <div>
                            <input type="text" value={editPost} onChange={(e) => seteditPost(e.target.value)} />
                            <button onClick={saveEdit}>수정</button>
                            <button onClick={cancleEdit}>취소</button>
                        </div>
                    ) : (
                        <div>
                            {post}
                            <button onClick={()=>startediting(index,post)}>수정하기</button>
                            <button onClick={removePosts}>삭제하기</button>
                        </div>
                    )}
                </li>
            ))}          
            
          </ul>
          </div>
        </div>
    )

}

export default Blog;