import React, {useState, useEffect} from "react";
import axios from "axios";
// import { config } from "dotenv";


//Create context
export const UserContext = React.createContext()

//Axios Interceptor to add authorization header for every request that uses userAxios, lets us
// get past jwt on the backend
const userAxios = axios.create()

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
        workouts: [],
        errMsg: ""
    }


    const [userState, setUserState]= useState(initialState)
    const [allWorkouts, setAllWorkouts] = useState([]) 
    const [workoutList, setWorkoutList] = useState([]) 
    console.log(allWorkouts)


    //Sign up function

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

    //login

    function login(credentials){
        axios.post("/auth/login", credentials)
        .then(res => {
            //update user state & set local storage
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getUserWorkouts()
            getAllWorkouts()
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token

            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))

    }
// Logout
    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            workouts: []

        })
    }
//Err message handling
    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))

    }
// reset err message
    function resetAuthErr(){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }
// Get user workouts 

    function getUserWorkouts(){
        userAxios.get("/api/workouts/user")
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                workouts: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    //  post
 function postWorkout(newWorkout){
        userAxios.post("/api/workouts", newWorkout)
        .then(res => {
        setUserState(prevState => ({
        ...prevState,
        workouts: [...prevState.workouts, res.data]
        }))
    })
    .catch(err => console.log(err.response.data.errMsg))
  
}


// Get all workoutlists
function getWorkoutList(){
  userAxios.get("/list") //
  .then(res => setWorkoutList(res.data))
  .catch(err => console.log(err.response.data.errMsg))// errMsg set up in server
}

function getAllWorkouts(){
    userAxios.get("/api/workouts")
    .then(res => setAllWorkouts(res.data))
    .catch(err => console.log(err))
}

useEffect(() => {
  getWorkoutList()
  getAllWorkouts()
  },[] ) // this will only fire once since the dependency is an empty array




    return (
        <UserContext.Provider value={{
            ...userState,
            signup,
            login,
            logout,
            postWorkout,
            getUserWorkouts,
            resetAuthErr,
            getWorkoutList,
            getAllWorkouts,
            allWorkouts,
            workoutList
            
        }}>
            {props.children}
        </UserContext.Provider>
    )
       
}