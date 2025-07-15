import React, {useEffect, useRef, useState} from "react";
import MovieCard from "./MovieCard.jsx";
import {fetchFromAPI} from "../utils/axios.js";
import {randomChar} from "../utils/random.js";

const Hero = ({addMovieToList}) => {
    const [searchedMovie, setSearchedMovie] = useState({});
    const [bgImage, setBgImage] = useState("");
    const shouldFetch = useRef(true);
    const searchRef = useRef("");
    const [searching, setSearching] = useState(false);

    useEffect(() => {
        if (shouldFetch.current) {
            fetchMovie(randomChar());
            shouldFetch.current = false;
        }
    }, [])

    const fetchMovie = async (str) => {
        const movie = await fetchFromAPI(str);
        setSearchedMovie(movie);
        setBgImage(movie.Poster);
        setSearching(false);
    }

    const handleOnMovieSearch = () => {
        const str = searchRef.current.value;
        fetchMovie(str);
        searchRef.current.value = "";
    }

    const handleOnDelete = () => {
        setSearchedMovie({});
        setSearching(true);
    }

    const handleOnAddToTheList = (mood) => {
        addMovieToList({...searchedMovie, mood});
        setSearchedMovie({});
        setSearching(true);
    }

    const movieStyle = {
        backgroundImage: `url(
      ${bgImage}
    )`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", height: "60vh",
    };

    return (<div>
        <nav className="text-danger py-3 fixed-top">
            <h2 className="container">Movie World</h2>
        </nav>

        <div
            className="hero d-flex justify-content-center align-items-center text-light"
            style={movieStyle}
        >
            <div className="hero-content">
                <div className={searching ? "form-center" : "form-top"}>
                    {searching && (
                        <div className="text-center">
                            <h1>Search Millions of Movies</h1>
                            <p>Find about the movie more in details before watching them ...</p>
                        </div>)}

                    <div className="input-group my-5">
                        <input
                            ref={searchRef}
                            onFocus={() => setSearching(true)}
                            type="text"
                            className="form-control"
                            placeholder="Search movie by name ..."
                            aria-label="Search movie by name ..."
                            aria-describedby="button-addon2"
                        />
                        <button
                            onClick={handleOnMovieSearch}
                            className="btn btn-danger"
                            type="button"
                            id="button-addon2"
                        >
                            Search
                        </button>
                    </div>
                </div>

                {!searching && (<div className="movie-card-display showMovie">
                    <MovieCard searchedMovie={searchedMovie} deleteFunction={handleOnDelete}
                               handleOnAddToTheList={handleOnAddToTheList}/>
                </div>)}
            </div>
        </div>
    </div>);
};

export default Hero;
