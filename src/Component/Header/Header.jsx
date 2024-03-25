import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className="md:flex justify-between items-center p-4 border-b-2">
      <h1 className="text-3xl font-bold text-gray-900">Knowledge Cafe</h1>
      <img src={profile} alt="Profile Image" />
    </header>
  );
};

export default Header;
