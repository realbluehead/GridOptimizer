import {
  Container,
  Box,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Button,
  Grid,
} from "@mui/material";
import { useGridOptions } from "../stores/GridContext";
import { useEffect, useState } from "react";

interface Result {
  id: number;
  rl: number;
  rh: number;
  grid: number;
  dateRange: number;
}
const GridOptimizer = () => {
  const { options } = useGridOptions();
  const [results, setResults] = useState<Array<Result>>([]);

  function handleRun() {
    const optimizer = new Worker(
      new URL("../services/OptimizerWorker.ts", import.meta.url)
    );
    optimizer.onmessage = (event) => {
      setResults([event.data]);
    };
    optimizer.postMessage({ action: "start", options });
  }

  return (
    <>
      <Container>
        <Box mt={2}>
          <h4>
            GRID OPTIMIZER {options.range[0]}-{options.range[1]}
          </h4>
        </Box>
        <Grid container justifyContent="flex-end">
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={handleRun}
          >
            OPTIMIZE
          </Button>
        </Grid>
        <Box mt={2}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Low Range</TableCell>
                  <TableCell>High Range</TableCell>
                  <TableCell>#Grids</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {results.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.rl}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.rh}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.grid}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  );
};

export default GridOptimizer;
