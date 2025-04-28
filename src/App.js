import "./App.css";
import RegisterForm from "./m2_hook";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <Link to="/RegisterForm" className="nav-item">Module 2 _ Hooks</Link>

      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome Home!</h1>} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>

    </div>
  );
};

export default App;
