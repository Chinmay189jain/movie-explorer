import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie/:id" element={<MovieDetail/>} />
    </Routes>
)

export default AppRoutes;