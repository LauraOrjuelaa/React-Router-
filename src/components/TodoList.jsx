  import { useEffect } from 'react';
  import PropTypes from 'prop-types'; 
  import { Link } from 'react-router-dom';
  import '../index.css'


  function TodoList({ todos, setTodos }) {
    const handleDeleteTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
    }; 

    useEffect(() => {
      console.log("Updated Todo List:", todos);
    }, [todos]);

    return (
      <div className='container'>
        <h1>TODO LIST</h1>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <h3>{todo.title}</h3>
              <Link to="/detail"><button className='view'>View</button></Link> 
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <Link to="/new">
          <button>Create New</button>
        </Link>
      </div>
    );
  }

  TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
    setTodos: PropTypes.func.isRequired,
  };

  export default TodoList;
