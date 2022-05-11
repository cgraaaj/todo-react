import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [state, setState] = useState("");
  const [todo, setTodo] = useState([]);
  useEffect(() => {}, [state]);

  function onFormSubmit(e) {
    e.preventDefault();
    console.log(state);
    let t = todo;
    t.push(state);
    setTodo([...t]);
    console.log(todo);
  }

  function onInputChnage(e) {
    setState(e.target.value);
  }

  function renderList() {
    return todo.map((data) => <li key={data}>{data}</li>);
  }

  return (
    <div className="App">
      <form onSubmit={onFormSubmit}>
        <input onChange={onInputChnage}></input>
      </form>
      {renderList()}
    </div>
  );
}
