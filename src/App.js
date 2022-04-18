import "./styles.css";
import {useState} from 'react';

export default function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const inputHandler = (e) =>{
    setInput(e.target.value);
    
  }

  const addToDo = (e) => {
    e.preventDefault();
    const newtodo = [...todo, input];
    setTodo(newtodo)
    setInput("")
  }
  return (
    <div className="App">
      <h1 className="header-text">Todo App</h1>
      <form onSubmit={addToDo}>
        <input className="input-text" autoComplete="off" onChange={inputHandler} name="text" value={input} placeholder="What do you want to do" />
        <button className="add-button" type="submit">Add</button>
        </form>
        <div className="list">
        {todo.map((todos, index) =>(
          <li className="list-items" key={index} > 
            {index+1}. {todos}
          </li>
        )
        ) }
          </div>
     
    </div>
  );
}
