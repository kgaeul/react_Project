import React from "react";

function Header(){
    return(
        <div>
            <header>
                <h1>My Website</h1>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;