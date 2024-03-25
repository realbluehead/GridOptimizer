import { useGridOptions } from "../stores/GridContext";

const GridResults = () => {
  const { options } = useGridOptions();

  return <div>{options.numGrids}</div>;
};

export default GridResults;
