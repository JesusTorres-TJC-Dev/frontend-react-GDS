import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { Footer, NavBar } from "../components"
import { Roles } from "../models"
import { Home } from "../pages"
import { AppStore } from "../redux/store"

interface Props {
    rol: Roles
}

const AuthGuard = ({rol}: Props) => {
    const userState = useSelector((store: AppStore) => store.user)
    console.log(userState)
    return userState.rol === rol ? <Outlet /> : <Home/>
}

export default AuthGuard