import React from "react";
import {TMovie} from "../store/movie.store";
import {NavLink} from "react-router-dom";
import {Bar} from "../theme/Bar";

export const MovieBarComponent: React.FC<{movie: TMovie, callback: Function}> =
({movie, callback}): React.ReactElement => {
    return (
        <NavLink to={`/${movie.id}`}>
        <Bar onClick={() => {callback()}}>
            <div className="movie-bar-img"
                style={{backgroundImage: `url("movie-covers/${movie.img}")`}} />
            <div className={"movie-bar-rate"}>
                Rate: {movie.rate}
            </div>
            <div className={"movie-bar-container"}>
                <div className={"movie-bar-title"}>
                    {movie.name}
                </div>
                <div className={"movie-bar-description"}>
                    {movie.description}
                </div>
            </div>
        </Bar>
        </NavLink>
    )
};
