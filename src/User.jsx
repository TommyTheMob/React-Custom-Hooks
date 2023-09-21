import React from "react";
import { useParams } from "react-router-dom";
import {useGithubUser} from "./useGithubUser";
import './user.scss'

const User = () => {
    const { userId } = useParams()
    const { data, error, isLoading } = useGithubUser(userId)

    if (isLoading) {
        return "Loading..."
    }

    if (error) {
        return "Error #@!^"
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