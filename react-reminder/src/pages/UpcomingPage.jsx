import ReminderCard from "../components/ReminderCard";

const UpcomingPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <ReminderCard isUpcoming={true} />
      <ReminderCard isUpcoming={true} />
      <ReminderCard isUpcoming={true} />
    </div>
  );
};

export default UpcomingPage;
