import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../index.css'

function TodoNew({ handleAddTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [creationDate, setCreationDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentDate = new Date().toISOString();

    const newTodo = {
      id: Date.now(),
      title: title,
      description: description,
      creationDate: currentDate
    };

    console.log("New Todo:", newTodo); 

    handleAddTodo(newTodo);

    setTitle('');
    setDescription('');
    setCreationDate('');
  };

  return (
    <div className='container'>
      <h1>Create New Todo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Creation Date:</label>
          <input
            type="date"
            value={creationDate}
            onChange={(e) => setCreationDate(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
      <button>
      <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
}

TodoNew.propTypes = {
  handleAddTodo: PropTypes.func.isRequired
};

export default TodoNew;
