import {MOVIES_FETCH_FAILURE, MOVIES_FETCH_QUERY, MOVIES_FETCH_SUCCESS, TMoviesAction} from "../actions/movies.actions";
import {Reducer} from "react";
import {IMoviesState, moviesStateInitial} from "../store/movies.store";

export const moviesReducer: Reducer<IMoviesState, TMoviesAction> = (
    state: IMoviesState = moviesStateInitial,
    action: TMoviesAction
): IMoviesState => {
    switch (action.type) {
        case MOVIES_FETCH_QUERY:
            return {...state, loading: true};
        case MOVIES_FETCH_SUCCESS:
            return {...state, loading: false, data: action.payload, error: null};
        case MOVIES_FETCH_FAILURE:
            return {...state, loading: false, data: [], error: action.error};
        default:
            return state;
    }
};