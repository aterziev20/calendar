// EventModal.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEvent } from "../redux";

import "../styles/EventModal.css";

function EventModal({ isOpen, onClose, selectedDate }) {
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const allEvents = useSelector((state) => state.event.events);
  const dispatch = useDispatch();

  if (!isOpen) {
    return null; // Don't render the modal if it's not open
  }

  const resetForm = () => {
    setTitle("");
    setStartTime("");
    setEndTime("");
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    const eventPayload = {
      id: allEvents.length + 1,
      title: title,
      time: `${startTime} - ${endTime}`,
      date: selectedDate,
    };
    dispatch(addEvent(eventPayload)); // Pass the eventPayload
    onClose();
    resetForm();
  };

  const handleCancel = () => {
    onClose();
    resetForm(); // Clear form fields when Cancel button is clicked
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2>Event</h2>
        <form onSubmit={handleAddEvent}>
          <label className="form-label">Title:</label>
          <input
            className="form-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="form-label">Start Time:</label>
          <input
            className="form-input"
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          <label className="form-label">End Time:</label>
          <input
            className="form-input"
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
          <div className="form-button-container">
            <button className="form-button" onClick={handleCancel}>
              Cancel
            </button>
            <button className="form-button" type="submit">
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EventModal;
