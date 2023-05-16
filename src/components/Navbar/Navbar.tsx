import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import { nanoid } from "nanoid";
import {
  Box,
  IconButton,
  Typography,
  Toolbar,
  List,
  ListItemText,
  ListItemIcon,
  FormControlLabel,
  ListItemButton,
  Divider,
  ListItem,
  Stack,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
import { NavbarOptions } from "./NavbarData";
import { SwitchProps } from "@mui/material/Switch";
import { useSelector, useDispatch } from "react-redux";
import { RootState, themeSwitch } from "../../store";
import { MaterialUISwitch } from "./MaterialUISwitch";
import { MuiThemeEnums } from "../../types/enums";
import { iNavbarOptions } from "../../types/types";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(6)})`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 5,
  color: "white",
  background: "#151515",
  // border: '2px solid red',
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface INavbarProps {
  children: JSX.Element | JSX.Element[];
}

export default function Navbar({ children }: INavbarProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const AppName = "Rocket Wiki";
  const [open, setOpen] = React.useState<boolean>(false);

  const uiTheme: MuiThemeEnums = useSelector((x: RootState) => x.system.mode);

  const handleDrawer: () => void = () => setOpen(!open);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        open={open}
        // sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            sx={{
              width: "100%",
            }}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h6" noWrap component="div">
              {AppName}
            </Typography>
            <FormControlLabel
              checked={uiTheme === MuiThemeEnums.DARK ? true : false}
              control={<MaterialUISwitch sx={{ m: 1 }} />}
              label=""
              onChange={(e) =>
                (e.target as SwitchProps).checked
                  ? dispatch(themeSwitch(MuiThemeEnums.DARK))
                  : dispatch(themeSwitch(MuiThemeEnums.LIGHT))
              }
            />
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "#151515",
            color: "white",
          },
        }}
        variant="permanent"
        open={open}
      >
        <DrawerHeader>
          <IconButton
            sx={{
              color: "white",
            }}
            onClick={handleDrawer}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {NavbarOptions.map((item: iNavbarOptions) => (
            <ListItem
              onClick={() => navigate(`/${item.label}`)}
              key={nanoid()}
              disablePadding
              sx={{ display: "block" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{ opacity: open ? 1 : 0, textTransform: "capitalize" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
