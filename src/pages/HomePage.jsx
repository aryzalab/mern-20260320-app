import ReminderCard from "../components/ReminderCard";
import useReminderStore from "../store/reminderStore";

import { format, isAfter } from "date-fns";

const HomePage = () => {
  const reminders = useReminderStore((state) => state.getAllReminders());

  const { deleteReminder } = useReminderStore();

  if (reminders.length == 0) {
    return <h3 className="text-center font-medium">No reminders.</h3>;
  }

  return (
    <div className="grid grid-cols-1 gap-5">
      {reminders.map((reminder) => (
        <ReminderCard
          key={reminder.id}
          id={reminder.id}
          title={reminder.title}
          description={reminder.description}
          date={format(reminder.datetime, "MMM dd, yyyy")}
          time={format(reminder.datetime, "hh:mm a")}
          status={reminder.status}
          isUpcoming={isAfter(reminder.datetime, new Date())}
          onDeleteReminder={() => {
            if (window.confirm("Are you sure?")) {
              deleteReminder(reminder.id);
            }
          }}
        />
      ))}
    </div>
  );
};

export default HomePage;
