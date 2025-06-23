import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load pages
const Home = lazy(() => import('../pages/Home'));
const MovieDetail = lazy(() => import('../pages/MovieDetail'));
const Favorites = lazy(() => import('../pages/Favorites'));

const AppRoutes = () => (
    <Suspense fallback={<div style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</div>}>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movie/:id" element={<MovieDetail/>} />
            <Route path="/favorites" element={<Favorites/>} />
        </Routes>
    </Suspense>
)

export default AppRoutes;