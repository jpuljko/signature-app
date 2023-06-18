import React from "react";
import Title from "./components/Title";

export default function EsignatureApp() {

    const inputStyle ={
        border: "none",
        borderBottom: '2px dotted',
        outline: "none",
        padding: ".35rem 0",
    };
    document.body.style.background = "#eee";
    return (
        <div className='container text-center'>
            <Title classes={"title"} text={"Name"} />
            <Title classes={"main-title"} text={"Date"} />
            <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <footer
                className="d-flex"
                style={{
                    position: "relative", 
                    top: "40vh"
                }}
            >
                <input type="date" value={""} style={inputStyle}></input>
                <input type="text" value={""} style={inputStyle}></input>
            </footer>
            
        </div>
    )
}