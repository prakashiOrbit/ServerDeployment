import * as React from "react";
import { styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import f2rrr from "../f2rrr.png";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Outlet, useNavigate } from "react-router-dom";
import { ExpandLess, ExpandMore} from "@mui/icons-material";
import SmartConnect from "../Components/Url/SmartConnect";
import { sideMenu } from "../Constants/constant";
import { Collapse } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Layout() {

  const [openMenu, setOpenMenu] = React.useState(true);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1A5701',
      },
    },
    spacing: (factor) => `${0.25 * factor}rem`,
  });

  const navigate = useNavigate();
  
  const [open, setOpen] = React.useState(
    window.innerWidth < 500 ? false : true
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  
  const handleClickMenu = () => {
    setOpenMenu(!openMenu)
  };

  return (
    <ThemeProvider theme={theme}>
      
    <Box sx={{ display: "flex" }}>
    
      <CssBaseline />
      
      <AppBar position="fixed" open={open} sx={{padding: '10px'}}>
      
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ display: "flex", alignItems: "center" }}>
  <img src={f2rrr} alt="f2rrr" width="60" height="60" style={{ marginRight: "10px" }} />
  <Typography variant="h6" noWrap component="div" style={{ fontWeight: "bold" }}>
    Fresh2Rely
  </Typography>
</div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
  <IconButton onClick={handleDrawerClose}>
    {theme.direction === "ltr" ? (
      <ChevronLeftIcon />
    ) : (
      <ChevronRightIcon />
    )}
  </IconButton>
</DrawerHeader>
<Divider />
<List>
  {sideMenu.map((item, index) => (
    <>
      <ListItemButton onClick={handleClickMenu}>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.text} />
        {openMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={!openMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          
            {item.options.map((option, index) => {
              return (
                <ListItemButton sx={{ pl: 4 }} onClick={() => navigate(option.link)} >
                  <ListItemIcon>
                    {option.icon}
                  </ListItemIcon>
                  <ListItemText primary={option.text} />
                </ListItemButton>
              )
            })}
        </List>
      </Collapse>
    </>
  ))}
</List>
<Divider />

       
      </Drawer >
      <Main open={open}>
        
        <div className="route-container">
          <SmartConnect />
          <Outlet />
        </div>
      </Main>
    </Box >
    </ThemeProvider>
  );
}
