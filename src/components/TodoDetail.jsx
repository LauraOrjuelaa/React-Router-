import { Link } from 'react-router-dom';

function TodoDetail() {

  const todo = {  
    title: '', 
    description: '', 
    createdAt: '' 
  };

  return (
    <div>
      <h1>Todo Detail</h1>
      <p>Title: {todo.title}</p>
      <p>Description: {todo.description}</p>
      <p>Created At: {todo.createdAt}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default TodoDetail;
