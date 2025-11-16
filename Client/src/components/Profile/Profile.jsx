import { useState } from "react"
import styles from "./profile.module.css"




function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    username: "hatim_hussain",
    fullname: "Hatim Hussain",
    email: "hatim@example.com",
    accountType: "User",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Here you can send API request to save profile
  };

  return (
    <div className = {styles.profileContainer}>
      <div className = {styles.profileCard}>
        <h2  className = {styles.profileTitle}>My Profile</h2>

        <p  className = {styles.memberSince}>Member since: <span>January 2024</span></p>

        {/* Profile Image Section */}
        <div  className = {styles.profileImageSection}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="Profile"
            id="profile-pic"
          />
          <label htmlFor="file-upload"  className = {styles.uploadBtn}>Change Photo</label>
          <input type="file" id="file-upload" hidden />
        </div>

        {/* FORM START */}
        <form className = {styles.profileForm} onSubmit={handleSave}>
          <div className = {styles.formGroup}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </div>

          <div className = {styles.formGroup}>
            <label>Full Name</label>
            <input
              type="text"
              name="fullname"
              value={profile.fullname}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </div>

          <div className = {styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </div>

          <div className = {styles.formGroup}>
            <label>Account Type</label>
            <select
              name="accountType"
              value={profile.accountType}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option>User</option>
              <option>Seller</option>
            </select>
          </div>

          <div className = {styles.changePassword}>
            <button type="button" className = {styles.passwordBtn}>Change Password</button>
          </div>

          <div className = {styles.btnSection}>
            <button
              type="button"
             
              className = {styles.editBtn}
              onClick={() => setIsEditing(true)}
              disabled={isEditing}
            >
              Edit Profile
            </button>

            <button
              type="submit"
         
              className = {styles.saveBtn}
              disabled={!isEditing}
            >
              Save Changes
            </button>
          </div>
        </form>

        {/* Seller redirect */}
        <div className = {styles.becomeSeller}>
          <p>Want to list your products for rent?</p>
          <a href="/seller/signup" className = {styles.sellerBtn}>Become a Seller</a>
        </div>
      </div>
    </div>
  );
}


export default Profile