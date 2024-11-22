import React,{useState} from "react";
import { getPopularity } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const PopularityPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('popular', getPopularity)
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
  const addToFavorites = (movieId) => true 

  return (
    <div>
    <button onClick={toggleSortOrder}>
      Sort by Vote Average ({sortOrder === "asc" ? "Ascending" : "Descending"})
    </button>
    
    <PageTemplate
      title="Popular Movies"
      movies={sortedMovies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />;
      }}
    />
  </div>
);
};
export default PopularityPage;