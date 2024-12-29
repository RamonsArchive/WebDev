import { Task } from "../App.tsx";
import banner from "../assets/christBanner.jpg";
import grinch from "../assets/grinchPortrait.jpg";
import reindeer from "../assets/reinderr.jpg";
import santa from "../assets/santa.jpeg";

interface Props {
  title: string;
  inputText: string;
  addText: string;
  deleteText: string;
  moveUpIcon: string;
  moveDownIcon: string;
  myTasks: Task[];

  changeInputText: (inputText: string) => void;
  addTask: (addTask: number) => void;
  deleteTask: (index: number) => void;
  changeMoveUpButton: (index: number) => void;
  changeMoveDownButton: (index: number) => void;
}

const ToDoApp = ({
  title,
  inputText,
  addText,
  deleteText,
  moveUpIcon,
  moveDownIcon,
  myTasks,
  changeInputText,
  addTask,
  deleteTask,
  changeMoveUpButton,
  changeMoveDownButton,
}: Props) => {
  return (
    <>
      <div className="banner">
        <img className="banner-image" src={banner}></img>
      </div>
      <div className="top-image-right">
        <img className="image-top" src={santa} />
      </div>
      <div className="side-image-right">
        <img className="image-right" src={grinch} />
      </div>
      <div className="side-image-left">
        <img className="image-left" src={reindeer} />
      </div>
      <div className="to-do-list">
        <h1 className="title">{title}</h1>
        <input
          className="to-do-input"
          type="text"
          placeholder="Add task here"
          value={inputText}
          onChange={(e) => changeInputText(e.target.value)}
        />
        <button
          className="add-text"
          onClick={() => addTask(myTasks.length + 1)}
        >
          {addText}
        </button>
        <ul className="task-list">
          {myTasks.map((task, index) => (
            <li key={index}>
              <span className="text">
                {" "}
                {task.rank}: {task.task}
              </span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                {deleteText}
              </button>
              <button
                className="up-button"
                onClick={() => changeMoveUpButton(index)}
              >
                {moveUpIcon}
              </button>
              <button
                className="down-button"
                onClick={() => changeMoveDownButton(index)}
              >
                {moveDownIcon}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ToDoApp;
