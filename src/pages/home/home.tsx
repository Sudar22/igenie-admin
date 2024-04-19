import { Card, Typography, styled } from "@mui/material";

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
