
import { create } from "zustand";
import type { Filter } from "../battles/battles-utils";

const defaultState: Filter = {
  att: { name: '', team: [] },
  def: { name: '', team: [] }
}


// ----------------------------
// store type
// ----------------------------
export interface FilterStateStore {
  filterState: Filter;
  setFilterState: (update: Filter | ((prev: Filter) => Filter)) => void;
  resetFilterState: () => void;
}

// ----------------------------
// zustand store (in-memory only)
// ----------------------------
export const useFilterState = create<FilterStateStore>((set) => ({
  filterState: defaultState,

  setFilterState: (update) =>
    set((state) => ({
      filterState: typeof update === "function" ? update(state.filterState) : update,
    })),

  resetFilterState: () => set({ filterState: defaultState }),
}));

