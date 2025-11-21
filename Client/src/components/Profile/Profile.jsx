import { useEffect, useState } from "react"
import styles from "./profile.module.css"
import { useSelector , useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addUser } from "../../user/userSlice"

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({});
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector(state => state?.loggedInUser);
  useEffect(() => {
    setProfile(user)

  } , [user])
  
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
    
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsEditing(false);
    const formData = new FormData(e.target)
    
   const response = await fetch('http://localhost:5000/seller/update' , {
    method : 'POST',
    credentials: "include",
    body : formData,
   })
   let data = await response.json()
   console.log(data)
   if(data.status == 200) {
    // console.log(data.user)
    dispatch(addUser(data))
    setProfile(data.user)
   }
    
  };

   
  function redirectPayment() {
    navigate('/payment')
  }

  const srcUrl = profile.profileImage ?? 'https://cdn-icons-png.flaticon.com/512/847/847969.png'
  return (
    <div className = {styles.profileContainer}>
      <div className = {styles.profileCard}>
        <h2  className = {styles.profileTitle}>My Profile</h2>

        <p  className = {styles.memberSince}>Member since: <span>January 2024</span></p>

        {/* Profile Image Section */}
        <div  className = {styles.profileImageSection}>
          <img
            src = {srcUrl}
            alt="Profile"
            id="profile-pic"
          />
          <label htmlFor="profileImage"  className = {styles.uploadBtn}>Change Photo</label>
          
        </div>

        {/* FORM START */}
        <form className = {styles.profileForm} onSubmit={handleSave}>
          <input type="file" id="profileImage" name ="profileImage" hidden />
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
              value={profile.fullName}
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
              <option>user</option>
              <option>seller</option>
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
          <a href="/seller-signup" className = {styles.sellerBtn}>Become a Seller</a>
        </div>
      </div>
      <div  className = {`${styles['plan-card']} ${styles['free-plan']} ${styles['active-plan']}`}>
                  <div  className = {styles['plan-header']}>
                      <h2  className = {styles['plan-title']}>Free Basic</h2>
                      <p  className = {styles['plan-tagline']}>Start exploring at no cost</p>
                  </div>
      
                  <div  className = {styles['plan-price']}>
                      <span  className = {styles['price-value']}>Free</span>
                  </div>
      
                  <ul className = {styles['plan-features']}>
                      <li  className = {styles['feature-item']}>
                          <span  className = {styles['check-icon']}>&#10003;</span>
                          **3** Advertisements per month
                      </li>
                      <li  className = {styles['feature-item']}>
                          <span  className = {styles['check-icon']}>&#10003;</span>
                          Basic analytics
                      </li>
                      <li  className = {styles['feature-item-excluded']}>
                          <span  className = {styles['check-icon']}>&#10003;</span>
                          Default Activated
                      </li>
                  </ul>
      
                  <button  className = {`${styles['plan-button']} ${styles['buy-now-button']}`} onClick = {redirectPayment} >Change Plan</button>
              </div>
    </div>
  );
}


export default Profile