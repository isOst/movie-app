import {Reducer} from "redux";
import {TMovieAction} from "../actions/movie.action";
import {MovieInitialState, TMovieState} from "../store/movie.store";

/**
 * Movie Reducer. Should implement async actions in real app
 * @param state
 * @param action
 */
export const movieReducer: Reducer<TMovieState, TMovieAction> = (
    state = MovieInitialState,
    action
): TMovieState => ({...state, data: action.payload} || MovieInitialState);
