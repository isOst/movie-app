import {Reducer} from "react";
import {MoviesPagesStateInitial, TMoviesPagesState} from "../store/movies-pages.store";
import {
    MOVIES_PAGES_CHANGE,
    MOVIES_PAGES_CHANGE_PER_PAGE, MOVIES_PAGES_SEARCH,
    MOVIES_PAGES_SET,
    TMoviesPageAction
} from "../actions/movies-pages.action";

export const moviesPagesReducer: Reducer<TMoviesPagesState, TMoviesPageAction> = (
    state = MoviesPagesStateInitial,
    action
): TMoviesPagesState => {
    switch (action.type) {
        case MOVIES_PAGES_SET:
            return {...state, pages: action.payload};
        case MOVIES_PAGES_CHANGE:
            return {...state, page: action.payload};
        case MOVIES_PAGES_CHANGE_PER_PAGE:
            return {...state, perPage: action.payload};
        case MOVIES_PAGES_SEARCH:
            return {...state, searchInput: action.payload};
        default:
            return state;
    }
};