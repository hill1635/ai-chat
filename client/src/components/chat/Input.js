import React from "react";

function Input(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.setUserResponse(e.target.previousSibling.value);
    }

    return (
        <form className="input">
            <input className="text" type="text" placeholder="Type a message..." />
            <button className="sendBtn" type="submit" onClick={(e) => handleSubmit(e)}>Send</button>
        </form>
    );
}

export default Input;