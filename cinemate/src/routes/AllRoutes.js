import { Routes, Route } from "react-route-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
       <Routes>
            <Route path="/" element={<MovieList apiPath="now_playing/movie" title="home" />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="movies/popular" element={<MovieList apiPath="popular/movie" title="Popular" />} />
            <Route path="movies/top" element={<MovieList apiPath="top_rated/movie" title="Top Rated" />} />
            <Route path="movies/upcoming" element={<MovieList apiPath="upcoming/movie" title="Upcoming" />} />
            <Route path="movies/search" element={<Search  apiPath="search/movie" />} />
            <Route path="*" element={<PageNotFound title="Page Not Found" />} />
       </Routes>
    </div>
  )
}
