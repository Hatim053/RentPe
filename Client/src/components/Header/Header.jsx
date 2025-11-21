import React from "react"
import styles from './header.module.css'
import logo from './ChatGPT Image Nov 11, 2025, 07_40_12 AM.png'
import chatIcon from './messenger.png'
import {useNavigate} from 'react-router-dom'
function Header() {
    const navigate = useNavigate()
  function redirectProfile() {
    navigate('/profile')
  }

  function redirectPostAd() {
    navigate('/postAdvertisement')
  }
    return (
        <>
                <header className = {styles.header}>
                    
            <img src={logo} alt="" className = {styles.logo}/>
            <div className = {styles.location}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"
                    role="img">
                    <title>Search</title>
                    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <circle cx="11" cy="11" r="7" />
                        <line x1="16.5" y1="16.5" x2="22" y2="22" />
                    </g>
                </svg>
                <input type="text" value="Mumbai"/>

            </div>
            <div className = {styles.searchBar}>
                <input type="text" placeholder="Search"/>
                <button className ={styles.svg}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                        aria-hidden="true" role="img">
                        <title>Search</title>
                        <g fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="7" />
                            <line x1="16.5" y1="16.5" x2="22" y2="22" />
                        </g>
                    </svg>

                </button>
            </div>
            <div className = {styles.controlls}>


                <button className = {styles.profileBtn} onClick = {redirectProfile} title="Profile">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                    </svg>
                </button>
                <button className = {styles.chatBtn} title="Chat">
                    <img src={chatIcon} alt=""/>
                </button>
                <button className = {styles.logoutBtn}>Logout
                </button>
                <button className = {styles.sellBtn} onClick = {redirectPostAd}>
                    Rent Out Now
                </button>
            </div>
        </header>
        </>
    )
}

export default Header