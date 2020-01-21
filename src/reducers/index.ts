import {combineReducers} from "redux";
import {moviesReducer} from "./movies.reducer";
import {moviesViewReducer} from "./movies-view.reducer";
import {movieReducer} from "./movie.reducer";
import {moviesPagesReducer} from "./movies-pages.reducer";

/**
 * Root reducer
 * See store index.ts of the definition of app state
 */
export default combineReducers({
    movies: moviesReducer,
    moviesView: moviesViewReducer,
    moviesPages: moviesPagesReducer,
    movie: movieReducer
});
