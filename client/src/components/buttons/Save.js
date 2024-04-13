import React from "react";
import UserAPI from "../../utils/UserAPI";

function Save(props) {

    const save = () => {
        UserAPI.update(props.user, props.data)
            .catch((err) => {
                console.log('err', err);
            });
    }
    return (
        <button onClick={save}>Save</button>
    );
}

export default Save;