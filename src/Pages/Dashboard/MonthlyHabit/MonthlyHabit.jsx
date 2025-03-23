import React from "react";
import SingleHabit from "./SingleHabit";
import moment from "moment";

function MonthlyHabit() {
  let month = moment().format("MMMM YYYY");
  let daysInMonth = moment().daysInMonth();

  let habits = [
    "Reading",
    "Excercise",
    "Morning Rituals",
    "Evening Rituals",
    "German",
    "DSA",
  ];

  return (
    <div className="px-5 py-10 lg:px-10 ">
      <h2 className="font-bold text-5xl font-heading text-center pb-5">
        {month}
      </h2>

      {habits.map((habit, idx) => (
        <SingleHabit
          habit={habit}
          daysInMonth={daysInMonth}
          key={`${habit}-${idx}`}
        />
      ))}
    </div>
  );
}

export default MonthlyHabit;
