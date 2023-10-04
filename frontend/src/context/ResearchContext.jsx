import { createContext, useReducer } from "react";

export const ResearchContext = createContext();

export const researchReducer = (state, action) => {
  switch (action.type) {
    case "SET_RESEARCHES":
      return {
        researches: action.payload,
      };
    case "SET_RESEARCH": 
      return {
        researches: action.payload,
      }
    case "CREATE_RESEARCH":
      return {
        researches: [action.payload, ...state.researches],
      };
    default:
      return state;
  }
};

export const ResearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(researchReducer, {
    researches: null,
  });

  return (
    <ResearchContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ResearchContext.Provider>
  );
};
