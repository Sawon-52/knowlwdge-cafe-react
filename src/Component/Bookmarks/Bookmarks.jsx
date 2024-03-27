import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3 min-h-96 bg-slate-200 my-8 rounded-md p-6">
      <h2 className=" font-bold text-3xl my-4">Bookmarked Blogs: {bookmarks.length}</h2>
      {bookmarks.map((bookmark) => (
        <Bookmark bookmark={bookmark} key={bookmarks.id}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.object.isRequired,
};

export default Bookmarks;
