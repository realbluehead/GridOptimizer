import GridOptions from "../components/GridOptions";
import GridResults from "../components/GridResults";
import GridSource from "../components/GridSource";
import { GridOptionsContextProvider } from "../stores/GridContext";

const GridOptimizerPage = () => {
  return (
    <div>
      <GridOptionsContextProvider>
        <div>
          <GridSource></GridSource>
          <GridOptions></GridOptions>
          <GridResults></GridResults>
        </div>
      </GridOptionsContextProvider>
    </div>
  );
};

export default GridOptimizerPage;