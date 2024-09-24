import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContents from "./components/MainContents/MainContents";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <MainContents />
    </div>
  );
}

export default App;
