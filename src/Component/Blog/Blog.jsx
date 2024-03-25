import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog }) => {
  const { cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;

  return (
    <div className="p-5 md:p-0 md:w-2/3 my-8 mb-3">
      <img className="w-full rounded-md " src={cover} alt="cover Image" />

      <div className="md:flex justify-between items-center my-4 mt-5">
        <div className="flex gap-4">
          <img className="w-14 h-14" src={author_img} alt="author_img" />
          <div>
            <h1 className="text-2xl font-bold text-gray-950">{author}</h1>
            <h2 className="text-xl  text-gray-500">{posted_date}</h2>
          </div>
        </div>

        <div>
          <h2 className="text-xl  text-gray-500 flex items-center gap-1">
            {reading_time} min read <CiBookmark className="text-xl  text-gray-500 " />{" "}
          </h2>
        </div>
      </div>

      <div>
        <h1 className=" text-4xl font-bold text-gray-950 my-4">{title}</h1>
      </div>

      <div className="flex gap-3 text-xl  text-gray-500">
        {hashtags.map((item, idx) => (
          <span key={idx}>
            <a href=""># {item}</a>
          </span>
        ))}
      </div>
      <button className=" text-indigo-800 underline decoration-1 text-xl  my-3">Mark as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
