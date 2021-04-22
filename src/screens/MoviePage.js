import { useEffect, useState } from 'react';
import axios from 'axios';
import './MoviePage.css';
import MovieList from '../components/MovieList';
import FilteringBar from '../components/FilteringBar';
import { useLocation, useHistory } from 'react-router';
import SearchBox from '../components/SearchBox';

const imgUrl = 'https://image.tmdb.org/t/p/w200';
const apiUrl = 'https://api.themoviedb.org/3';
const apiPopularRoute = '/movie/popular?';
const apiGenreListRoute = '/genre/movie/list?';
const apiKey = process.env.REACT_APP_TMDB_API_KEY;

export default function MoviePage() {
  const [availableGenres, setAvailableGenres] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const history = useHistory();
  const location = useLocation();

  // Get the movies & all the genres available in TMDB
  const [popularMovie, setPopularMovie] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios
      .get(apiUrl + apiPopularRoute + 'api_key=' + apiKey)
      .then(({ data }) => setMovieList(data.results));

    axios
      .get(apiUrl + apiGenreListRoute + 'api_key=' + apiKey)
      .then((res) => setAvailableGenres(res.data.genres));
  }, []);

  return (
    <>
      <h1>Here is a list of popular movies</h1>
      <FilteringBar
        availableGenres={availableGenres}
        setMovieList={setMovieList}
        history={history}
        location={location}
        apiUrl={apiUrl}
        apiKey={apiKey}
        apiPopularRoute={apiPopularRoute}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <MovieList
        movieList={movieList}
        imgUrl={imgUrl}
        searchValue={searchValue}
      />
    </>
  );
}
