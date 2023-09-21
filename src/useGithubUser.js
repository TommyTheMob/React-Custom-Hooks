import {useState, useEffect} from "react";

export const useGithubUser = (userId) => {
    const [state, setState] = useState({
        data: null,
        error: null,
        isLoading: true
    })

    useEffect(() => {
        fetch(`https://api.github.com/users/${userId}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }

                throw new Error()
            })
            .then(userData => {
                setState({
                    data: userData,
                    error: null,
                    isLoading: false
                })
            })
            .catch(err => {
                setState({
                    ata: null,
                    error: err,
                    isLoading: false
                })
            })
    }, [userId])

    return state
}
