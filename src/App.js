import './App.css';
import Todo from './components/todoList';

function App(props) {
  return (
    <div className="App">
      <h1 className='header'>Список дел:</h1>
      <Todo list={props.list} />
    </div>
  );
}

export default App;
