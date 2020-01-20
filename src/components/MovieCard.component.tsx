import React from "react";
import {TMovie} from "../store/movie.store";
import {Card} from "../theme/Card";
import {NavLink} from "react-router-dom";

export const MovieCardComponent: React.FC<{movie: TMovie, callback: Function}> =
({movie, callback}): React.ReactElement => {
    return (
        <NavLink to={`/${movie.id}`}>
        <Card onClick={() => {callback()}}>
            <div className="movie-card-img"
                style={{backgroundImage: `url("movie-covers/${movie.img}")`}} />
            <div>
                <div className={"movie-card-title"}>
                    {movie.name}
                </div>
                <div className={"movie-card-rate"}>
                    Rate: {movie.rate}
                </div>
                <div className={"movie-card-description"}>
                    {movie.description}
                </div>
            </div>
        </Card>
        </NavLink>
    )
};
