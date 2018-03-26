import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions";

const todosReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      return {
        todos: [
          ...state,
          action.todos
        ]
      };
    case RECEIVE_TODO:
      return {
        todo: [
          ...state,
          action.todo
        ]
      };
    default:
      return state;
  }
};

export default todosReducer;
