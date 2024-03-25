import GridOptimizer from "../components/GridOptimizer";
import GridOptions from "../components/GridOptions";
import GridSource from "../components/GridSource";
import { GridOptionsContextProvider } from "../stores/GridContext";

const GridOptimizerPage = () => {
  return (
    <>
      <GridOptionsContextProvider>
        <div>
          <GridSource></GridSource>
          <GridOptions></GridOptions>
          <GridOptimizer></GridOptimizer>
        </div>
      </GridOptionsContextProvider>
    </>
  );
};

export default GridOptimizerPage;
