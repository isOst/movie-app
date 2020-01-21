import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import rootReducer from "../reducers";
import {IMoviesState} from "../store/movies.store";
import {TMovieState} from "./movie.store";
import {TMoviesPagesState} from "./movies-pages.store";

/**
 * App State type definition
 */
export type TState = {
    movies: IMoviesState,
    movie: TMovieState,
    moviesView: string, // defined in MoviesViewStore as a name of view kind
    moviesPages: TMoviesPagesState
}

/**
 * Create app store
 */
export const Store = createStore(rootReducer, applyMiddleware(thunk));