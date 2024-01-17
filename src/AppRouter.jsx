import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home.jsx"));
const Topics = lazy(() => import("./pages/Topics.jsx"));

const AppRouter = () =>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/topics" element={<Topics />} />
  </Routes>

export default AppRouter
