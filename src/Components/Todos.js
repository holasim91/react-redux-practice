import React from "react";

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <div>
      <input type="checkbox" />
      <span>Example Text</span>
      <button>Delete</button>
    </div>
  );
}

export default function Todos({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove
}) {
  function onSubmit(e) {
    e.preventValue();
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input />
        <button type="submit">등록</button>
      </form>
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}
