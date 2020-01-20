import {combineReducers} from "redux";
import {moviesReducer} from "./movies.reducer";
import {moviesViewReducer} from "./movies-view.reducer";
import {movieReducer} from "./movie.reducer";

/**
 * Root reducer
 */
export default combineReducers({
    movies: moviesReducer,
    moviesView: moviesViewReducer,
    movie: movieReducer
});
