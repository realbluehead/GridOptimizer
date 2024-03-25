import {
  Container,
  Box,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  ButtonGroup,
} from "@mui/material";

import { useState } from "react";
import { useGridOptions } from "../stores/GridContext";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface SelectOption {
  value: string;
  label: string;
}

interface DateRangeOption {
  value: number;
  label: string;
}

const GridSource = () => {
  const pairOptions: SelectOption[] = [
    { value: "ADABTC", label: "ADA/BTC" },
    { value: "ADAUSDT", label: "ADA/USDT" },
    { value: "BTCUSDT", label: "BTC/USDT" },
  ];
  const dateRangeOptions: DateRangeOption[] = [
    { value: 60 * 4, label: "4H" },
    { value: 60 * 8, label: "8H" },
    { value: 60 * 12, label: "12H" },
    { value: 60 * 24, label: "1D" },
    { value: 60 * 24 * 2, label: "2D" },
    { value: 60 * 24 * 3, label: "3D" },
    { value: 60 * 24 * 4, label: "4D" },
  ];

  const { options, setOptions } = useGridOptions();
  const [formData, setFormData] = useState({
    pair: "ADABTC",
    dateRange: 60 * 1 * 24,
  });

  const chartOptions = {
    chart: {
      type: "spline",
    },
    title: {
      text: "ADA/BTC",
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6],
      },
    ],
  };

  const handleChange = (event: any) => {
    setFormData({ ...formData, pair: event.target.value as string });
    setOptions({ ...options, pair: event.target.value as string });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };
  const selectDateRange = (option: DateRangeOption) => {
    setFormData({ ...formData, dateRange: option.value });
    setOptions({ ...options, dateRange: option.value });
  };

  return (
    <>
      <Container>
        <Box mt={2}>
          <h4>DATA SOURCE</h4>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="select-label">Pair</InputLabel>
                  <Select
                    labelId="select-label"
                    value={formData.pair}
                    onChange={handleChange}
                    label="Select an option"
                  >
                    {pairOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <ButtonGroup
                  variant="contained"
                  aria-label="Basic button group"
                >
                  {dateRangeOptions.map((option) => (
                    <Button
                      key={option.value}
                      variant={
                        option.value === formData.dateRange
                          ? "outlined"
                          : "contained"
                      }
                      onClick={() => selectDateRange(option)}
                    >
                      {option.label}
                    </Button>
                  ))}
                </ButtonGroup>
              </Grid>
            </Grid>
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
          </form>
        </Box>
      </Container>
    </>
  );
};

export default GridSource;
