import { useState } from "react";
import "./App.css";
import Blogs from "./Component/Blogs/Blogs";
import Bookmark from "./Component/Bookmarks/Bookmarks";
import Header from "./Component/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  };

  return (
    <div className="md:w-4/5 mx-auto">
      <header>
        <Header></Header>
      </header>

      <main className="md:flex gap-5">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmark bookmarks={bookmarks}></Bookmark>
      </main>
    </div>
  );
}

export default App;
