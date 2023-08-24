import React, { useState } from "react";
import { weekdayNames, shortMonthNames } from "./monthNames";
import EventList from "./EventList";

import "../styles/MonthCalendar.css";

function MonthCalendar({ year, month, events }) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const lastDayOfPreviousMonth = new Date(year, month - 1, 0).getDate();

  const [selectedDate, setSelectedDate] = useState(null);

  const formatDate = (year, month, day) => {
    return `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
  };

  function handleDateClick(year, month, day) {
    setSelectedDate(formatDate(year, month, day));
  }

  const days = [];

  // Fill the array with previous month's days
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    days.push({
      day: lastDayOfPreviousMonth - i,
      month: month - 1,
      className: "previous-month",
    });
  }

  // Fill the array with current month's days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      day: i,
      month: month,
      className:
        currentYear === year && currentMonth === month && currentDay === i
          ? "current-date"
          : "current-month",
    });
  }

  // Fill the array with next month's days
  const remainingDays = 42 - days.length;
  for (let i = 1; i <= remainingDays; i++) {
    days.push({
      day: i,
      month: month + 1,
      className: "next-month",
    });
  }

  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  function getEventsForDay(year, month, day) {
    const formattedDate = formatDate(year, month, day);
    return events.filter((event) => event.date === formattedDate);
  }

  return (
    <div className="calendar-container">
      <EventList
        selectedDate={selectedDate}
        getEventsForDay={getEventsForDay}
      />
      <div className="calendar">
        {weekdayNames.map((weekday) => (
          <div key={weekday} className="weekday">
            {weekday}
          </div>
        ))}
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="week">
            {week.map(({ day, className }) => (
              <div
                key={day}
                className={`day ${className} ${
                  selectedDate === formatDate(year, month, day)
                    ? "clicked-date"
                    : ""
                }`}
              >
                <div className="day-header">
                  <h2
                    className={`day-number ${
                      className === "current-month" ? "current-month" : ""
                    }`}
                    onClick={() => {
                      if (className === "current-month") {
                        handleDateClick(year, month, day);
                      }
                    }}
                  >
                    {day}
                  </h2>
                  {day === 1 && className === "current-month" && (
                    <div className="first-day-of-month">
                      {shortMonthNames[month - 1]}
                    </div>
                  )}
                </div>
                <div
                  className={`event-container ${
                    getEventsForDay(year, month, day).length > 0
                      ? "event-slim"
                      : ""
                  }`}
                >
                  {className === "current-month" && (
                    <div>
                      {getEventsForDay(year, month, day).map((event) => (
                        <div key={event.id} className="event">
                          <p className="event-title">{event.title}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MonthCalendar;
