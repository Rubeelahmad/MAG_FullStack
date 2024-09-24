"use client";

import React, { FC, useState } from "react";
import styles from "./BookCallModal.module.scss";

interface ModalProps {
  isModalOpen?: boolean;
  isOpen?: () => void | undefined;
  onClose?: () => void | undefined;
}
const BookCallModal: FC<ModalProps> = ({ isModalOpen, isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [consent, setConsent] = useState(false);

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ];

  const handleDateChange = (e: any) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeSelect = (time: any) => {
    setSelectedTime(time);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleBackgroundClick = (e: any) => {
    if (e.target === e.currentTarget) {
        onClose && onClose();  // Close the modal when clicking outside of it
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className={styles.modalWrapBox} onClick={handleBackgroundClick}>
      <div className={styles.modalContent}>
        {/* Close Button */}
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>

        <h2 className={styles.modalTitle}>
          Schedule a call at a time that suits you
        </h2>

        {/* Date and Time Picker */}
        <div className={styles.dateAndTimePicker}>
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Select a date
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className={styles.datePicker}
            />
          </div>
   


          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Select a time
            </label>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  className={`${styles.timeButton} ${
                    selectedTime === time ? styles.activeTimeButton : ""
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          {/* First Column */}
          <div className={styles.firstColumn}>
            <label className={styles.label}>Full Name</label>
            <input
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={styles.formInput}
            />
            <label className={styles.label}>Email Address</label>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.formInput}
            />
            <label className={styles.label}>Phone Number</label>
            <input
              type="tel"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={styles.formInput}
            />
          </div>

          {/* Second Column */}
          <div className={styles.secondColumn}>
            <label className={styles.label}>Call Notes</label>
            <textarea
              placeholder="Call notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className={styles.formTextarea}
              rows={3}
            />

            {/* Consent Checkbox */}
            <div className={styles.consentCheckbox}>
              <input
                type="checkbox"
                checked={consent}
                onChange={() => setConsent(!consent)}
              />
              <label>
                I consent to my details being processed in line with the
                <a href="#">privacy policy</a>.
              </label>
            </div>

            {/* Submit Button */}
            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.submitButton}>
                Schedule my call
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookCallModal;
