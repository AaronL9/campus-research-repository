import { createContext } from "react";

export const DataToolbarContext = createContext();

export const DataToolbarContextProvider = ({ children }) => {
  const [pageNum, setPageNum] = useState(1);
  const [limit, setLimit] = useState(10);
  const [filterValue, setFilterValue] = useState('');
  const [sortingValue, setSortingValue] = useState('');

  return (
    <DataToolbarContext.Provider
      value={{
        filterValue,
        setFilterValue,
        setPageNum,
        sortingValue,
        setSortingValue,
        pageNum,
        limit,
        setLimit,
      }}
    >
      {children}
    </DataToolbarContext.Provider>
  );
};
