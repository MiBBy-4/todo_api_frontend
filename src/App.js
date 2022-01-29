import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList/TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo Stream</h1>
        <hr />
        <p>This is the form area</p>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
