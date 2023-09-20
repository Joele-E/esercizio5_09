import useCounter from "./useCounter";

export default function Counter() {
  let { counter, onIncrement, onDecrement, onCounterReset } = useCounter();

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onIncrement}>INCREMENTA</button>
      <button onClick={onDecrement}>DECREMENTA</button>
      <button onClick={onCounterReset}>RESET</button>
    </div>
  );
}
