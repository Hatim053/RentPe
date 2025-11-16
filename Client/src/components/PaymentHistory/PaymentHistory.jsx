import React from "react"
import styles from './PaymentHistory.module.css'


function PaymentHistory() {


  return (
    <>
        <div className = {styles.container}>
        <h1>your transaction records</h1>
      <div className = {styles.cont}>
                <div  className = {styles.left}>
              <a href="">profile</a>
             <div className = {styles.sepration}></div>
              <a href="">payments</a>
              <div className = {styles.sepration}></div>
              <a href="">subscription</a>
             <div className = {styles.sepration}></div>
              <a href="">my Ads</a>
             <div className = {styles.sepration}></div>
        </div>
        <div className = {styles.right}>
            <div className = {styles.data}>
                <div className = {styles.heading}>
                    <span>transaction id</span>
                    <span>amount</span>
                    <span>status</span>
                    <span>date</span>
                </div>
                <ul>
                           <li>
                        <span>jboihoy8980-80-80i</span>
                    <span>$590</span>
                    <span>success</span>
                    <span>01-nov</span>
                    
                    </li>  <li>
                        <span>jboihoy8980-80-80i</span>
                    <span>$590</span>
                    <span>success</span>
                    <span>01-nov</span>
                    
                    </li>  <li>
                        <span>jboihoy8980-80-80i</span>
                    <span>$590</span>
                    <span>success</span>
                    <span>01-nov</span>
                    
                    </li>  <li>
                        <span>jboihoy8980-80-80i</span>
                    <span>$590</span>
                    <span>success</span>
                    <span>01-nov</span>
                    
                    </li>  <li>
                        <span>jboihoy8980-80-80i</span>
                    <span>$590</span>
                    <span>success</span>
                    <span>01-nov</span>
                    
                    </li>  <li>
                        <span>jboihoy8980-80-80i</span>
                    <span>$590</span>
                    <span>success</span>
                    <span>01-nov</span>
                    
                    </li>  <li>
                        <span>jboihoy8980-80-80i</span>
                    <span>$590</span>
                    <span>success</span>
                    <span>01-nov</span>
                    
                    </li>  <li>
                        <span>jboihoy8980-80-80i</span>
                    <span>$590</span>
                    <span>success</span>
                    <span>01-nov</span>
                    
                    </li>  <li>
                        <span>jboihoy8980-80-80i</span>
                    <span>$590</span>
                    <span>success</span>
                    <span>01-nov</span>
                    
                    </li>  <li>
                        <span>jboihoy8980-80-80i</span>
                    <span>$590</span>
                    <span>success</span>
                    <span>01-nov</span>
                    
                    </li>  <li>
                        <span>jboihoy8980-80-80i</span>
                    <span>$590</span>
                    <span>success</span>
                    <span>01-nov</span>
                    
                    </li>  <li>
                        <span>jboihoy8980-80-80i</span>
                    <span>$590</span>
                    <span>success</span>
                    <span>01-nov</span>
                    
                    </li>  <li>
                        <span>jboihoy8980-80-80i</span>
                    <span>$590</span>
                    <span>success</span>
                    <span>01-nov</span>
                    
                    </li>  <li>
                        <span>jboihoy8980-80-80i</span>
                    <span>$590</span>
                    <span>success</span>
                    <span>01-nov</span>
                    
                    </li>
                           <li>
                        <span>jboihoy8980-80-80i</span>
                    <span>$590</span>
                    <span>success</span>
                    <span>01-nov</span>
                    
                    </li>
                           <li>
                        <span>jboihoy8980-80-80i</span>
                    <span>$590</span>
                    <span>success</span>
                    <span>01-nov</span>
                    
                    </li>
                           <li>
                        <span>jboihoy8980-80-80i</span>
                    <span>$590</span>
                    <span>success</span>
                    <span>01-nov</span>
                    
                    </li>
                </ul>
            </div>
            <div  className = {styles.detail}>
                {/* <!-- mode , currency , status , paymentid , date , amount --> */}
                 <div className = {styles.head}>
                    <span>
                       order no : #07
                    </span>
                    <span className = {styles.status}>success</span>
                 </div>
                 <h2>payment details : </h2>
                 <ul>
                    <li><span>transaction Id : </span><span> JBIiy868iuhkjbkj</span></li>
                    <li><span>amount : </span><span> $590</span></li>
                    <li><span>mode : </span><span> UPI</span></li>
                    <li><span>currency : </span><span> INR</span></li>
                    <li><span>date : </span><span> 01-nov</span></li>
                 </ul>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}


export default PaymentHistory