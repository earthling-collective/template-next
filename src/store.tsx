"use client";

import { ReactNode, createContext, useContext, useMemo } from "react";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface AppState {}

const makeStore = () => create(immer<AppState>((set, get) => ({})));

const StoreContext = createContext<AppState>({});

export function StoreProvider(props: { children: ReactNode }) {
  const { children } = props;

  const store = useMemo(makeStore, []);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export const useStore = () => useContext(StoreContext);
