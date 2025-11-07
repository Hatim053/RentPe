import { React , useState } from "react"
import styles from "./sellerSignup.module.css"

function SellerSignup() {

const [selectedCategories, setSelectedCategories] = useState([])

  const categories = [
    "furniture",
    "utensils",
    "properties",
    "electronics",
    "lighting",
    "catering",
    "decoration",
    "tent",
  ];

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedCategories((prev) => [...prev, value]);
    } else {
      setSelectedCategories((prev) => prev.filter((item) => item !== value));
    }
  };


    return (
        <div className={styles.wrapper}>
            <div className={styles.titleText}>
                <div className={styles.title}>Register Seller</div>
            </div>

            <div className={styles.formContainer}>
                <div className={styles.formInner}>
                    <form className={styles.signup}>
                        <div className={styles.field}>
                            <input type="text" placeholder="Full Name" required />
                        </div>

                        <div className={styles.field}>
                            <input type="email" placeholder="Email Address" required />
                        </div>

                        <div className={styles.field}>
                            <input type="text" placeholder="Username" required />
                        </div>

                        <div className={styles.field}>
                            <input type="number" placeholder="Enter Your Number" required />
                        </div>

                        <div className={styles.field}>
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div className={styles.field}>
                            <input type="text" placeholder="Enter Your City" required />
                        </div>
                
                         <div className={styles.field}>
              <label className={styles.categoryLabel}>Choose Your Business Category:</label>
              <div className={styles.categoryOptions}>
                {categories.map((category, index) => (
                  <label key={index} className={styles.categoryOption}>
                    <input
                      type="checkbox"
                      value={category}
                      onChange={handleCheckboxChange}
                      checked={selectedCategories.includes(category)}
                    />
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </label>
                ))}
              </div>
            </div>

                        <div className={`${styles.field} ${styles.btn}`}>
                            <div className={styles.btnLayer}></div>
                            <input type="submit" value="Signup" />
                        </div>

                        <div className={styles.signupLink}>
                            Already have an account? <a href="#">Login now</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SellerSignup
