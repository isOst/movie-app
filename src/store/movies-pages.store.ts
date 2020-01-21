/**
 * Movies pages state definition
 */
export type TMoviesPagesState = {
    page: number; // page index
    pages: number; // number of all pages
    perPage: number; // number per page
    searchInput: string;
}
/**
 * Movie initial state
 */
export const MoviesPagesStateInitial: TMoviesPagesState = {
    page: 0,
    pages: 1,
    perPage: 5,
    searchInput: ""
};