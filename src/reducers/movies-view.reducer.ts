import {Reducer} from "redux";
import {MoviesViewStateInitial} from "../store/movies-view.store";
import {TMoviesViewAction} from "../actions/movies-view.action";

export const moviesViewReducer: Reducer<string, TMoviesViewAction> = (
    state = MoviesViewStateInitial,
    action
): string => action.payload || MoviesViewStateInitial;
