import axios from "axios";
import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import FriendDetails from "./FriendDetails";

const Friend = (props) => {
    const {friend, friends, history} = props;

    const handleClick = () => {
        axiosWithAuth()
        .get(`/friends/${friend.id}`)
        .then(res => {
            <FriendDetails friend={res.data}/>
        })
    }

    return(
        <div className="friend">
            <h2>{friend.name}</h2>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
            <button onClick={handleClick}>Details</button>
        </div>
    )
}

export default Friend