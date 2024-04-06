import React, {useState} from "react";
import axios from "axios";
import { config } from "dotenv";


export const UserContext = React.createContext()

const userAxios = axios.create()

//axios interceptor to add authorization header for every request that uses userAxios
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config

})

export default function UserProvider(props){

    const initialState = {
        //inital state is checking local storage first so user stays logged in if they had logged in
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("token") || "",
        issues: [],
        errMsg: ""
    }

    const [userState, setUserState]= useState(initialState)
    // const [allIssues, setAllIssues] = useState([]) //check ?
    // const [allComments, setAllComments] = useState([])
    // const [comments, setComments] = useState([])

    function signup(credentials){
        axios.post("/auth/signup", credentials)
        .then(res => {
            //update user state & set local storage
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token

            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))

    }
    function login(credentials){
        axios.post("/auth/login", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getUserIssues()
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token

            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))

    }

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            issues: []

        })
    }

    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))

    }

    function resetAuthErr(){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }



    return (
        <UserContext.Provider
            value = {{
                ...userState,
                signup,
                login,
                logout,
                addIssue, 
                resetAuthErr,
                
            }}>
                {props.children}

        </UserContext.Provider>
    )
}