import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AllBooks from './pages/AllBooks';
import AddBookForm from './pages/AddBookForm';
import { BookProvider } from './contexts/BookContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/all-books',
    element: <AllBooks />,
  },
  {
    path: '/add-book',
    element: <AddBookForm />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router}></RouterProvider>
    </BookProvider>
  </StrictMode>
);
