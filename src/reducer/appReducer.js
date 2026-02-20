// Load from localStorage safely
const savedTheme = localStorage.getItem("theme");
const savedTasks = localStorage.getItem("tasks");

export const initialState = {
  theme: savedTheme ? savedTheme : "light",
  tasks: savedTasks ? JSON.parse(savedTasks) : []
};

export const appReducer = (state, action) => {
  switch (action.type) {

    // =========================
    // THEME TOGGLE
    // =========================
    case "TOGGLE_THEME":
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return {
        ...state,
        theme: newTheme
      };

    // =========================
    // ADD TASK
    // =========================
    case "ADD_TASK":
      const newTask = {
        id: Date.now(),   // Unique ID (better than index)
        text: action.payload,
        completed: false,
        createdAt: new Date().toISOString()
      };

      const updatedTasksAfterAdd = [...state.tasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasksAfterAdd));

      return {
        ...state,
        tasks: updatedTasksAfterAdd
      };

    // =========================
    // TOGGLE TASK
    // =========================
    case "TOGGLE_TASK":
      const updatedTasksAfterToggle = state.tasks.map(task =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

      localStorage.setItem("tasks", JSON.stringify(updatedTasksAfterToggle));

      return {
        ...state,
        tasks: updatedTasksAfterToggle
      };

    // =========================
    // DELETE TASK
    // =========================
    case "DELETE_TASK":
      const updatedTasksAfterDelete = state.tasks.filter(
        task => task.id !== action.payload
      );

      localStorage.setItem("tasks", JSON.stringify(updatedTasksAfterDelete));

      return {
        ...state,
        tasks: updatedTasksAfterDelete
      };

    // =========================
    // CLEAR TASKS
    // =========================
    case "CLEAR_TASKS":
      localStorage.removeItem("tasks");
      return {
        ...state,
        tasks: []
      };

    default:
      return state;
  }
};