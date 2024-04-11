import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props){
    const {token, children} = props
    return token ? children: <Navigate to="/"/> //if there is no token user will be routed to login page
       

      
}