import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMonth, removeMonth, todaysMonth } from "../redux";
import { monthNames } from "./monthNames";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "../styles/Navbar.css";

function HooksMonthContainer() {
  const currentMonth = useSelector((state) => state.month.numberOfMonth);
  const currentYear = useSelector((state) => state.month.numberOfYear);

  const dispatch = useDispatch();
  const currentMonthName = monthNames[currentMonth - 1];

  return (
    <div className="navbar">
      <button className="today-button" onClick={() => dispatch(todaysMonth())}>
        today
      </button>
      <div className="nav-buttons">
        <button className="prev-button" onClick={() => dispatch(removeMonth())}>
          <IoChevronBack />
        </button>
        <button className="next-button" onClick={() => dispatch(addMonth())}>
          <IoChevronForward />
        </button>
      </div>
      <h2>
        {currentMonthName} {currentYear}
      </h2>
    </div>
  );
}

export default HooksMonthContainer;
