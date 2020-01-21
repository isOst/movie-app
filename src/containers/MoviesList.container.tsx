import React from "react";
import {Dispatch} from "redux";
import {useDispatch, useSelector} from "react-redux";
import {TState} from "../store";
import {MoviesContainer} from "../theme/MoviesContainer";
import {MOVIES_VIEW_GRID, MOVIES_VIEW_LIST} from "../store/movies-view.store";
import {MovieCardComponent} from "../components/MovieCard.component";
import {TMovie} from "../store/movie.store";
import {selectMovie} from "../actions/movie.action";
import {MovieBarComponent} from "../components/MovieBar.component";

export const MoviesListContainer: React.FC = () => {
    const dispatch: Dispatch = useDispatch();
    const movies = useSelector((state: TState) => state.movies);
    const moviesView = useSelector((state: TState) => state.moviesView);
    const clickCallback = (movie: TMovie) => {
        dispatch(selectMovie(movie))
    };

    return (
        <MoviesContainer>
            {(movies && movies.data && movies.data.length > 0)
                ? movies.data.map((movie: TMovie) => {
                    switch (moviesView) {
                        case MOVIES_VIEW_GRID:
                            return <MovieCardComponent
                                movie={movie}
                                key={movie.id}
                                callback={() => {clickCallback(movie)}}
                            />;
                        case MOVIES_VIEW_LIST:
                            return <MovieBarComponent
                                movie={movie}
                                key={movie.id}
                                callback={() => {clickCallback(movie)}} />;
                        default:
                            return <MovieCardComponent
                                movie={movie}
                                key={movie.id}
                                callback={() => {clickCallback(movie)}}
                            />;
                    }
                })
                : "No movies"
            }
        </MoviesContainer>
    )
};