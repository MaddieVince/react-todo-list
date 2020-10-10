import React, { useState } from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoItem from './components/TodoItem/TodoItem';
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    }, 
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    }, 
    {
      text: "Build really cool todo app",
      isCompleted: false,
    }, 
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className="app">
    <div className="todo-list">
      <h1>My To-do List</h1>
      {todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          index={index}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
      </div>
      </div>
  );
}
export default App;
