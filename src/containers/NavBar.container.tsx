import {ButtonIcon} from "../theme/ButtonIcon";
import {ViewModule} from "styled-icons/material/ViewModule";
import {ViewList} from "styled-icons/material/ViewList";
import {Input} from "../theme/Input";
import {Row} from "../theme/Row";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {changeMoviesView} from "../actions/movies-view.action";
import {MOVIES_VIEW_GRID, MOVIES_VIEW_LIST} from "../store/movies-view.store";
import {fetchMovies} from "../actions/movies.actions";
import {NavPagesContainer} from "./NavPages.container";
import {changeSearchString} from "../actions/movies-pages.action";
import {TMoviesPagesState} from "../store/movies-pages.store";
import {TState} from "../store";

export const NavBarContainer: React.FC = () => {
    const dispatch: Dispatch = useDispatch();
    const pages: TMoviesPagesState = useSelector((state: TState) => state.moviesPages);

    const fetchOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSearchString(e.target.value));
        // @ts-ignore
        dispatch(fetchMovies(pages.searchInput, pages.page, pages.perPage))
    };

    return (
        <Row>
        <ButtonIcon onClick={() => {
            dispatch(changeMoviesView(MOVIES_VIEW_GRID))
        }}>
            <ViewModule width={"80%"}/>
        </ButtonIcon>
        <ButtonIcon onClick={() => {
            dispatch(changeMoviesView(MOVIES_VIEW_LIST))
        }}>
            <ViewList width={"80%"}/>
        </ButtonIcon>
        <Input placeholder={"Search..."}
               onInput={(e: React.ChangeEvent<HTMLInputElement>)=>{
                   fetchOnInput(e);
               }}/>
        <NavPagesContainer />
        </Row>
    );
}