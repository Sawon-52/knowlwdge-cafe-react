import PropTypes from "prop-types";

const Readingtime = ({ readingtime }) => {
  return (
    <div className=" min-h-4 bg-slate-200 my-8 rounded-md p-6 border-2 border-indigo-800 ">
      <h2 className=" font-bold text-3xl text-indigo-800">Spent time on read: {readingtime} min</h2>
    </div>
  );
};

Readingtime.propTypes = {
  readingtime: PropTypes.number.isRequired,
};

export default Readingtime;
