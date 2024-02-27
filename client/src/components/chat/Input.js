import React from "react";

function Input() {
    return (
        <form className="input">
            <input className="text" type="text" placeholder="Type a message..." />
            <button className="sendBtn" type="submit">Send</button>
        </form>
    );
}

export default Input;