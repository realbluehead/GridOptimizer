import { Container, Box, TextField, Button, Grid } from "@mui/material";
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
    setFormData({ ...formData, [name]: value });
    setOptions({ ...options, numGrids: options.numGrids + 1 });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <Container>
        <Box mt={2}>
          <h4>GRID OPTIONS</h4>
          <form onSubmit={handleSubmit}>
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
              <Grid container justifyContent="flex-end" xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  OPTIMIZE
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default GridOptions;
