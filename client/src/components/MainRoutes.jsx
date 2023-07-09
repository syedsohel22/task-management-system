import { Route, Routes } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import UserPage from "../Pages/UserPage";
import AdminPage from "../Pages/AdminPage";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<UserPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};

export default MainRoutes;
