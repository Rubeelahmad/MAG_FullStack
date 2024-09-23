"use client";
import React from "react";
import styles from "./BookSchedule.module.scss";
import Button from "../../Button";

const BookSchedule = () => {
  return (
    <form className={styles.formproup}>
      <div className={styles.formItem}>
        <label htmlFor="name">Fullname</label>
        <input type="text" id="name" className={styles.inputBox} />
      </div>
      <div className={styles.formItem}>
        <label htmlFor="name">Email address</label>
        <input type="text" id="name" className={styles.inputBox} />
      </div>
      <div className={`${styles.formItem} ${styles.policy}`}>
        <input id="policy" type="checkbox" className="" />
        <label htmlFor="policy" className="ml-2 block text-gray-900">
          I consent to my details being processed in line with the privacy
          policy.
        </label>
      </div>
      <div className={styles.formButton}>
        <Button
          btntext="Book your demo"
          btntype="primary"
          btnAction={() => false}
        />
        <Button
          btntext="Start a free trial"
          btntype="secondary"
          btnAction={() => false}
        />
      </div>
      <div className={styles.formNote}>Free 14-day trial. Cancel anytime.</div>
   
    </form>
  );
  
};

export default BookSchedule;
