import { createContext, useContext, useState, useEffect } from 'react';

const BookContext = createContext();

const useBook = () => useContext(BookContext);
export default useBook;

const initialBooks = [
  {
    title: 'Focal Point',
    author: 'Brian Tracy',
    status: 'Read',
  },
  {
    title: 'Wise and otherwise',
    author: 'Sudha Murthy',
    status: 'Unread',
  },
];

export const BookProvider = ({ children }) => {
  // const [books, setBooks] = useState(initialBooks);
  const [books, setBooks] = useState(() => {
    const localBooks = localStorage.getItem('books');
    return localBooks ? JSON.parse(localBooks) : [];
  });

  useEffect(() => {
    if (books.length > 0) {
      localStorage.setItem('books', JSON.stringify(books));
    }
  }, [books]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const toggleStatus = (bookName) => {
    const updatedStatus = books.map((book) => {
      if (book.title !== bookName) {
        return book;
      } else {
        return { ...book, status: book.status === 'Read' ? 'Unread' : 'Read' };
      }
    });
    setBooks(updatedStatus);
    // console.log('Updated: ', updatedStatus);
  };

  const deleteBook = (bookName) => {
    const getRemainingBooks = books.filter((book) => book.title !== bookName);
    setBooks(localStorage.setItem('books', JSON.stringify(getRemainingBooks)));
    window.location.reload();
  };

  return (
    <BookContext.Provider value={{ books, addBook, toggleStatus, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};
