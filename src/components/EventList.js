import React, { useState } from "react";
import { addEvent, removeEvent } from "../redux";
import { useSelector, useDispatch } from "react-redux";
import { IoTrashOutline } from "react-icons/io5";

import EventModal from "./EventModal";

import "../styles/EventList.css";

function EventList({ selectedDate }) {
  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}.${month}.${year}`;
  };

  const dispatch = useDispatch();
  const eventsArray = useSelector((state) => state.event.events);

  /* const eventsForSelectedDate = eventsArray
    .filter((event) => event.date === selectedDate)
    .sort((a, b) => {
      const startTimeA = a.time.split(" - ")[0];
      const startTimeB = b.time.split(" - ")[0];
      return startTimeA.localeCompare(startTimeB);
      
    }); */ // sorts the events by starting time

  // sorts the events by starting time better easier method
  const eventsForSelectedDate = eventsArray
    .filter((event) => event.date === selectedDate)
    .sort((a, b) => a.time.localeCompare(b.time));

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRemoveEvent = (eventId) => {
    dispatch(removeEvent(eventId));
  };

  return (
    <div className="event-list-container">
      <div>
        <h2 className="event-list-header">Events {formatDate(selectedDate)}</h2>
        <button className="add-event-button" onClick={openModal}>
          Create Event
        </button>
        <EventModal
          isOpen={isModalOpen}
          onClose={closeModal}
          selectedDate={selectedDate}
          addEvent={addEvent} // Pass the action to add event here
        />
        <ul className="event-list">
          {eventsForSelectedDate.map((event) => (
            <div className="event-item-wrapper" key={event.id}>
              <div className="event-item-container">
                <li className="event-item">{event.title}</li>
                <li className="event-time">{event.time}</li>
              </div>
              <div
                className="remove-event-button"
                onClick={() => handleRemoveEvent(event.id)}
              >
                <IoTrashOutline />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EventList;
