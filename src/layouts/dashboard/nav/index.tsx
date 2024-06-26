import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// @mui
import {
  Box,
  Drawer,
  Link
} from "@mui/material";
// mock
// hooks
// import useResponsive from '../../../hooks/useResponsive';
import useResponsive from "../../../hooks/useResponsive";
// components
import NavSection from "../../../components/nav-section";
import Scrollbar from "../../../components/scrollbar";
//
import navConfig from "./config";
//redux
import Commonsvg from "../../../assets/commonsvg";

// ----------------------------------------------------------------------

const NAV_WIDTH = 220;

// const StyledAccount = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(2, 2.5),
//   borderRadius: Number(theme.shape.borderRadius) * 1.5,
//   backgroundColor: alpha(theme.palette.grey[500], 0.12),
// }));

// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

interface navConfig {
  data: { title: string; path: string; icon: JSX.Element }[];
}

// ----------------------------------------------------------------------

export default function Nav({
  openNav,
  onCloseNav,
}: {
  openNav?: boolean;
  onCloseNav: () => void;
}) {
  const { pathname } = useLocation();
  // const { user } = useSelector((state) => state.user); // Adjust the state selector based on your Redux state structure

  const isDesktop = useResponsive("up", "lg", "md");

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname, openNav, onCloseNav]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
        {/* <Logo /> */}
        <Commonsvg name="igenie-logo" width="147" height="52" />
      </Box>
      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none">{/* StyledAccount implementation */}</Link>
      </Box>
      <NavSection data={navConfig /* Replace with your navConfig */} />{" "}
      {/* Pass your navConfig data */}
      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: "background.default",
              borderRightStyle: "dashed",
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
