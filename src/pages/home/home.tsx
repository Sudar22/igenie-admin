import {
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  styled,
} from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import React from "react";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"];


const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};
const dataset = [
  {

    products: 57,
    Approval: 86,
    Pending: 21,
    month: 'Jan',
  },
  {

    products: 52,
    Approval: 78,
    Pending: 28,
    month: 'Fev',
  },
  {

    products: 53,
    Approval: 106,
    Pending: 41,
    month: 'Mar',
  },
  {

    products: 56,
    Approval: 92,
    Pending: 73,
    month: 'Apr',
  },
  {

    products: 69,
    Approval: 92,
    Pending: 99,
    month: 'May',
  },
  {

    products: 63,
    Approval: 103,
    Pending: 144,
    month: 'June',
  },
  {

    products: 60,
    Approval: 105,
    Pending: 319,
    month: 'July',
  },
  {

    products: 60,
    Approval: 106,
    Pending: 249,
    month: 'Aug',
  },
  {

    products: 51,
    Approval: 95,
    Pending: 131,
    month: 'Sept',
  },
  {

    products: 65,
    Approval: 97,
    Pending: 55,
    month: 'Oct',
  },
  {

    products: 64,
    Approval: 76,
    Pending: 48,
    month: 'Nov',
  },
  {

    products: 70,
    Approval: 103,
    Pending: 25,
    month: 'Dec',
  },
];

const valueFormatter = (value: number) => `${value}`;

const StyledChart = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems:"center",
  gap: 20,
  width: 500,
  height: 400,
  padding: theme.spacing(1, 4, 2, 4),
}));

const StyledHome = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems:"center",
 width:"100%",
 height:600,
}));
const StyledCardrow = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent:"center",
  gap: 50,
  padding: theme.spacing(1, 4, 2, 4),
 width:"100%"
}));
const StyledChartHeader = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems:"center",
  gap: 50,
  width: 500,
  // height: 400,
  // padding: theme.spacing(1, 4, 2, 4),
}));
export default function Home() {
  const [Past, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <StyledHome>
      <StyledCardrow>
      <StyledChart>
        <StyledChartHeader>
        <Typography variant="h5">Sales</Typography>
        <FormControl variant="standard" sx={{ width: 200}}>
          <InputLabel id="demo-simple-select-standard-label">Past</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={Past}
            onChange={handleChange}
            label="Past"
            sx={{ width: 200 }}
          >

            <MenuItem value={10}>Week</MenuItem>
            <MenuItem value={20}>Month</MenuItem>
            <MenuItem value={30}>6 Month</MenuItem>
          </Select>
        </FormControl>
        </StyledChartHeader>
        <LineChart
          width={500}
          height={300}
          series={[
            { curve: "linear", data: [0, 5, 2, 6, 3, 9.3] },
            { curve: "linear", data: uData },
            // { data: uData, label: 'uv', area: true, showMark: false }
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
          sx={{
            ".MuiLineElement-root": {
              // display: 'none',
            },
          }}
        />
      </StyledChart>
      <StyledChart>
      <Typography variant="h5">Store Statistics</Typography>
      <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[

        { dataKey: 'products', label: 'products', valueFormatter },
        { dataKey: 'Approval', label: 'Approval', valueFormatter },
        { dataKey: 'Pending', label: 'Pending', valueFormatter },
      ]}
      {...chartSetting}
    />
      </StyledChart>
      </StyledCardrow>
    </StyledHome>
  );
}
