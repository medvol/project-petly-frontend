import styled from "styled-components";

export const MainPageContainerBlock = styled.div`
margin: 0 auto;
max-width: 100%;

padding: 0 20px 20px;

@media screen and (min-width: 480px) {
    width: 480px;
}

@media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px 32px;
}

@media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 16px 16px;
}

`