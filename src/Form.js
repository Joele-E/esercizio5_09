import useControlledForm from "./useControlledForm";

export default function Form() {
  let { data, onInput, onLogin } = useControlledForm();

  return (
    <div>
      <input
        type="text"
        name="username"
        value={data.username}
        onChange={onInput}
      />
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={onInput}
      />
      <button onClick={onLogin}>Login</button>
    </div>
  );
}
