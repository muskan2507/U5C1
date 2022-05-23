import { useList } from "./hooks/useList";
import { useCounter } from "./hooks/useCounter";
import { v4 as uuid } from "uuid";

function App() {
  // Entire thing bellow should work. you don't have to edit this file, only implement  hooks
  const [list, { push, pop, clear, reset, map }]: any = useList([1, 2, 3]);

  const { value, inc, dec, set } = useCounter(10);

  return (
    <div className="App">
      <button
        className="bg-indigo-300 mx-4 px-3 py-1"
        onClick={() => push(list.length + 1)}
      >
        Append
      </button>
      <button className="bg-indigo-300 mx-4 px-3 py-1" onClick={() => pop()}>
        pop
      </button>
      <button className="bg-indigo-300 mx-4 px-3 py-1" onClick={() => clear()}>
        clear
      </button>
      <button className="bg-indigo-300 mx-4 px-3 py-1" onClick={() => reset()}>
        reset
      </button>
      <button
        className="bg-indigo-300 mx-4 px-3 py-1"
        onClick={() => map((el: any) => el * 2)}
      >
        Double every element
      </button>
      {list.map((l: any) => (
        <div key={uuid()}>{l}</div>
      ))}

      <hr />
      <button className="bg-indigo-300 mx-4 px-3 py-1" onClick={() => inc()}>
        Add 1
      </button>
      <button className="bg-indigo-300 mx-4 px-3 py-1" onClick={() => inc(3)}>
        Add 3
      </button>
      <button className="bg-indigo-300 mx-4 px-3 py-1" onClick={() => dec()}>
        Sub 1
      </button>
      <button className="bg-indigo-300 mx-4 px-3 py-1" onClick={() => dec(4)}>
        Sub 4
      </button>
      <button className="bg-indigo-300 mx-4 px-3 py-1" onClick={() => set(100)}>
        Set counter to 100
      </button>
      <h3>Value: {value}</h3>
    </div>
  );
}

export default App;