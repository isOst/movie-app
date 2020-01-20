/**
 * Movies View action names
 */
const MOVIES_VIEW_CHANGE = "[Movies View] Change";

/**
 * Movies View action type definition
 */
export type TMoviesViewAction = {
    type: string,
    payload: string
}

/**
 * Movies View change action
 * @param viewMode
 */
export const changeMoviesView = (viewMode: string): TMoviesViewAction => ({
    type: MOVIES_VIEW_CHANGE,
    payload: viewMode
});