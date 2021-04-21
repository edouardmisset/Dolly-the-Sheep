/*MoviePage function which will call MovieList rendering in MovieCard*/

/*component import*/
import { useEffect, useState } from 'react';
import axios from 'axios';
import './MoviePage.css';
import MovieList from '../components/MovieList';
import SearchBox from '../components/SearchBox';

export default function MoviePage() {
  const [popularMovie, setPopularMovie] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios

      .get(
        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f22eb05a70b166bd4e2c1312e15d8e8b'
      )

      .then((response) => response.data)

      .then((data) => {
        const mostPopularMovies = data.results;
        const moviesToShow = [];

        for (let i = 0; i <= 9; i += 1) {
          moviesToShow.push(mostPopularMovies[i]);
        }
        return setPopularMovie(moviesToShow);
      });
  }, []);

  return (
    <>
      <h1>Here is the list of all movies</h1>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList movieItems={popularMovie} searchValue={searchValue} />
    </>
  );
}
