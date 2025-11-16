import React from "react"
import styles from './postAdvertisement.module.css'



function PostAdvertisement() {

    return (
        <>
        <div  className = {styles.mainWrapper}>
          <div  className = {styles.formContainer}>
    <h2>Post Your Ad</h2>
    <form action="/post-ad" method="POST" encType="multipart/form-data">
      <div  className = {styles.formGroup}>
        <label for="title">Ad Title</label>
        <input type="text" id="title" name="title" placeholder="Enter ad title" required />
      </div>

      <div className = {styles.formGroup}>
        <label for="serviceType">Service Type</label>
        <select id="serviceType" name="serviceType" required>
          <option value="">Select service type</option>
          <option value="Flat Rent">Flat Rent</option>
          <option value="PG/Hostel">PG / Hostel</option>
          <option value="Office Space">Office Space</option>
          <option value="Furniture">Furniture</option>
          <option value="Vehicle">Vehicle</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className = {styles.formGroup}>
        <label for="description">Description</label>
        <textarea id="description" name="description" placeholder="Describe your ad..." required></textarea>
      </div>

      <div className = {styles.formGroup}>
        <label for="city">City</label>
        <input type="text" id="city" name="city" placeholder="Enter city name" required />
      </div>

      <div className = {styles.formGroup}>
        <label for="address">Address</label>
        <textarea id="address" name="address" placeholder="Enter full address" required></textarea>
      </div>

      <div className = {styles.formGroup}>
        <label for="mobileNo">Mobile Number</label>
        <input type="tel" id="mobileNo" name="mobileNo" placeholder="Enter your mobile number" pattern="[0-9]{10}" required />
      </div>

      <div className = {styles.formGroup}>
        <label for="images">Upload Images</label>
        <input type="file" id="images" name="images" accept="image/*" multiple required />
      </div>

      <button type="submit" className = {styles.publishBtn}>Make Public</button>
    </form>
  </div>
</div>
        </>
    )
}
 


export default PostAdvertisement