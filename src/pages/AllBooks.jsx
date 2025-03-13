import Header from '../components/Header';
import useBook from '../contexts/BookContext';
import { useState } from 'react';

function AllBooks() {
  const { books, toggleStatus, deleteBook } = useBook();
  const filters = ['All', 'Read', 'Unread'];
  const [bookFilter, setBookFilter] = useState('All');

  const filteredBooks =
    bookFilter === 'All'
      ? books
      : books.filter((book) => book.status === bookFilter);

  console.log(bookFilter, filteredBooks.length);

  return (
    <>
      <Header />
      <main className="container py-3">
        <h2 className="mb-3">Book List</h2>

        <section className="mb-5">
          {/* <span>
            Filter by:
            <select
              className="ms-3 w-50"
              onChange={(e) => setBookFilter(e.target.value)}
            >
              <option value="All">All Books</option>
              <option value="Read">Read Books</option>
              <option value="Unread">Unread Books</option>
            </select>
          </span> */}
          <p>Filter by status: </p>
          <ul className="nav nav-pills">
            {filters.map((filter) => (
              <li className="nav-item" key={filter}>
                <button
                  className="btn btn-outline-primary me-3"
                  onClick={(e) => setBookFilter(e.target.value)}
                  value={filter}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </section>

        <p>
          Number of <span className="fw-medium">{bookFilter}</span> books:{' '}
          {filteredBooks.length}
        </p>

        <section>
          {books && books.length > 0 ? (
            <div className="row">
              {filteredBooks.map((book) => (
                <div className="col-md-3 mb-3" key={book.title}>
                  <div className="card">
                    <img src={`https://placehold.co/600x400`} />
                    <div className="card-body">
                      <h5>Title: {book.title}</h5>
                      <p>Author: {book.author}</p>
                      <p>Reading Status: {book.status}</p>
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            toggleStatus(book.title);
                          }}
                        >
                          Mark as {book.status === 'Read' ? 'Unread' : 'Read'}
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteBook(book.title)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No books added in the list.</p>
          )}
        </section>
      </main>
    </>
  );
}

export default AllBooks;
