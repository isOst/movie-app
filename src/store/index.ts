import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import rootReducer from "../reducers";
import {IMoviesState} from "../reducers/movies.reducer";
import {TMovieState} from "./movie.store";

/**
 * App State type definition
 */
export type TState = {
    movies: IMoviesState,
    movie: TMovieState,
    moviesView: string // defined in MoviesViewStore as a name of view kind
}

/**
 * Create app store
 */
export const Store = createStore(rootReducer, applyMiddleware(thunk));