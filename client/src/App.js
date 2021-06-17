import React, { useState } from "react";
import GlobalState from "./Context/tasks-context";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "./Menu/menu-component";
import Search from "./Search/search-component";
import Content from "./Content/main-content-component"
import "./App.scss";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      flexGrow: 1,
      position: "fixed",
      justifyContent: "center",
    },
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    //marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
      flexGrow: 1,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    [theme.breakpoints.up("md")]: {
      width: `(100% - ${drawerWidth}px)`,
      height: "100%",
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(2),
    }
  },
}));

const App = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <GlobalState>
      <div className={classes.root}>
        <Menu styles={classes} open={mobileOpen} toggle={handleDrawerToggle}/>
        <Search styles={classes} toggle={handleDrawerToggle} />
        <Content styles={classes} />
      </div>
    </GlobalState>
  );
};

export default App;
