import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/main_layout";
import Landing_page from "./pages/landing_page";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Users from "./pages/services";
import LoginForm from "./pages/login";
import UserForm from "./pages/signup";
import Contact from "./pages/contact";
import Project_page from "./pages/projects";
import ProtectedRoute from "./Components/protected_route";
import Experience_page from "./pages/experience";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Landing_page />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Users />} />
        <Route path="/projects" element={<Project_page />} />
        <Route path="/experience" element={<Experience_page/>} />
        <Route path="/register" element={<UserForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;