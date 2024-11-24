# Assignment 1 - ReactJS app.

Name: Huyi Cui

## Overview.

The content of this repository is a movie-related website that mainly displays movies, movies currently showing, and movies to be released soon, including detailed information about these movies. You can filter movies by filtering movie types and movie languages, and you can add your favorite movies to your favorites.

### Features.
 
+ Add two links on the MovieDetail page. Click them to jump to the similar and recommendation pages.
+ Add a new filter option to the page to filter movies by language.
+ Changed the color of the page.
+ Implemented the paging function.
+ Sort movies by votes.

## Setup requirements.

npm start

## API endpoints.

+ Get the movies' language - configuration/languages
+ Movie details - movie/:id
+ Movie genres - /genre/movie/list
+ Get nowplaying movies - movie/now_playing
+ Get populary movies - movie/popular
+ Get similar movies - movie/id/similar
+ Get recommanded movies - movie/id/recommendations
+ Get upcoming movies - movie/upcoming
+ Get movie reviews - movie/id/reviews
+ Get movie images - movie/id/images

## Routing.

+ /recommend/:id - Provide movie recommendations based on the selected movie.
+ /similar/:id - Show movies similar to the selected movie.
+ /movies/nowplaying - Showing movies currently showing.
+ /movies/popularity - Showing popular movies.

## Independent learning.

