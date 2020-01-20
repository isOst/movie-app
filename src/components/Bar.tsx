import React from "react";
import {Page} from "../theme/Page";
import {SearchBar} from "./SearchBar";
import {Card} from "../theme/Card";
import {Row} from "../theme/Row";
import {ButtonIcon} from "../theme/ButtonIcon";
import {ViewModule} from "styled-icons/material/ViewModule";
import {ViewList} from "styled-icons/material/ViewList";
import {Input} from "../theme/Input";
import {useDispatch, useSelector} from "react-redux";
import {TState} from "../store";

export const Bar: React.FC = () => {
    const movies = useSelector((state: TState) => state.movies);

    return (
        <Page>
            <Row>
                <ButtonIcon><ViewModule width={"80%"}/></ButtonIcon>
                <ButtonIcon><ViewList width={"80%"}/></ButtonIcon>
                <Input placeholder={"Search..."}/>
            </Row>
            <div>
                {(movies && movies.data && movies.data.length > 0)
                    ? movies.data.map(movie => <Bar/>)
                    : "No movies"
                }
            </div>
        </Page>
    );
};
