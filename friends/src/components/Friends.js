import React, { useEffect, useState } from "react"
import axiosWithAuth from "../utils/axiosWithAuth";
import Friend from "./Friend";

    const initialValue = {
        name:'',
        age:'',
        email:'',
        id:''
    }

const Friends = (props) => {

    const [friends, setFriends] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const [formValues, setFormValues] = useState(initialValue)
    useEffect(() => {
        axiosWithAuth()
        .get("/friends")
        .then(res => {
            setFriends(res.data)
            setLoading(false);
        })
        .catch(err => console.log(err))
    },[])

    const handleChange = (e) => {
        setFormValues({
            ...formValues, 
            [e.target.name]: e.target.value
        })
        // console.log(credentials)
    }

    let initialId = 7

    const addFriend = () => {
        const newFriend = {...formValues, id: initialId}
        axiosWithAuth()
        .post("/friends", newFriend)
        .then(res => {
        console.log(friends)
        initialId ++;
        setFormValues(initialValue)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        console.log(friends)
    }, [friends])

    return (
        <div>
            <form onSubmit={addFriend} >
            <label>
                Name:
                <input onChange={handleChange} type='text' name='name' value={formValues.name} />
            </label>
            <label>
                Age:
                <input onChange={handleChange} type='number' name='age' value={formValues.age} />
            </label>
            <label>
                Email:
                <input onChange={handleChange} type='emaail' name='email' value={formValues.email} />
            </label>
            <button type="submit">Add Friend</button>
            </form>
            <div>
                {isLoading && <h2>Please Wait For Your Friends!</h2>}
                {friends.map((friend, idx) => <Friend key={idx} friend={friend} friends={friends}/>)}
            </div>
        </div>
    )
}

export default Friends