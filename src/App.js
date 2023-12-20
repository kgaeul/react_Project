import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoList from './component/Todolist';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Blog from "./component/Blog";
function App (){
    return (
        <Router>
            <div>
                <Header />
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blog">블로그</Link>
                        </li>
                        <li>
                            <Link to="/todolist">오늘의할일</Link>
                        </li>
                    </ul>
                </nav>
       
                <Routes>
                 <Route path="/" element={<TodoList/>} />
                    <Route path="/blog" element={<Blog/>} />
                    <Route path="/todolist"  element={<TodoList/>} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}
export default App;