import React, { useState } from "react";
import styles from "./paymentHistory.module.css";

const PaymentHistory = () => {
  const [selected, setSelected] = useState(null);

  const transactions = [
    {
      id: "TXN1123",
      amount: "₹1,200",
      status: "Success",
      date: "24 Nov 2025",
      mode: "UPI",
      currency: "INR",
    },
        {
      id: "TXN1123",
      amount: "₹1,200",
      status: "Success",
      date: "24 Nov 2025",
      mode: "UPI",
      currency: "INR",
    },
        {
      id: "TXN1123",
      amount: "₹1,200",
      status: "Success",
      date: "24 Nov 2025",
      mode: "UPI",
      currency: "INR",
    },
    {
      id: "TXN1124",
      amount: "₹650",
      status: "Pending",
      date: "19 Nov 2025",
      mode: "UPI",
      currency: "INR",
    },
    {
      id: "TXN1125",
      amount: "₹800",
      status: "Failed",
      date: "13 Nov 2025",
      mode: "UPI",
      currency: "INR",
    },
        {
      id: "TXN1123",
      amount: "₹1,200",
      status: "Success",
      date: "24 Nov 2025",
      mode: "UPI",
      currency: "INR",
    },
        {
      id: "TXN1123",
      amount: "₹1,200",
      status: "Success",
      date: "24 Nov 2025",
      mode: "UPI",
      currency: "INR",
    },
        {
      id: "TXN1123",
      amount: "₹1,200",
      status: "Success",
      date: "24 Nov 2025",
      mode: "UPI",
      currency: "INR",
    },
        {
      id: "TXN1123",
      amount: "₹1,200",
      status: "Success",
      date: "24 Nov 2025",
      mode: "UPI",
      currency: "INR",
    },
        {
      id: "TXN1123",
      amount: "₹1,200",
      status: "Success",
      date: "24 Nov 2025",
      mode: "UPI",
      currency: "INR",
    },
        {
      id: "TXN1123",
      amount: "₹1,200",
      status: "Success",
      date: "24 Nov 2025",
      mode: "UPI",
      currency: "INR",
    },
        {
      id: "TXN1123",
      amount: "₹1,200",
      status: "Success",
      date: "24 Nov 2025",
      mode: "UPI",
      currency: "INR",
    },
  ];

  const openDetails = (txn) => setSelected(txn);
  const closePopup = () => setSelected(null);

  const getStatusClass = (status) => {
    if (status === "Success") return styles.success;
    if (status === "Pending") return styles.pending;
    return styles.failed;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.pageTitle}>Last-Transactions</h2>

      
      <div className = {styles['outer-container']}>
        <div className={styles.tableWrapper}>
        <table className={styles.paymentTable}>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr
                key={txn.id}
                className={styles.transactionRow}
                onClick={() => openDetails(txn)}
              >
                <td>{txn.id}</td>
                <td>{txn.amount}</td>
                <td>
                  <span className={`${styles.tag} ${getStatusClass(txn.status)}`}>
                    {txn.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>

      {selected && (
        <div className={`${styles.detailsPopup} ${styles.show}`}>
          <div className={styles.detailsContent}>
            <span className={styles.closeBtn} onClick={closePopup}>
              &times;
            </span>
            <h3>Transaction Details</h3>
            <div className={styles.details}>
              <p>
                <strong>Transaction ID: </strong> {selected.id}
              </p>
              <p>
                <strong>Amount: </strong> {selected.amount}
              </p>
              <p>
                <strong>Status: </strong> {selected.status}
              </p>
              <p>
                <strong>Date: </strong> {selected.date}
              </p>
              <p>
                <strong>Mode: </strong> {selected.mode}
              </p>
              <p>
                <strong>Currency: </strong> {selected.currency}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory
