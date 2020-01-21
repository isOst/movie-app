import {IActionInitial, IActionOnError, IActionWithData} from "./action.interface";
import {Dispatch} from "redux";
import {TMovie} from "../store/movie.store";
import {setMoviesPages} from "./movies-pages.action";
import {IMovie} from "../store/movies.store";
/**
 * Actions names definitions
 */
export const MOVIES_FETCH_QUERY = "[Movies] Fetching...";
export const MOVIES_FETCH_SUCCESS = "[Movies] Fetched Success";
export const MOVIES_FETCH_FAILURE = "[Movies] Fetched Failure";

interface IMoviesActionWithData extends IActionWithData {
    payload: Array<IMovie>
}

export type TMoviesAction = IMoviesActionWithData & IActionInitial & IActionOnError;
/**
 * Action on start fetching movies
 */
const fetchMoviesQuery = (): IActionInitial => ({
    type: MOVIES_FETCH_QUERY
});

/**
 * Action on successfully received data
 * @param data
 */
const fetchMoviesSuccess = (data: Array<TMovie>): IActionWithData => ({
    type: MOVIES_FETCH_SUCCESS,
    payload: data
});

/**
 * Action when error occurred
 * @param error
 */
const fetchMoviesFailure = (error: Error): IActionOnError => ({
    type: MOVIES_FETCH_FAILURE,
    error
});

/**
 * Helper: filter movies array by input search
 * @param movies
 * @param input
 */
const filterMoviesByInput = (movies: Array<TMovie>, input?: string): Array<TMovie> => {
    if (!input || input.length < 3) return movies;
    const regExp = new RegExp(input, "gi");
    return movies.filter((movie: TMovie) => movie.name.match(regExp)) || [];
};

/**
 * Helper: filter movies by page
 * @param movies
 * @param page
 * @param moviesPerPage
 */
const filterMoviesByPage = (movies: Array<TMovie>, page: number, moviesPerPage: number): Array<TMovie> => {
    if (movies.length === 0) return movies;
    const startIndex = page * moviesPerPage;
    let endIndex = startIndex + moviesPerPage;
    if (endIndex > movies.length) endIndex = movies.length;
    return movies.slice(startIndex, endIndex);
};

/**
 * Async action to fetch movies
 */
export const fetchMovies = (input: string = "", page: number, perPage: number) => (dispatch: Dispatch) => {
    dispatch(fetchMoviesQuery());
    fetch("movies-list.json")
        .then(
            (response: Response) => response.json()
        )
        .then(
            (data: Array<TMovie>) => {
                // it's workaround
                // in real world there should be calls to API
                const filteredByInput = filterMoviesByInput(data, input);
                const pagesNumber = Math.ceil(filteredByInput.length / perPage);
                if (input.length > 3 || page === 0) dispatch(setMoviesPages(pagesNumber));
                const filteredByPage = filterMoviesByPage(filteredByInput, page, perPage);
                dispatch(fetchMoviesSuccess(filteredByPage));
            }
        )
        .catch(
            (error: Error) => dispatch(fetchMoviesFailure(error))
        )
};