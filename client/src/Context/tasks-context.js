import TaskContext from "./task-actions";
import React, { useReducer, useEffect } from "react";
import { 
  TaskReducer, 
  ADD_TASK, 
  GET_TASKS, 
  REMOVE_TASK,
  addTask as _addTask, 
  getTasks as _getTasks, 
  removeTask as _removeTask,
} from "./reducers";

const GlobalState = (props) => {
  const [tasks, dispatch] = useReducer(TaskReducer, { tasks: [] });

  const addTask = async (task) => {
      const added = await _addTask(task);

      if (added instanceof Error) {
       return;
      };
      dispatch({ type: ADD_TASK, data: added });
  };

  const removeTask = async (taskId) => {
      const removed = await _removeTask(taskId);

      if (removed instanceof Error) {
        return;
      };

      dispatch({ type: REMOVE_TASK, data: taskId });
  };

  const getTasks = async () => {
      const tasks = await _getTasks();

      if (tasks instanceof Error) {
        return;
      };
      dispatch({ type: GET_TASKS, data: tasks });
  };

  useEffect(() => {
    getTasks()
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        getTasks: getTasks,
        addTask: addTask,
        removeTask: removeTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default GlobalState;