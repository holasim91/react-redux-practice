import React from 'react';
import Counter from './Components/Counter'
import Todos from './Components/Todos'

function App() {
  return (
    <div>
      <Counter number={0}/>
      <hr/>
      <Todos />
    </div>
  );
}

export default App;
