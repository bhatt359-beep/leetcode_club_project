import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header.tsx"
import Bookshelf from "./Bookshelf.tsx"

function App() {
  const [books, setBooks] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/books");
      setBooks(response.data);
      console.log(response.data);
    } catch (err) {
      console.error("Failed to fetch books:", err);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <Header />
      <Bookshelf />
      {/* <div>
        {array.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>File: {book.filename} ({book.filetype})</p>
            <p>Tags: {book.tags}</p>
            <p>Added: {book.added_on}</p>
          </div>
        ))}
      </div> */}
    </>
  );
}

export default App
