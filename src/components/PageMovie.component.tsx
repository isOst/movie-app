import React from "react";
import {Page} from "../theme/Page";
import {NavLink} from "react-router-dom";
import {MoviePageContainer} from "../containers/MoviePage.container";

export const PageMovieComponent: React.FC = () => {
    return (
        <Page>
            <NavLink to={"/"}>Back</NavLink>
            <MoviePageContainer />
        </Page>
    )
};
