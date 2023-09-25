import { ResearchContext } from "../context/ResearchContext";
import { useContext } from "react";

export const useResearchContext = () => {
  const context = useContext(ResearchContext);

  if (!context) {
    throw Error(
      "useResearchContext must be used inside an ResearchContextProvider"
    );
  }

  return context;
};
