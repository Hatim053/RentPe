import { useState } from "react"
import styles from '../../styles/profileFeed.module.css'
import SideBar from './Sidebar.jsx'
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import Header from "../Header/Header.jsx"

function ProfileFeed() {
const [activeMenu, setActiveMenu] = useState("account-info")
  const loggedInUser = useSelector(state => state.loggedInUser.loggedInUserData)

    return (
        <>
        <Header />
        <div className={styles['container']}>
         <SideBar activeMenu = {activeMenu} setActiveMenu = {setActiveMenu} loggedInUser = {loggedInUser} />
        <Outlet />
        </div>
        </>
    )
}

export default ProfileFeed