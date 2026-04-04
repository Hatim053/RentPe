import styles from '../../styles/header.module.css'
import webisteLogo from '../../assets/websiteLogo.png'
import chatIcon from '../../assets/chatIcon.png'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from "react-router-dom"
import { redirectHome, redirectLogout, redirectProfile, redirectPostAd, redirectchat } from '../../utitlies/utilities.js'
import SearchBar from '../SearchBar/SearchBar.jsx'

function Header() {

    const loggedInUser = useSelector(state => state.loggedInUser.loggedInUserData);
    const navigate = useNavigate();

    return (
        <>
            <header className={styles.header}>
                <img src={webisteLogo} alt="" className={styles.logo} onClick={() => redirectHome(navigate)} />
                <SearchBar />
                <div className={styles.controlls}>
                    <button className={styles.profileBtn} onClick={() => redirectProfile(loggedInUser, navigate)} title="Profile">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                        </svg>
                    </button>
                    <button className={styles.chatBtn} title="Chat" onClick={() => redirectchat(loggedInUser, navigate)}>
                        <img src={chatIcon} alt="" />
                    </button>
                    {loggedInUser && <button className={styles.logoutBtn} onClick={() => redirectLogout(loggedInUser, navigate)}>Logout
                    </button>}
                    {!loggedInUser && <Link to='/user-login' className={styles.loginBtn} >Login</Link>}
                    <button className={styles.sellBtn} onClick={() => redirectPostAd(loggedInUser, navigate)}>
                        Rent Out Now
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header