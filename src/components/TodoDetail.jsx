import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function TodoDetail({ todos  }) {
  

    useEffect(() => {
      console.log("Updated Todo List:", todos);
    }, [todos]);
  
  return (
    <div className='container'>
      <h1>TODO LIST</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <h3>Title: {todo.title}</h3>
            <p>Description: {todo.description}</p>
            <p>Creation Date: {todo.creationDate}</p>
            <button>
              <Link to="/">Back to Home</Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

TodoDetail.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    creationDate: PropTypes.string.isRequired,
  })).isRequired,
};

export default TodoDetail;
