import { createContext, useReducer, useEffect } from "react";
import { appReducer, initialState } from "../reducer/appReducer";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Save theme in localStorage
  useEffect(() => {
    localStorage.setItem("theme", state.theme);
    document.body.className = state.theme;   // Apply to whole app
  }, [state.theme]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};