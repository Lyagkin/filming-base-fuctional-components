import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";
import Page404 from "../components/Page404";
import { useEffect, useRef, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Main() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const firstRequestingFilmRef = useRef("die hard");

  useEffect(() => {
    onRequest(`http://www.omdbapi.com/?apikey=4cbfd252&s`, firstRequestingFilmRef.current);
  }, []);

  const onLoad = () => {
    setLoading(true);
  };

  const onError = () => {
    setError(false);
  };

  const onRequest = (url, str, filter = "") => {
    fetch(`${url}=${str}${filter}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.Error === "Movie not found!" || res.Error === "Too many results.") {
          setFilms("movie not found!");
          setLoading(false);
        } else {
          setFilms(res.Search);
          setLoading(false);
        }
      })
      .catch((e) => {
        setError(true);
        setLoading(false);
      });
  };

  const searchFilmByName = (name, filter) => {
    if (!name) {
      return;
    } else {
      onLoad();
      onError();
      onRequest(`http://www.omdbapi.com/?apikey=${API_KEY}&s`, name, filter);
    }
  };

  let style;

  const movieNotFound = films === "movie not found!" || error ? <Page404 /> : null;
  const movie = typeof films === "object" && !loading ? <Movies films={films} /> : null;
  const preloader = loading ? <Preloader /> : null;

  if (movieNotFound || preloader) {
    style = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
  } else {
    style = null;
  }

  return (
    <>
      <Search searchFilmByName={searchFilmByName} />
      <main style={style} className="content">
        {movie} {preloader} {movieNotFound}
      </main>
    </>
  );
}
