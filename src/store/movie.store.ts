/**
 * Movie type definition
 */
export type TMovie = {
    id: number,
    key: string,
    name: string,
    description: string,
    genres: Array<string>,
    rate: string,
    length: number,
    img: string
}

/**
 * Movie state definition
 */

export type TMovieState = {
    data: TMovie | null
}

/**
 * Movie initial state
 */
export const MovieInitialState: TMovieState = {
    data: null
};