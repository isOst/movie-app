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