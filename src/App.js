import React from "react";
import CounterContainer from "./Containers/CounterContainer";
import TodosContainers from './Containers/TodosContainers'
function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainers />
    </div>
  );
}

export default App;
