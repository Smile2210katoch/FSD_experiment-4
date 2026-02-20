import { useContext, useState, useMemo } from "react";
import { AppContext } from "../context/AppContext";
import "../App.css";

const Analytics = () => {
  const { state, dispatch } = useContext(AppContext);

  const [taskInput, setTaskInput] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all"); // all | active | completed

  // =========================
  // ADD TASK
  // =========================
  const addTask = () => {
    if (taskInput.trim() === "") return;
    dispatch({ type: "ADD_TASK", payload: taskInput });
    setTaskInput("");
  };

  // =========================
  // FILTER + SEARCH
  // =========================
  const filteredTasks = useMemo(() => {
    let tasks = state.tasks;

    if (filter === "active") {
      tasks = tasks.filter(task => !task.completed);
    }

    if (filter === "completed") {
      tasks = tasks.filter(task => task.completed);
    }

    return tasks.filter(task =>
      task.text.toLowerCase().includes(search.toLowerCase())
    );
  }, [state.tasks, search, filter]);

  // =========================
  // ANALYTICS CALCULATIONS
  // =========================
  const totalTasks = useMemo(() => state.tasks.length, [state.tasks]);

  const completedTasks = useMemo(
    () => state.tasks.filter(task => task.completed).length,
    [state.tasks]
  );

  const completionRate = useMemo(() => {
    return totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);
  }, [completedTasks, totalTasks]);

  return (
    <div className={`analytics-container ${state.theme}`}>
      <h2>📊 Advanced Analytics Dashboard</h2>

      {/* THEME TOGGLE */}
      <button
        className="theme-btn"
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
      >
        Switch to {state.theme === "light" ? "Dark" : "Light"} Mode
      </button>

      {/* ADD TASK */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter Task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* FILTER BUTTONS */}
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      {/* SUMMARY CARDS */}
      <div className="summary">
        <div className="card">
          <h3>Total</h3>
          <p>{totalTasks}</p>
        </div>

        <div className="card">
          <h3>Completed</h3>
          <p>{completedTasks}</p>
        </div>

        <div className="card">
          <h3>Completion</h3>
          <p>{completionRate}%</p>
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${completionRate}%` }}
        ></div>
      </div>

      {/* TASK LIST */}
      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li key={task.id} className={task.completed ? "done" : ""}>
            <span
              onClick={() =>
                dispatch({ type: "TOGGLE_TASK", payload: task.id })
              }
            >
              {task.text}
            </span>

            <button
              onClick={() =>
                dispatch({ type: "DELETE_TASK", payload: task.id })
              }
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      {/* CLEAR BUTTON */}
      <button
        className="clear-btn"
        onClick={() => dispatch({ type: "CLEAR_TASKS" })}
      >
        Clear All Tasks
      </button>
    </div>
  );
};

export default Analytics;