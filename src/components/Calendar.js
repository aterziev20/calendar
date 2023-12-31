import React from "react";
import { useSelector } from "react-redux";
import MonthCalendar from "./MonthCalendar";


function Calendar() {
  const numberOfYear = useSelector((state) => state.month.numberOfYear);
  const currentMonth = useSelector((state) => state.month.numberOfMonth);
  
  return (
    <div>
      <MonthCalendar year={numberOfYear} month={currentMonth}/>
    </div>
  );
}

export default Calendar;
