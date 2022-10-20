import React, { useState, useContext, useEffect } from "react";

// const initialData = [
//   {
//     _id: 0,
//     title: "List#1",
//   },
//   {
//     _id: 1,
//     title: "List#2",
//   },
//   {
//     _id: 2,
//     title: "List#3",
//   },
//   {
//     _id: 3,
//     title: "List#4",
//   },
// ];

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [task, setTask] = useState([]);
  // setList({id})
  return (
    <AppContext.Provider value={{ list, setList, task, setTask }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
