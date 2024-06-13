import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoList.jsx';
import TodoNew from './components/TodoNew.jsx';
import TodoDetail from './components/TodoDetail.jsx';
import { useDispatch } from 'react-redux';
import { addTodo } from './redux/todoSlice.jsx'; 

function App() {
  const dispatch = useDispatch();
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    dispatch(addTodo(newTodo)); 
  };
  

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<TodoList todos={todos} setTodos={setTodos} />} 
        />
        <Route
          path="/new"
          element={<TodoNew handleAddTodo={handleAddTodo} />}
        />
        <Route path="/detail" element={<TodoDetail todos={todos} />}/>
      </Routes>
    </Router>
  );
}

export default App;
