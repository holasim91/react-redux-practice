const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

export const changeInput = input => ({
  type: CHANGE_INPUT,
  input
});

let id = 3; // 초기상태에 todo객체 2개 넣을꺼임
export const insert = text => ({
  type: INSERT,
  todo:{
    id: id++,
    text,
    done: false
  }
});

export const toggle = id => ({
  type: TOGGLE,
  id
});

export const remove = id => ({
  type: REMOVE,
  id
});

const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "Learn the Basic of Redux",
      done: false
    },
    {
      id: 2,
      text: "Use React/Redux",
      done: false
    }
  ]
};

function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input
      };
    case INSERT:
      return {
        ...state,
        todosㅊ: state.todos.concat(action.todo)
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        )
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id) //filter => 조건인 것만 나와라~
      };
    default:
      return state;
  }
}

export default todos;
