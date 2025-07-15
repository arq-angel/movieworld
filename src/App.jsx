import "./App.css";
import Hero from "./components/Hero";
import Display from "./components/Display";
import {useState} from "react";

function App() {
    const [movieList, setMovieList] = useState([]);

    const addMovieToList = (movie) => {
        // remove possible duplicate movie
        const tempMovie = movieList.filter((item) => item.imdbID !== movie.imdbID)

        setMovieList([...tempMovie, movie]);
    }

    const handleOnDeleteMovie = (imdbId) => {
        confirm("Are you sure you want to delete this movie from the list?") &&
        setMovieList(movieList.filter((mv) => mv.imdbID !== imdbId));
    }

    return (<div className="wrapper">
            {/* Hero section */}
            <Hero addMovieToList={addMovieToList}/>
            {/* Display Section */}
            <Display movieList={movieList} handleOnDeleteMovie={handleOnDeleteMovie}/>
        </div>);
}

export default App;
