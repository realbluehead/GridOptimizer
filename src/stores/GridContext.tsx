import React, { createContext, useState, useContext } from "react";

interface GridOptions {
  pair: string;
  range: Array<number>;
  numGrids: number;
  dateRange: number;
}

interface GridContextType {
  options: GridOptions;
  setOptions: React.Dispatch<React.SetStateAction<GridOptions>>;
}
const GridContext = createContext<GridContextType | undefined>(undefined);

const GridOptionsContextProvider = (props: { children: JSX.Element }) => {
  const [options, setOptions] = useState<GridOptions>({
    pair: "ADA/BTC",
    range: [900, 1100],
    numGrids: 16,
    dateRange: 60 * 24,
  });
  const contextValue: GridContextType = { options, setOptions };

  return (
    <GridContext.Provider value={contextValue}>
      {props.children}
    </GridContext.Provider>
  );
};

const useGridOptions = (): GridContextType => {
  const context = useContext(GridContext);
  if (!context) {
    throw new Error(
      "useGridOptions must be used within a GridOptionsContextProvider"
    );
  }
  return context;
};

export { GridOptionsContextProvider, useGridOptions };
