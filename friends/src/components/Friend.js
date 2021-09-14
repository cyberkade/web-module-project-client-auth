import React from "react";

const Friend = (props) => {
    const {friend} = props;

    return(
        <div className="friend">
            <h2>{friend.name}</h2>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
        </div>
    )
}

export default Friend