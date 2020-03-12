import React from "react";
import { connect } from "react-redux";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import Todos from "../Components/Todos";

function TodosContainers({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove
}) {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
}

// const mapStateToProps = state => ({
//   input: state.todos.input,
//   todos: state.todos.todos
// });

// const mpaDispatchToProps = dispatch => ({
//   changeInput: () => {
//     dispatch(changeInput());
//   },
//   insert: () => {
//     dispatch(insert());
//   },
//   toggle: () => {
//     dispatch(toggle());
//   },
//   remove: () => {
//     dispatch(remove());
//   }
// });

// export default connect(mapStateToProps, mpaDispatchToProps)(TodosContainers);
export default connect(
    ({todos})=>({
        input: todos.input,
        todos: todos.todos
    }),{
        changeInput,
        insert,
        toggle,
        remove
    }

)(TodosContainers);
