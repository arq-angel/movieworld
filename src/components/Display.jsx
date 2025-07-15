import React, {useEffect, useState} from "react";
import MovieCard from "./MovieCard.jsx";

const Display = ({movieList, handleOnDeleteMovie}) => {
    const [displayList, setDisplayList] = useState([]);

    useEffect(() => {
        setDisplayList(movieList);
    }, [movieList]);

    const handleOnFilter = (mood) => {
        if (mood === "all") {
            return setDisplayList(movieList);
        }

        setDisplayList(movieList.filter((mv) => mv.mood === mood));
    }

    return <div className="container mt-5 pb-3">
        <div className="bg-dark p-3 rounded">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button
                            onClick={() => handleOnFilter("all")}
                            type="button" className="btn btn-primary">All
                        </button>
                        <button
                            onClick={() => handleOnFilter("drama")}
                            type="button" className="btn btn-warning">Drama
                        </button>
                        <button
                            onClick={() => handleOnFilter("action")}
                            type="button" className="btn btn-info">Action
                        </button>
                    </div>

                    <div className="mt-3 text-light">{displayList?.length} movies listed</div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col d-flex flex-wrap justify-content-around gap-2">
                    {displayList.length > 0 && displayList.map((item, index) => (
                        <div key={index} className="movie-card-display showMovie">
                            <MovieCard searchedMovie={item} deleteFunction={handleOnDeleteMovie}/>
                        </div>))}
                </div>
            </div>
        </div>
    </div>;
};

export default Display;
