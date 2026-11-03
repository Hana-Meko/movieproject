import React from "react";
import { useEffect, useState } from "react";
import styles from "./DisplayRow.module.css";
import SlideShow from "../SlideShow/SlideShow";
import { movies } from "../../Data/Data";
import { movieInstance } from "../../Utility/MovieInstance";
import requests from "../../Utility/RequestUrls";

function DisplayRow() {
  const[movies, setMovies] = useState({
    trending: [],
    netflixOriginals: [],
    topRated: [],
    actionMovies: [],
    comedyMovies: [],
    horrorMovies: [],
    romanceMovies: [],
    documentaries: [],
  })
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const [
        trendingResponse,
        netflixOriginalsResponse,
        topRatedResponse,
        actionMoviesResponse,
        comedyMoviesResponse,
        horrorMoviesResponse,
        romanceMoviesResponse,
        documentariesResponse
      ] = await Promise.all([
        movieInstance.get(requests.fetchTrending),
        movieInstance.get(requests.fetchNetflixOriginals),
        movieInstance.get(requests.fetchTopRatedMovies),
        movieInstance.get(requests.fetchActionMovies),
        movieInstance.get(requests.fetchComedyMovies),
        movieInstance.get(requests.fetchHorrorMovies),
        movieInstance.get(requests.fetchRomanceMovies),
        movieInstance.get(requests.fetchDocumentaries)
      ])


      setMovies({
        trending: trendingResponse.data.results,
        netflixOriginals: netflixOriginalsResponse.data.results,
        topRated: topRatedResponse.data.results,
        actionMovies: actionMoviesResponse.data.results,
        comedyMovies: comedyMoviesResponse.data.results,
        horrorMovies: horrorMoviesResponse.data.results,
        romanceMovies: romanceMoviesResponse.data.results,
        documentaries: documentariesResponse.data.results
      });
    } catch (error) {
      console.log("Error fetching movies:", error);
    }
  };

  
  return (
    <div className={styles.mainWrapper}>
      <SlideShow title="Netflix trending" movies={movies.trending} />
      <SlideShow title="Popular on Netflix" movies={movies.netflixOriginals} />
      <SlideShow title="Top Rated" movies={movies.topRated} />
      <SlideShow title="Action Movies" movies={movies.actionMovies} />
      <SlideShow title="Comedy Movies" movies={movies.comedyMovies} />
      <SlideShow title="Horror Movies" movies={movies.horrorMovies} />
      <SlideShow title="Romance Movies" movies={movies.romanceMovies} />
      <SlideShow title="Documentaries" movies={movies.documentaries} />
    </div>
  );
}

export default DisplayRow;
