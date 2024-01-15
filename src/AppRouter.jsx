import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home.jsx"));

const AppRouter = () =>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>

export default AppRouter
