import {ButtonIcon} from "../theme/ButtonIcon";
import {ViewModule} from "styled-icons/material/ViewModule";
import {ViewList} from "styled-icons/material/ViewList";
import {Input} from "../theme/Input";
import {Row} from "../theme/Row";
import React from "react";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {changeMoviesView} from "../actions/movies-view.action";
import {MOVIES_VIEW_GRID, MOVIES_VIEW_LIST} from "../store/movies-view.store";

export const NavBarContainer: React.FC = () => {
    const dispatch: Dispatch = useDispatch();

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
            <Input placeholder={"Search..."}/>
        </Row>
    )
}