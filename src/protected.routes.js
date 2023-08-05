import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export default function ProtectedRoute ({
    children
}) {
    const { role} = useSelector(state => {
        return {
            role : state.auth.role
        }
    })
    return role === 1 ? children : <Navigate to="/" replace/>
    
}