import { Card, Typography, styled } from "@mui/material";

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
    // [`.${axisClasses.left} .${axisClasses.label}`]: {
    //   transform: 'translate(-20px, 0)',
    // },
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
  const StyledHeader = styled("div")(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));

  const StyledBody = styled("div")(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  }));
  const Styledcard = styled(Card)(({ theme }) => ({
    width: 300,
    height: 200,
    display: "flex",
    backgroundColor: "#DFEECC",
    flexDirection: "column",
    padding: theme.spacing(1, 2),
    // alignItems: "center",
  }));
  return (
    <div>
      <StyledHeader>home</StyledHeader>

      <StyledBody>
        <Styledcard>
          <Typography variant="h5">Buyers</Typography>
        </Styledcard>
        <Styledcard>
          <Typography variant="h5">Sellers</Typography>
        </Styledcard>
        <Styledcard>
          <Typography variant="h5">Orders</Typography>
        </Styledcard>
      </StyledBody>
    </div>
  );
}
