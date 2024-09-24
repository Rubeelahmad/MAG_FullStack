"use client";

import React, { FC, useState, useEffect } from "react";
import styles from "./BookCallModal.module.scss";

interface ModalProps {
  isModalOpen?: boolean;
  onClose?: () => void;
}

const BookCallModal: FC<ModalProps> = ({ isModalOpen, onClose }) => {
  const [formData, setFormData] = useState({
    selectedDate: "",
    selectedTime: "",
    fullName: "",
    email: "",
    phone: "",
    notes: "",
    consent: false,
  });
  const [bookedTimes, setBookedTimes] = useState<string[]>([]);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState(false);

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

  // Fetch booked times when the user selects a date
  useEffect(() => {
    if (formData.selectedDate) {
      fetchBookedTimes();
    }
  }, [formData.selectedDate]);

  const fetchBookedTimes = async () => {
    try {
      const response = await fetch("/api/bookings");
      const data = await response.json();

      // Convert selectedDate to Date object to match API format
      const selectedDateObj = new Date(formData.selectedDate);

      // Filter out the times for the selected date
      const bookedTimesForDate = data
        .filter((booking: { date: string }) => {
          const bookingDate = new Date(booking.date);
          return (
            bookingDate.getFullYear() === selectedDateObj.getFullYear() &&
            bookingDate.getMonth() === selectedDateObj.getMonth() &&
            bookingDate.getDate() === selectedDateObj.getDate()
          );
        })
        .map((booking: { time: string }) => booking.time);

      setBookedTimes(bookedTimesForDate);
    } catch (error) {
      console.error("Error fetching booked times:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | any>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error and success messages on any input change
    setError("");
    setSuccess("");
  };

  const handleTimeSelect = (time: string) => {
    if (!bookedTimes.includes(time)) {
      setFormData((prevData) => ({ ...prevData, selectedTime: time }));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const {
      selectedDate,
      selectedTime,
      fullName,
      email,
      phone,
      notes,
      consent,
    } = formData;

    const submissionData = {
      date: selectedDate,
      time: selectedTime,
      fullName,
      email,
      phone,
      callNotes: notes,
      checkbox: consent,
    };

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (response.status === 400) {
        setError(data.error || "An unexpected error occurred");
      } else if (response.status === 201) {
        setSuccess("Booking created successfully!");
        // Reset form fields except the selected date
        setFormData({
          selectedDate: formData.selectedDate, // Keep the selected date
          selectedTime: "",
          fullName: "",
          email: "",
          phone: "",
          notes: "",
          consent: false,
        });

        fetchBookedTimes();
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSuccess("");
        }, 5000);
      } else {
        setError(data.error || "An unexpected error occurred");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      setError("Failed to submit booking. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleBackgroundClick = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose && onClose();
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
              name="selectedDate"
              value={formData.selectedDate}
              onChange={handleInputChange}
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
                    formData.selectedTime === time
                      ? styles.activeTimeButton
                      : ""
                  } ${
                    bookedTimes.includes(time) ? styles.disabledTimeButton : ""
                  }`}
                  disabled={bookedTimes.includes(time)}
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
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleInputChange}
              className={styles.formInput}
              required
            />
            <label className={styles.label}>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
              className={styles.formInput}
              required
            />
            <label className={styles.label}>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleInputChange}
              className={styles.formInput}
              required
            />
          </div>

          {/* Second Column */}
          <div className={styles.secondColumn}>
            <label className={styles.label}>Call Notes</label>
            <textarea
              name="notes"
              placeholder="Call notes"
              value={formData.notes}
              onChange={handleInputChange}
              className={styles.formTextarea}
              rows={3}
            />

            {/* Consent Checkbox */}
            <div className={styles.consentCheckbox}>
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleInputChange}
              />
              <label>
                I consent to my details being processed in line with the{" "}
                <a href="#"> privacy policy</a>.
              </label>
            </div>

            {/* Submit Button */}
            <div className={styles.buttonContainer}>
              <button
                type="submit"
                className={styles.submitButton}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Schedule my call"}
              </button>
            </div>

            {/* Error message */}
            {error && <div className={styles.errorMessage}>{error}</div>}

            {/* Success message */}
            {success && <div className={styles.successMessage}>{success}</div>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookCallModal;
