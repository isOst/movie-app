import React from "react";
import {useSelector} from "react-redux";
import {TState} from "../store";
import {MoviePageComponent} from "../components/MoviePage.component";

export const MoviePageContainer: React.FC =
(): React.ReactElement => {
    const movie = useSelector((state: TState) => state.movie);

    return (
        <div>
            {
                (movie && movie.data !== null)
                    ? <MoviePageComponent movie={movie.data}/>
                    : "No such movie" // Here should be error page if there is no data from real server
            }
        </div>
    )
};