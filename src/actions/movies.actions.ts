import {IActionInitial, IActionOnError, IActionWithData} from "./action.interface";
import {Dispatch} from "redux";
import {TMoviesAction} from "../reducers/movies.reducer";
/**
 * Actions names definitions
 */
export const MOVIES_FETCH_QUERY = "[Movies] Fetching...";
export const MOVIES_FETCH_SUCCESS = "[Movies] Fetched Success";
export const MOVIES_FETCH_FAILURE = "[Movies] Fetched Failure";

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
const fetchMoviesSuccess = (data: any): IActionWithData => ({
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
 * Async action to fetch movies
 */
export const fetchMovies = () => (dispatch: Dispatch) => {
    dispatch(fetchMoviesQuery());
    fetch("movies-list.json")
        .then(
            (response: Response) => response.json()
        )
        .then(
            (data: any) => {
                dispatch(fetchMoviesSuccess(data));
            }
        )
        .catch(
            (error: Error) => dispatch(fetchMoviesFailure(error))
        )
};