import { useState } from "react";
import "./App.css";
import Blogs from "./Component/Blogs/Blogs";
import Bookmarks from "./Component/Bookmarks/Bookmarks";
import Header from "./Component/Header/Header";
import Readingtime from "./Component/Readintime/Readingtime";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingtime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  };

  const handleReadinTime = (time) => {
    const newReadingtime = readingtime + time;
    setReadingTime(newReadingtime);
  };

  return (
    <div className="md:w-4/5 mx-auto">
      <header>
        <Header></Header>
      </header>

      <main className="md:flex gap-5">
        <div className=" md:w-2/3 ">
          <Blogs handleAddToBookmark={handleAddToBookmark} handleReadinTime={handleReadinTime}></Blogs>
        </div>

        <div className="md:w-1/3">
          <Readingtime readingtime={readingtime}></Readingtime>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </main>
    </div>
  );
}

export default App;
