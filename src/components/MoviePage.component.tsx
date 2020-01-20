import React from "react";
import {TMovie} from "../store/movie.store";
import {Card} from "../theme/Card";
import {NavLink} from "react-router-dom";

export const MoviePageComponent: React.FC<{movie: TMovie}> =
({movie}): React.ReactElement => {
    return (
        <div className={"movie-page-container"}>
            <div className={"movie-page-img"}
                style={{backgroundImage: `url("movie-covers/${movie.img}")`}}/>
            <section className={"movie-page-section"}>
                <div className={"movie-page-name"}>
                    {movie.name}
                </div>
                <div className={"movie-page-rate"}>
                    Rate: {movie.rate}
                </div>
                <div className={"movie-page-description"}>
                    {movie.description}
                </div>
            </section>
        </div>
    )
};
