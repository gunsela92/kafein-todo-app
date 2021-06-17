import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import {Divider} from "@material-ui/core/";

const DialogModal = (props) => {
  const handleClose = () => props.close();
  const data = props.data;

  return (
    <Dialog
      maxWidth={"sm"}
      fullWidth
      open={props.show}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Details</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div>
            <p>
              <strong>Title : </strong>
              {data.title}
            </p>
            <p>
              <strong>Description : </strong>
              {data.description}
            </p>
            <p>
              <strong>Comments : </strong>
            </p>
            <ul>
              {data.comments.map((e) => (
                <li key={e.id}>{e.comment}</li>
              ))}
            </ul>
          </div>
        </DialogContentText>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogModal;
