import React from "react";

import "../styles/EventList.css";

function EventList({ selectedDate, getEventsForDay }) {
  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}.${month}.${year}`;
  };
  return (
    <div className="event-list-container">
      {selectedDate ? (
        <div>
          <h2 className="event-list-header">
            Events for {formatDate(selectedDate)}
          </h2>
          <ul className="event-list">
            {getEventsForDay(
              parseInt(selectedDate.substr(0, 4)),
              parseInt(selectedDate.substr(5, 2)),
              parseInt(selectedDate.substr(8, 2))
            ).map((event) => (
              <div className="event-wrapper" key={event.id}>
                <li className="event-item">{event.title}</li>
                <li className="event-item">{event.time}</li>
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2 className="event-list-header">Events</h2>
        </div>
      )}
    </div>
  );
}

export default EventList;
