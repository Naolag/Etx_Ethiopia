import { create } from 'zustand';

type AgendaState = {
  selectedDay: 'day1' | 'day2';
  setSelectedDay: (day: 'day1' | 'day2') => void;
};

export const useAgendaStore = create<AgendaState>((set) => ({
  selectedDay: 'day1',
  setSelectedDay: (day) => set({ selectedDay: day }),
}));
