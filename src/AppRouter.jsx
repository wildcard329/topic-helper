import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home.jsx"));
const Topics = lazy(() => import("./pages/Topics.jsx"));
const TopicViewer = lazy(() => import("./pages/TopicViewer.jsx"));

const AppRouter = () =>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/topics" element={<Topics />} />
    <Route path="/:topic" element={<TopicViewer />} />
  </Routes>

export default AppRouter
