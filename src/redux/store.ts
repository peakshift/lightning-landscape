import { configureStore } from "@reduxjs/toolkit";
import modalsSlice from "./features/modals.slice";
import projectSlice from "./features/project.slice";
import walletSlice from "./features/wallet.slice";
import uiSlice from "./features/ui.slice";
import { actionReducer } from './features/action-reducer'

const defaultStore = configureStore({
  reducer: {
    modals: modalsSlice,
    project: projectSlice,
    wallet: walletSlice,
    ui: uiSlice,
    action: actionReducer,
  },
});

export let store = defaultStore;

export const createReduxStore = (initalState?: Partial<RootState>) => {
  return store = configureStore({
    reducer: {
      modals: modalsSlice,
      project: projectSlice,
      wallet: walletSlice,
      ui: uiSlice,
      action: actionReducer,
    },
    preloadedState: initalState
  });
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
