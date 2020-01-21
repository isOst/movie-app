import styled from "styled-components";
import {theme} from "./theme"

export const Card = styled.div`
    display: inline-block;
    padding: 2vmin;
    margin: 1vmin 2vmin;
    width: 28vmin;
    height: 40vmin;
    background-color: ${theme.colors.primary};
    overflow: hidden;
`;