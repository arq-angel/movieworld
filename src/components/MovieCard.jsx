import React from "react";

const MovieCard = ({searchedMovie, deleteFunction, handleOnAddToTheList}) => {
    const {Poster, Title, imdbRating, Plot, imdbID, mood} = searchedMovie;

    return <div className="container">
        <div className="row border rounded text-dark p-3 movie-card-item">
            <div className="col-md">
                <img src={Poster} alt=""/>
            </div>
            <div className="col-md">
                <h3>{Title}</h3>
                <p>IMDB Rating: {imdbRating}</p>
                <p>{Plot?.slice(0, 50)}</p>
                {!mood && (
                    <div className="d-flex justify-content-between gap-2">
                        <button
                            onClick={() => handleOnAddToTheList("drama")}
                            className="btn btn-warning flex-grow-1">
                            {" "}
                            Drama
                        </button>
                        <button
                            onClick={() => handleOnAddToTheList("action")}
                            className="btn btn-info flex-grow-1">
                            {" "}
                            Action
                        </button>
                    </div>
                )}

                <div className="d-grid mt-3">
                    <button
                        onClick={() => deleteFunction(imdbID)}
                        className="btn btn-danger">
                        {" "}
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>;
};

export default MovieCard;
