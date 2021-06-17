import taskService from "../Services/tasks-service";

export const ADD_TASK = "ADD_TASK";
export const GET_TASKS = "GET_TASKS";
export const REMOVE_TASK = "REMOVE_TASK";

export const addTask = async (data) => {
  try {
    const task = {
      title: data.title,
      description: data.description,
      comment: data.comment,
      progress: data.progress
    };
    const res = await taskService.addNewTask(task);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getTasks = async () => {
  try {
    const res = await taskService.loadTasks();
    return res.data;
  } catch (err) {
    return err;
  }
};

export const removeTask = async (data) => {
  try {
    await taskService.deleteTask(data.id);
  } catch (err) {
    return err;
  }
};

export const TaskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.data];
    case GET_TASKS:
      return action.data;
    case REMOVE_TASK:
      return state.filter(task => task.id !== action.data.id);
    default:
      return state;
  }
};