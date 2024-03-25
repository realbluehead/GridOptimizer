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
} from "@mui/material";
import { useGridOptions } from "../stores/GridContext";

const GridResults = () => {
  const { options } = useGridOptions();
  const rows = [
    {
      id: 1,
      lr: options.range[0],
      hr: options.range[1],
      grids: 32,
      executed: 40,
      profits: 4.5,
    },
  ];
  return (
    <div>
      <Container>
        <Box mt={2}>
          <h4>GRID RESULTS</h4>
        </Box>
        <Box mt={2}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Low Range</TableCell>
                  <TableCell>High Range</TableCell>
                  <TableCell>#Grids</TableCell>
                  <TableCell>Orders executed</TableCell>
                  <TableCell>Profits %</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.lr}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.hr}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.grids}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.executed}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.profits}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </div>
  );
};

export default GridResults;
