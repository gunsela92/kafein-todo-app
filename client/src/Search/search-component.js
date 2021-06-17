import React, { useState } from "react";
import {TextField, AppBar, Toolbar} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import TaskContext from "../Context/task-actions";

const Search = (props) => {
  const [styles] = useState(props.styles);

  return (
    <TaskContext.Consumer>
      {(context) => (
      <AppBar className={styles.appBar}>
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={props.toggle}
            className={styles.menuButton}
          >
            <MenuIcon />
        </IconButton>
            <Autocomplete
              className="searchBox"
              freeSolo
              options={context.tasks.length && (context.tasks.map((option) => option.title))}
              renderInput={(params) => (
                <TextField {...params} placeholder="Search" variant="outlined" />
              )}
            />
        </Toolbar>
      </AppBar>
      )}
      </TaskContext.Consumer>
  );
};

export default Search;
