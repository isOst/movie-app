import {IActionInitial, IActionOnError, IActionWithData} from "../actions/action.interface";
import {MOVIES_FETCH_FAILURE, MOVIES_FETCH_QUERY, MOVIES_FETCH_SUCCESS} from "../actions/movies.actions";
import {Reducer, ReducerAction} from "react";

export interface IMovie {
    id: number,
    key: string,
    name: string,
    description: string,
    genres: Array<string>,
    rate: string,
    length: number,
    img: string
}

interface IMoviesActionWithData extends IActionWithData {
    payload: Array<IMovie>
}

export interface IMoviesState {
    data: Array<IMovie>,
    loading: boolean,
    error: Error | null
}

export const moviesStateInitial: IMoviesState = {
    data: [],
    loading: false,
    error: null
};

export type TMoviesAction = IMoviesActionWithData & IActionInitial & IActionOnError;

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