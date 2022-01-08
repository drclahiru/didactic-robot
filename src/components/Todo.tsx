import Status from "./Status";
import { FaTimes } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

const Todo = ({
  todos,
  onClick,
}: {
  todos: { todo: string; date: string; time: string; status: string }[];
  onClick: Function;
}) => {
  return (
    <div>
      {todos.length === 0 && (
        <div className="task">
          <h4>Add some todos</h4>
        </div>
      )}
      {todos.map((todo, i) => (
        <div className="task" key={`${todo}-${i}`}>
          <div>
            <h3>{todos[i].todo}</h3>
            <p>
              {todos[i].date} &nbsp; {todos[i].time}
            </p>
            <FaTimes
              className="red f-right"
              onClick={() => onClick(i)}
              data-tip
              data-for="registerDelete"
            />
            <ReactTooltip id="registerDelete" place="top" effect="solid">
              Delete
            </ReactTooltip>
          </div>
          <div>
            <Status status={todos[i].status} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
