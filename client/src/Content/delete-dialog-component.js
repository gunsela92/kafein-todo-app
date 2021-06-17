import React, {useContext} from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TaskContext from "../Context/task-actions";

const DeleteComp = (props) => {
  const context = useContext(TaskContext);
  const data = props.data;
  const handleClose = () => props.close();

  const deleteTask = (data) => {
    context.removeTask(data);
    props.sendNotification()
    handleClose();
  }
  
  return (
    <div>
    <TaskContext.Consumer>
      {(context) => (
    <Dialog
        open={props.show}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">The item titled {data.title} will be deleted.</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={() => deleteTask(data)} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      )}
      </TaskContext.Consumer>
      </div>
  )
}

export default DeleteComp;
