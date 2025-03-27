import moment from "moment";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import axios from "axios";
import { toast } from "sonner";

function SingleHabit({ habit, dateISO }) {
  let month = moment(dateISO).format("MMMM");
  let year = moment(dateISO).format("YYYY");

  let daysInMonth = moment().daysInMonth();

  //toast("MONTHS");

  let days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  function handleTimeUpdate(e, habit, day) {
    e.preventDefault();
    let timeSpent = parseInt(e.target.time.value);
    let dateNew = moment(
      `${year}-${month}-${day}`,
      "YYYY-MMMM-DD"
    ).toISOString();

    let timeLog = {
      user: "sirazu52@gmail.com",
      habit,
      date: dateNew,
      time: timeSpent,
    };
    console.log(timeLog);
    axios
      .post("http://localhost:3000/logs", timeLog)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast("Log has been created.");
        } else if (res.modifiedCount > 0) {
          toast("Log has been Updated.");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="grid grid-cols-12 gap-4 mb-5">
      <div className="flex flex-col items-center justify-center col-span-3 bg-card">
        <h2 className="font-bold text-xl">{habit}</h2>
      </div>
      <div className="col-span-9 bg-card flex gap-2 flex-wrap p-5">
        {days.map((day) => (
          <div key={`${day}-${month}-${year}}`}>
            <Popover>
              <PopoverTrigger>
                <button className="w-9 h-9 rounded-full  border border-primary hover:bg-primary flex flex-col justify-center items-center text-xs">
                  {day}
                </button>
              </PopoverTrigger>
              <PopoverContent>
                <h2 className="text-center font-bold">
                  {day} {month} {year}
                </h2>
                <p className="text-center ">Time spent: --- </p>
                <div className=" ">
                  <form
                    onSubmit={(e) => handleTimeUpdate(e, habit, day)}
                    className="flex flex-col gap-2 mt-2"
                  >
                    <input
                      required
                      type="number"
                      name="time"
                      id="time"
                      placeholder="Total time Spent"
                      className="border-1 border-primary focus:outline-0 rounded-md px-2 py-1 text-sm"
                    />
                    <input
                      type="submit"
                      value="Update"
                      className="bg-primary hover:bg-secondary rounded-md text-sm py-1 px-5"
                    />
                  </form>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleHabit;
