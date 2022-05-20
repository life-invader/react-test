import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../login/login";
import Profile from "../profile/profile";
import RequireAuth from "../require-auth/require.auth";

import "./app.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/profile"
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}

export default App;
