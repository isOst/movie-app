/**
 * Movies pages action names
 */
export const MOVIES_PAGES_SET = "[Movies Pages] Set";
export const MOVIES_PAGES_CHANGE = "[Movies Pages] Change";
export const MOVIES_PAGES_SEARCH = "[Movies Pages] Search";
export const MOVIES_PAGES_CHANGE_PER_PAGE = "[Movies Pages] Change per pages";

/**
 * Movies pages action type definition
 */
export type TMoviesPageNumber = {
    type: string,
    payload: number
}

export type TMoviesPageString = {
    type: string,
    payload: string
}

export type TMoviesPageAction = TMoviesPageNumber & TMoviesPageString;

/**
 * Set number of pages
 * @param pages
 */
export const setMoviesPages = (pages: number): TMoviesPageNumber => ({
    type: MOVIES_PAGES_SET,
    payload: pages
});

/**
 * Set current page
 * @param page
 */
export const changeMoviesPages = (page: number): TMoviesPageNumber => ({
    type: MOVIES_PAGES_CHANGE,
    payload: page
});

/**
 * need to be implemented/ by default it's equal to 5
 * @param num
 */
export const changeMoviesPerPage = (num: number): TMoviesPageNumber => ({
    type: MOVIES_PAGES_CHANGE_PER_PAGE,
    payload: num
});

export const changeSearchString = (input: string): TMoviesPageString => ({
    type: MOVIES_PAGES_SEARCH,
    payload: input
});