import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Crew } from "./components/Crew/Crew";
import { Destination } from "./components/Destination/Destination";
import { Home } from "./components/Home/Home";
import { Technology } from "./components/Technology/Technology";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  );
}
