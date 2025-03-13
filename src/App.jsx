import { useState } from 'react';
import Header from './components/Header';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="container bg-secondary-subtle text-secondary-emphasis py-5 my-3 rounded">
          <div className="text-center">
            <h1 className="display-3 fw-normal">Welcome to Libros</h1>
            <p className="fs-5 mt-3">Your personal library management app</p>
          </div>
        </section>

        <section className="py-5 bg-body-tertiary">
          <div className="container">
            <div className="text-center">
              <h2>List of All Books</h2>
              <p>View books and filter by its reading status.</p>
              <Link className="btn btn-primary" to="/all-books">
                View Now
              </Link>
            </div>
          </div>
        </section>

        <section className="container py-5">
          <div className="text-center">
            <h2>Manage Books</h2>
            <p>Add a new book to the system with its details.</p>
            <Link className="btn btn-primary" to="/add-book">
              Add Book
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
