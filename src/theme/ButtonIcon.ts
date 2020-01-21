import styled from "styled-components";
import {theme} from "./theme";

export const ButtonIcon = styled.div`
    display: flex;
    align-item: center;
    justify-content: center;
    width: 6vmin;
    height: 6vmin;
    background-color: ${theme.colors.primary};
    font-size: 90%;
    user-select: none;
    color: ${theme.colors.secondary};
    margin: 0 1vmin;
`;