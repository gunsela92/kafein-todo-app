import React, { useState, useContext } from "react";
import {
  Divider,
  MenuItem,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
  Select,
  FormControl,
  InputLabel,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core/";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import TaskContext from "../Context/task-actions";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddTask = (props) => {
  const context = useContext(TaskContext);
  const handleClose = () => props.close();
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [comment, setcomment] = useState("");
  const [status, setstatus] = useState(0);

  const addTask = () => {
    try {
      let data = {
        title: title,
        description: description,
        comment: comment,
        progress: status,
      };
      context.addTask(data);
      props.sendNotification()
      handleClose();
    } catch (err) {
      return err;
    }
  };

  return (
    <div>
    <TaskContext.Consumer>
      {(context) => (
        <Dialog
          fullScreen
          open={props.show}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          TransitionComponent={Transition}
        >
          <AppBar>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6">Add Todo</Typography>
            </Toolbar>
          </AppBar>
          <DialogTitle>Add New Todo</DialogTitle>
          <DialogContent>
            <div>
              <form noValidate autoComplete="off">
                <div>
                  <div>
                    <TextField
                      label="Title"
                      fullWidth
                      onChange={(e) => settitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <TextField
                      label="Description"
                      fullWidth
                      onChange={(e) => setdescription(e.target.value)}
                    />
                  </div>
                  <TextField
                    label="Comment"
                    fullWidth
                    onChange={(e) => setcomment(e.target.value)}
                  />
                </div>
                <div>
                  <FormControl fullWidth>
                    <InputLabel>Progress</InputLabel>
                    <Select
                      onChange={(e) => setstatus(e.target.value)}
                      defaultValue=""
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={6}>6</MenuItem>
                      <MenuItem value={7}>7</MenuItem>
                      <MenuItem value={8}>8</MenuItem>
                      <MenuItem value={9}>9</MenuItem>
                      <MenuItem value={10}>10</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </form>
            </div>
          </DialogContent>
          <Divider />
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
            <Button onClick={() => addTask()} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </TaskContext.Consumer>    
    </div>
  );
};

export default AddTask;
