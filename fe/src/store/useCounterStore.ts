import { create } from 'zustand';

import { DEFAULT_COUNT_STEP } from '@/const/app';

type CounterState = {
  count: number;
  increment: (step?: number) => void;
  reset: () => void;
};

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: (step = DEFAULT_COUNT_STEP) =>
    set((state) => ({ count: state.count + step })),
  reset: () => set({ count: 0 }),
}));
