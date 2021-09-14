import React from "react";

const FriendDetails = (props) => {
    const {friend, history} = props;

    const handleClick = () => {
        history.push('/friends')
    }

    return(
        <div className="friend">
            <h2>{friend.name}</h2>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
            <button onClick={handleClick}>Back</button>
        </div>
    )
}

export default FriendDetails;