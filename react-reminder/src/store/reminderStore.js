import { create } from "zustand";
import { persist } from "zustand/middleware";

const useReminderStore = create(
  persist(
    (set, get) => ({
      reminders: [],
      addReminder: (data) =>
        set((state) => ({ reminders: [...state.reminders, data] })),

      updateReminder: (id, data) =>
        set((state) => ({
          reminders: state.reminders.map((reminder) =>
            reminder.id === id ? { id: data.id, ...data } : reminder,
          ),
        })),

      deleteReminder: (id) =>
        set((state) => ({
          reminders: state.reminders.filter((reminder) => reminder.id !== id),
        })),
      getAllReminders: () => get().reminders,
      getReminderById: (id) =>
        get().reminders.find((reminder) => reminder.id == id),
    }),
    {
      name: "reminders",
    },
  ),
);

export default useReminderStore;
