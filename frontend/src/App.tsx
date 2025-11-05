import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header.tsx"
import Bookshelf from "./Bookshelf.tsx"

function App() {
  const [books, setBooks] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await axios.get("/api/books");
      setBooks(response.data);
      console.log("Fetched books: ", response.data);
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
      <Bookshelf books={books} onUploadSuccess={fetchAPI} />
    </>
  );
}

export default App
