import LandingPage from "./pages/LandingPage"
import Library from "./pages/Library";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="bg-backgroundPrimary font-Poppins text-textPrimary">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </div>
    </Router>
  )
}