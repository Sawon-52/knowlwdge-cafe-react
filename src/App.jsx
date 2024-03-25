import "./App.css";
import Blogs from "./Component/Blogs/Blogs";
import Header from "./Component/Header/Header";

function App() {
  return (
    <div className="md:w-4/5 mx-auto">
      <header>
        <Header></Header>
      </header>

      <main>
        <Blogs></Blogs>
      </main>
    </div>
  );
}

export default App;
