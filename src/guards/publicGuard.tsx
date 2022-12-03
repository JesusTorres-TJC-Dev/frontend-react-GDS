import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { Footer, NavBar } from "../components"
import { AppStore } from "../redux/store"


const publicGuard = () => {
    const userState = useSelector((store: AppStore) => store.user)
    return userState && <><NavBar/> <Outlet /> <Footer/></>
}

export default publicGuard