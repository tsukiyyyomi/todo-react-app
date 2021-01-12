import './App.css';
import {useState, useEffect} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
function App() { 

  
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(()=>{
    filterHandler();
  },[todos, status]);
  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=>todo.completed===true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo=>todo.completed===false));
        break;
      default:
        setFilteredTodos(todos);
        break;

    }
  }
  return (
    <div className="App">
      <h1>Hi girlz</h1>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
        filteredTodos={filteredTodos}
      />      
      <TodoList
        todos={todos}
        setTodos = {setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
