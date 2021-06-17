import React from "react";

export default React.createContext({
  addTask: (data) => {},
  removeTask: (data) => {},
  getTasks: () => {},
});