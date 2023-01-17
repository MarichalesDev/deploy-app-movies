import { useEffect } from "react";
import { MovieCard } from "./MoviesCard";
import styles from "./MovieGrid.module.css";
import { useState } from "react";
import { get } from "../utils/httpClient";

export function MoviesGrid() {
    //let movies = [];
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {

       get("/discover/movie").then((data) => {
        setMovies(data.results);
     })
    },[])
   return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => 
                <MovieCard key={movie.id} movie={movie} />)}
        </ul> 
    )
}