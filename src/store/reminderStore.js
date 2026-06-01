import { compareAsc, compareDesc, isAfter } from "date-fns";
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

      getAllReminders: () =>
        get().reminders.sort((a, b) => compareDesc(a.id, b.id)),

      getReminderById: (id) =>
        get().reminders.find((reminder) => reminder.id == id),

      getUpcomingReminders: () =>
        get()
          .reminders.filter((reminder) =>
            isAfter(reminder.datetime, new Date()),
          )
          .sort((a, b) => compareAsc(a.datetime, b.datetime)),

      markCompleted: (id) =>
        set((state) => ({
          reminders: state.reminders.map((reminder) =>
            reminder.id === id
              ? { ...reminder, status: "COMPLETED" }
              : reminder,
          ),
        })),
    }),
    {
      name: "reminders",
    },
  ),
);

export default useReminderStore;
