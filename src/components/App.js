// import React from 'react';

// function App() {

//   return (
//     <div id='main'>
      
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div id='main'>
      <h1>Counter App</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <span data-testid='counter'>{counter}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;

