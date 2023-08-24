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
            Events {formatDate(selectedDate)}
          </h2>
          <ul className="event-list">
            {getEventsForDay(
              parseInt(selectedDate.substr(0, 4)), // 4 digit year
              parseInt(selectedDate.substr(5, 2)), // 2 digit month
              parseInt(selectedDate.substr(8, 2))  // 2 digit day
            ).map((event) => (
              <div className="event-wrapper" key={event.id}>
                <li className="event-item">{event.title}</li>
                <li className="event-time">{event.time}</li>
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
