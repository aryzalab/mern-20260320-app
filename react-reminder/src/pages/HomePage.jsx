import React from "react";
import ReminderCard from "../components/ReminderCard";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <ReminderCard />
      <ReminderCard />
      <ReminderCard />
      <ReminderCard />
      <ReminderCard />
      <ReminderCard />
      <ReminderCard />
    </div>
  );
};

export default HomePage;
