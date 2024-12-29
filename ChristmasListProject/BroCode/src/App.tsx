/* Name: Ramon McDargh-Mitchell
 * Email: rmcdarghmitchell@ucsd.edu
 * All code present is open source or free to use without restrictions!
 */

import { useState } from "react";
import ToDoApp from "./Components/ChristmasList.tsx";

export type Task = {
  task: string;
  rank: number;
};

function App() {
  const firstTask = { task: "do laundry", rank: 1 };
  const myTitle = "Christmas List";
  const myAddText = "add task";
  const myDeleteText = "delete task";
  const myUpTask = "move task up";
  const myDownTask = "move task down";

  const [tasks, setTasks] = useState<Task[]>([firstTask]);
  const [inputText, setInputText] = useState("");

  const handleChangeInputText = (text: string) => {
    setInputText(text);
  };

  const handleAddTask = (index: number) => {
    if (inputText.trim() != "") {
      const newTask = { task: inputText, rank: index };
      console.log("My new Task " + newTask.task);
      setTasks([...tasks, newTask]);
      setInputText("");
    }
  };

  const handleDeleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i != index));
    updateRanks();
  };

  const handleMoveUpButton = (index: number) => {
    if (tasks.length <= 1 || index == 0) {
      console.log(
        "Can't move up. Not enough tasks or task is already at the top"
      );
      return;
    }
    const newTasks = [...tasks];
    [newTasks[index - 1], newTasks[index]] = [
      newTasks[index],
      newTasks[index - 1],
    ];
    setTasks(newTasks);
    updateRanks();
  };

  const handleMoveDownButton = (index: number) => {
    if (tasks.length <= 1 || index == tasks.length - 1) {
      console.log(
        "Can't move up. Not enough tasks or task is already the last one"
      );
      return;
    }
    const newTasks = [...tasks];
    [newTasks[index + 1], newTasks[index]] = [
      newTasks[index],
      newTasks[index + 1],
    ];
    setTasks(newTasks);
    updateRanks();
  };

  const updateRanks = () => {
    setTasks((tasks) =>
      tasks.map((task, index) => ({
        ...task,
        rank: index + 1,
      }))
    );
  };

  return (
    <>
      <ToDoApp
        myTasks={tasks}
        title={myTitle}
        inputText={inputText}
        addText={myAddText}
        deleteText={myDeleteText}
        moveUpIcon={myUpTask}
        moveDownIcon={myDownTask}
        changeInputText={handleChangeInputText}
        addTask={handleAddTask}
        deleteTask={handleDeleteTask}
        changeMoveUpButton={handleMoveUpButton}
        changeMoveDownButton={handleMoveDownButton}
      />
    </>
  );
}

export default App;
