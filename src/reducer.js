export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      if (state.newTask.trim() !== '') {
        return {
          ...state,
          tasks: [...state.tasks, { text: state.newTask, date: state.date }],
          newTask: '',
          date: '',
        };
      }
      return state;

    case 'DELETE_TASK':
      const updatedTasks = [...state.tasks];
      updatedTasks.splice(action.index, 1);
      return { ...state, tasks: updatedTasks };

    case 'UPDATE_NEW_TASK':
      return { ...state, newTask: action.value };

    default:
      return state;
  }
};