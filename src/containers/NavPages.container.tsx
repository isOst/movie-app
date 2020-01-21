import React from "react";
import {Dispatch} from "redux";
import {useDispatch, useSelector} from "react-redux";
import {TState} from "../store";
import {KeyboardArrowLeft} from "styled-icons/material/KeyboardArrowLeft";
import {KeyboardArrowRight} from "styled-icons/material/KeyboardArrowRight";
import {ButtonIcon} from "../theme/ButtonIcon";
import {changeMoviesPages} from "../actions/movies-pages.action";
import {fetchMovies} from "../actions/movies.actions";

export const NavPagesContainer: React.FC =
(): React.ReactElement => {
    const dispatch: Dispatch = useDispatch();
    const pages = useSelector((state: TState) => state.moviesPages);

    const changePage = (delta: number) => {
        let newPage = pages.page + delta;
        if (newPage < 0) newPage = 1;
        if (newPage >= pages.pages - 1) newPage = pages.pages - 1;
        dispatch(changeMoviesPages(newPage));
        // @ts-ignore
        dispatch(fetchMovies(pages.searchInput, newPage, pages.perPage))
    };

    return (
        <div className={"nav-pages-container"}>
            <ButtonIcon onClick={() => {
                changePage(-1);
            }}>
                <KeyboardArrowLeft width={"80%"}/>
            </ButtonIcon>
            <div>{pages.page + 1} / {pages.pages}</div>
            <ButtonIcon onClick={() => {
                changePage(1);
            }}>
                <KeyboardArrowRight width={"80%"}/>
            </ButtonIcon>
        </div>
    )
};