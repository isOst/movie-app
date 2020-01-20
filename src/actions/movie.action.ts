/**
 * Movie actions names
 */
import {TMovie} from "../store/movie.store";

const MOVIE_SET = "[Movie] Set";

/**
 * Movie action type definition
 */
export type TMovieAction = {
    type: string,
    payload: TMovie
}

/**
 * Movie select action
 * Should be fetch with async action in real world,
 * like all movies list
 * @param movie
 */
export const selectMovie = (movie: TMovie): TMovieAction => ({
    type: MOVIE_SET,
    payload: movie
});