import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;

  return (
    <div>
      <h2 className=" text-xl font-semibold bg-white p-4 my-3 rounded-md">{title}</h2>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
