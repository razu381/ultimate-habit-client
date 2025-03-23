import moment from "moment";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function SingleHabit({ habit, daysInMonth }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  let days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  function handleHabit(e) {
    e.preventDefault();
    console.log("Habit done");
  }
  return (
    <div className="grid grid-cols-12 gap-4 mb-5">
      <div className="flex flex-col items-center justify-center col-span-3 bg-card">
        <h2 className="font-bold text-xl">{habit}</h2>
      </div>
      <div className="col-span-9 bg-card flex gap-2 flex-wrap p-5">
        {days.map((day) => (
          <div>
            <Popover>
              <PopoverTrigger>
                <button
                  className="w-9 h-9 rounded-full border border-primary flex flex-col justify-center items-center text-xs"
                  onClick={() => setIsOpen(true)}
                  key={day}
                >
                  {day}
                </button>
              </PopoverTrigger>
              <PopoverContent>
                <h2>{day}</h2>
                <p>Hi, this is a paragraph content. how are you ding?</p>
              </PopoverContent>
            </Popover>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleHabit;
