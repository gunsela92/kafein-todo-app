import React, { useState, useEffect, useContext } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { ButtonGroup, Button, LinearProgress } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Dialog from "./main-dialog-component";
import DeleteDialog from "./delete-dialog-component";
import TaskContext from "../Context/task-actions";
import Notification from "../Notifications/notification-component";

const Content = (props) => {
  const context = useContext(TaskContext);
  const [classes] = useState(props.styles);
  const [taskData, setTaskData] = useState([]);
  const [taskDetail, settaskDetail] = useState([]);
  const [showDialog, setshowDialog] = useState(false);
  const [deleteTaskDialog, setdeleteTaskDialog] = useState(false);
  const [showNotification, setshowNotification] = useState(false);
  const [notificationDetails, setnotificationDetails] = useState([]);

  const loadUserTasks = async () => {
    try {
      const res = await context.tasks;
      if (res) {
        setTaskData(res);
      }
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    loadUserTasks();
  }, [context.tasks]);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.3 },
    { field: "title", headerName: "Title", flex: 0.6 },
    {
      field: "progress",
      headerName: "Progress",
      flex: 1,
      renderCell: (params) => (
        <LinearProgress
          variant="determinate"
          value={params.value * 10}
          style={{
            marginLeft: 12,
            width: "100%",
          }}
        />
      ),
    },
    {
      field: "process",
      headerName: " ",
      flex: 0.5,
      align: "center",
      renderCell: (params) => (
        <ButtonGroup color="primary">
          <Button size="small" onClick={() => showTaskDetails(params)}>
            <VisibilityIcon />
          </Button>
          <Button size="small" onClick={() => deleteTask(params)}>
            <DeleteOutlineIcon />
          </Button>
        </ButtonGroup>
      ),
    },
  ];

  const showTaskDetails = () => {
    setshowDialog(true);
  };

  const deleteTask = () => {
    setdeleteTaskDialog(true);
  };

  const closeDialog = () => {
    setdeleteTaskDialog(false);
    setshowDialog(false);
  };

  const sendNotification = () => {
    setshowNotification(true);
    setnotificationDetails([
      {
        show: true,
        text: "Todo deleted",
        type: "success",
      },
    ]);
  }

  const handleCellClick = (e) => {
    settaskDetail(e.row);
  };

  return (
    <main className={classes.content}>
      <TaskContext.Consumer>
        {(context) => (
          <div>
            <div className={classes.toolbar} />
            <div>
              {taskData.length > 0 && (
                <DataGrid
                  autoHeight
                  rows={taskData}
                  columns={columns}
                  pageSize={7}
                  onCellClick={handleCellClick}
                />
              )}
            </div>
            {showDialog && (
              <Dialog
                data={taskDetail}
                show={showDialog}
                close={closeDialog}
              />
            )}
            {deleteTaskDialog && (
              <DeleteDialog
                data={taskDetail}
                show={deleteTaskDialog}
                close={closeDialog}
                sendNotification={sendNotification}
              />
            )}
          </div>
        )}
      </TaskContext.Consumer>
      {showNotification && <Notification data={notificationDetails} />}
    </main>
  );
};

export default Content;
