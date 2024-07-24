import "./App.css";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTask from "./components/AddTask";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
              </>
            }
          />
          <Route
            exact
            path="/AddTask"
            element={
              <>
                <Navbar />
                <AddTask />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
