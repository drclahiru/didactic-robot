import Todo from "./Todo";
import { useState } from "react";
import { FaAsterisk } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

/**
 * Handles adding a new todo
 * @returns Form to add a new to and the list of todos
 */
const Todos = () => {
  const [formTodo, setFormTodo] = useState("");
  const [formDate, setFormDate] = useState("");
  const [formTime, setFormTime] = useState("");
  const [errors, setErrors] = useState("");
  const [todos, setTodos] = useState([
    {
      todo: "hello there",
      date: "2022-02-04",
      time: "13:59",
      status: "Todo",
    },
    {
      todo: "general kenobi",
      date: "2022-03-14",
      time: "8:21",
      status: "Todo",
    },
  ]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formTodo) return setErrors("Todo cannot be empty");
    if (!formDate && formTime)
      return setErrors("Date should be provided together with time");

    const newTodos = todos.concat({
      todo: formTodo,
      date: formDate,
      time: formTime,
      status: "Todo",
    });
    setTodos(newTodos);
    setFormTodo("");
    setFormDate("");
    setFormTime("");
    setErrors("");
  };

  const removeTodo = (removeIndex: number) => {
    const newTodos = todos.filter((_, index) => index !== removeIndex);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h2 className="header">Todo List</h2>
      <div className="red">
        <div>{errors}</div>
      </div>
      <form onSubmit={onSubmit} className="add-form">
        <div className="form-control">
          <label>
            Todo
            <FaAsterisk
              className="red star"
              data-tip
              data-for="registerMandatory"
            />
            <ReactTooltip id="registerMandatory" place="top" effect="solid">
              Mandatory field
            </ReactTooltip>
          </label>
          <input
            type="text"
            name="newTodo"
            id="newTodo"
            value={formTodo}
            onChange={(e) => setFormTodo(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={formDate}
            onChange={(e) => setFormDate(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Time</label>
          <input
            type="time"
            name="time"
            id="time"
            value={formTime}
            onChange={(e) => setFormTime(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Add
        </button>
      </form>
      <Todo todos={todos} onClick={removeTodo} />
    </div>
  );
};

export default Todos;
