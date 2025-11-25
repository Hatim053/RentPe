import React from "react"
import styles from "./sidebar.module.css"
import { FaHome, FaUserCircle, FaMoneyCheckAlt, FaHistory, FaSignOutAlt } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Sidebar = ({ activeMenu, setActiveMenu , loggedInUser}) => {
  const navigate = useNavigate();

  const handleMenuClick = (menu, route) => {
    setActiveMenu(menu)
    navigate(route)
  };

  return (
    <div className={styles.sidebar}>

      <div className={styles.menu}>
        <div
          className={`${styles.menuItem} ${activeMenu === "home" ? styles.active : ""}`}
          onClick={() => handleMenuClick("home", "/home")}
        >
          <FaHome size={20} /> Home
        </div>

        <div
          className={`${styles.menuItem} ${activeMenu === "account-info" ? styles.active : ""}`}
          onClick={() => handleMenuClick("account-info", "/profile-feed/account-info")}
        >
          <FaUserCircle size={20} /> Account Info
        </div>

        <div
          className={`${styles.menuItem} ${activeMenu === "subscription" ? styles.active : ""}`}
          onClick={() => handleMenuClick("subscription", "/profile-feed/subscription")}
        >
          <FaMoneyCheckAlt size={20} /> Subscription
        </div>

        <div
          className={`${styles.menuItem} ${activeMenu === "transactions" ? styles.active : ""}`}
          onClick={() => handleMenuClick("transactions", "/profile-feed/payment-history")}
        >
          <FaHistory size={20} /> Last Transactions
        </div>
      </div>

      <button className={styles.logoutBtn} onClick={() => {
        navigate(`/${loggedInUser.accountType}-login`)
      }}>
        <FaSignOutAlt size={18} style={{ marginRight: "8px" }} />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;

