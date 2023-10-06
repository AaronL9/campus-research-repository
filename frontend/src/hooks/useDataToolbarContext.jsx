import { useContext } from "react";
import { DataToolbarContext } from "../context/DataToolbarContext";

export const useDataToolbarContext = () => {
  const context = useContext(DataToolbarContext);

  if (!context) {
    throw Error("useAuthContext must be used inside an DataToolbarContextProvider");
  }

  return context;
};
