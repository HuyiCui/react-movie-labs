import React, {useState} from "react";
import { getUpcomingMovies} from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";

const UpcomingMoviesPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)
  const [sortOrder, setSortOrder] = useState("asc");

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  const sortedMovies = [...movies].sort((a, b) => {
    return sortOrder === "asc"
      ? a.vote_average - b.vote_average 
      : b.vote_average - a.vote_average; 
  });

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  return (
    <div>
    <button onClick={toggleSortOrder}>
      Sort by Vote Average ({sortOrder === "asc" ? "Ascending" : "Descending"})
    </button>
    
    <PageTemplate
      title="Upcoming Movies"
      movies={sortedMovies}
      action={(movie) => {
        return <AddToMustWatchIcon movie={movie} />;
      }}
    />
  </div>
);
};
export default UpcomingMoviesPage;