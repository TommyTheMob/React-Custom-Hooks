import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import './user.scss'

const useGithubUser = (userId) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${userId}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }

                throw new Error()
            })
            .then(userData => {
                setUserData(userData)
            })
    }, [userId])

    return userData
}

const User = () => {
    const { userId } = useParams()
    const data = useGithubUser(userId)


    if (!data) {
        return null
    }
    const { name, location, avatar_url } = data
    return (
        <div className="user">
            <img
                src={avatar_url}
                alt="User Avatar"
                className="user__avatar"
            />
            <div className="user__info">
                <span className="user__name">{ name }</span>
                <span className="user__location">{ location }</span>
            </div>
        </div>
    )
}


export default User