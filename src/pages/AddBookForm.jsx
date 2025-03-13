import Header from '../components/Header';
import { useState } from 'react';
import useBook from '../contexts/BookContext';

function AddBookForm() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    status: '',
  });
  const [message, setMessage] = useState('');

  const { addBook } = useBook();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'radio' && checked ? value : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addBook(formData);

    const emptyValues = { title: '', author: '', status: '' };
    setFormData(emptyValues);
    setMessage('Book added successfully!');
  };
  return (
    <>
      <Header />

      <main className="container w-50">
        <h2 className="my-3">Add a Book</h2>
        {formData && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <label className="form-label">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control"
            required
          />
          <br />

          <label className="form-label">Author: </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="form-control"
            required
          />
          <br />

          <label className="form-label me-3">Status: </label>
          <input
            type="radio"
            name="status"
            onChange={handleChange}
            value="Read"
            checked={formData.status === 'Read'}
            className="form-check-input me-3"
            required
          />
          <label className="form-check-label me-3">Read</label>

          <input
            type="radio"
            name="status"
            onChange={handleChange}
            value="Unread"
            checked={formData.status === 'Unread'}
            className="form-check-input me-3"
            required
          />
          <label className="form-check-label">Unread</label>
          <br />
          <br />
          <button type="submit" className="btn btn-primary">
            Add Book
          </button>
        </form>
      </main>
    </>
  );
}

export default AddBookForm;
