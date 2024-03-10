import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoList.jsx';
import TodoNew from './components/TodoNew.jsx';
import TodoDetail from './components/TodoDetail.jsx';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
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
        <Route path="/todo/:id" element={<TodoDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
