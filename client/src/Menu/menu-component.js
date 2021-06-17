import React, { useState } from "react";
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
} from "@material-ui/core/";
import AssignmentIcon from '@material-ui/icons/Assignment';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddDialog from "../Content/add-new-task-component";
import Hidden from '@material-ui/core/Hidden';
import Notification from "../Notifications/notification-component";

const Menu = (props) => {
  const { window } = props;
  const [classes] = useState(props.styles);
  const [showNotification, setshowNotification] = useState(false);
  const [notificationDetails, setnotificationDetails] = useState([]);
  const [showAddDialog, setshowAddDialog] = useState(false);
  const container = window !== undefined ? () => window().document.body : undefined;

  const showTasks = () => {
    setshowAddDialog(false);
  }

  const addNewTask = () => {
    setshowAddDialog(true);
  }

  const sendNotification = () => {
    setshowNotification(true);
    setnotificationDetails([
      {
        show: true,
        text: "Todo added",
        type: "success",
      },
    ]);
  }

  return (
    <div>
      <Hidden mdDown implementation="css">
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className="menuHeader">
          <h3>TODO LIST</h3>
        </div>
        <Divider />
        <List>
            <ListItem button key={"1"} className="menuList" onClick={showTasks}>
              <ListItemIcon className="menuIcons"><AssignmentIcon/></ListItemIcon>
              <ListItemText>Task List</ListItemText>
            </ListItem>
          <ListItem button key={"2"} className="menuList" onClick={addNewTask}>
              <ListItemIcon className="menuIcons"><AddCircleOutlineIcon/></ListItemIcon>
              <ListItemText>New Task</ListItemText>
            </ListItem>
        </List>
      </Drawer>
      </Hidden>
      <Hidden mdUp implementation="css">
          <Drawer
            open={props.open}
            container={container}
            variant="temporary"
            onClose={props.toggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <div className="menuHeader">
          <h3>TODO LIST</h3>
        </div>
        <Divider />
        <List>
            <ListItem button key={"1"} className="menuList" onClick={showTasks}>
              <ListItemIcon className="menuIcons"><AssignmentIcon/></ListItemIcon>
              <ListItemText>Task List</ListItemText>
            </ListItem>
          <ListItem button key={"2"} className="menuList" onClick={addNewTask}>
              <ListItemIcon className="menuIcons"><AddCircleOutlineIcon/></ListItemIcon>
              <ListItemText>New Task</ListItemText>
            </ListItem>
        </List>
          </Drawer>
        </Hidden>
      {showAddDialog && (<AddDialog show={showAddDialog} close={showTasks} sendNotification={sendNotification}/>)}
      {showNotification && <Notification data={notificationDetails} />}
    </div>
  );
};

export default Menu;
