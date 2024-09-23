
"use client";
import React, { useState } from "react";
import styles from "./BookLeadDemo.module.scss";
import Button from "../../Button";


const BookLeadDemo = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    checkbox: false,
  });
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  // General change handler for all input fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    // Reset error when user interacts with the form
    setError("");

    // Dynamically update form data based on input type
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset error and success messages
    setError("");
    setSuccess("");

    try {
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        checkbox: formData.checkbox,
      };

      // Make API request to create a lead
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "An unexpected error occurred");
        return;
      }

      setSuccess(data.message || "Lead created successfully!");
      // Clear form fields after successful submission
      setFormData({
        fullName: "",
        email: "",
        checkbox: false,
      });

      setTimeout(() =>{
        setSuccess('');
      },3000)
    } catch (err) {
      console.error("Error submitting the form:", err);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <form className={styles.formproup} onSubmit={handleSubmit}>
      <div className={styles.formItem}>
        <label htmlFor="fullName">Fullname</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          className={styles.inputBox}
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formItem}>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.inputBox}
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className={`${styles.formItem} ${styles.policy}`}>
        <input
          id="policy"
          type="checkbox"
          name="checkbox"
          className={styles.checkBoxClick}
          checked={formData.checkbox}
          onChange={handleChange}
          required
        />
        <label htmlFor="policy" className="ml-2 block text-gray-900">
          I consent to my details being processed in line with the privacy policy.
        </label>
      </div>

      {/* Error message */}
      {error && <div className={styles.errorMessage}>{error}</div>}

      {/* Success message */}
      {success && <div className={styles.successMessage}>{success}</div>}

      <div className={styles.formButton}>
        <Button btntext="Book your demo" btntype="primary"  btnAction={() => false}/>
        <Button btntext="Start a free trial" btntype="secondary"  btnAction={() => false}/>
      </div>
      <div className={styles.formNote}>Free 14-day trial. Cancel anytime.</div>
    </form>
  );
};

export default BookLeadDemo;
