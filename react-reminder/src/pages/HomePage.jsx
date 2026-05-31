import ReminderCard from "../components/ReminderCard";
import useReminderStore from "../store/reminderStore";

import { format } from "date-fns";

const HomePage = () => {
  const reminders = useReminderStore((state) => state.getAllReminders());

  if (reminders.length == 0) {
    return <h3 className="text-center font-medium">No reminders.</h3>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {reminders.map((reminder) => (
        <ReminderCard
          key={reminder.id}
          id={reminder.id}
          title={reminder.title}
          description={reminder.description}
          date={format(reminder.datetime, "MMM dd, yyyy")}
          time={format(reminder.datetime, "hh:mm a")}
          status={reminder.status}
          onDeleteReminder={() => {}}
        />
      ))}
    </div>
  );
};

export default HomePage;
