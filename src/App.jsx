import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(10);
  return (
    <div>
      <button onClick={() => setCounter (counter < 1 ? counter : counter -1 )}>-</button>
      {counter}
      <button onClick={() => setCounter (counter + 1)}>+</button>
    </div>
  );
};

export default App;
