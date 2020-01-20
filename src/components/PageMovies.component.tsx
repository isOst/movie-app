import React from "react";
import {Page} from "../theme/Page";
import {NavBarContainer} from "../containers/NavBar.container";
import {MoviesListContainer} from "../containers/MoviesList.container";

export const PageMoviesComponent: React.FC = () => {
    return (
        <Page>
            <NavBarContainer />
            <MoviesListContainer />
        </Page>
    );
};