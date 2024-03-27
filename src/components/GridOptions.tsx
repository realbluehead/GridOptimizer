import { Container, Box, TextField, Grid } from "@mui/material";
import { useGridOptions } from "../stores/GridContext";
import { useState } from "react";

const GridOptions = () => {
  const { options, setOptions } = useGridOptions();
  const [formData, setFormData] = useState({
    lowRange: 900,
    highRange: 1200,
    numGrids: 32,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let updatedOptions = {
      range: [formData.lowRange, formData.highRange],
      numGrids: formData.numGrids,
      pair: "ADA/BTC",
      dateRange: 222,
    };
    setFormData({ ...formData, [name]: value });
    updatedOptions = { ...updatedOptions, [name]: value };
    setOptions({
      ...updatedOptions,
    });
    console.log("update", updatedOptions);
  };

  return (
    <>
      <Container>
        <Box mt={2}>
          <h4>GRID OPTIONS</h4>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Low range"
                  name="lowRange"
                  value={formData.lowRange}
                  onChange={handleChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="High range"
                  name="highRange"
                  value={formData.highRange}
                  onChange={handleChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="# grids"
                  name="numGrids"
                  value={formData.numGrids}
                  onChange={handleChange}
                  margin="normal"
                />
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default GridOptions;
