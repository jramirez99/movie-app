import styled from "styled-components";

import { grid } from '../../base/mixinsStyled';
import { devices } from '../../base/mediaQueriesStyled';
import { secondaryColor, white } from '../../base/variablesStyled';

export const ContainerGrid = styled.div`
    ${ devices.laptop(`${ grid(2, '2rem') }`) };
    margin-top: 5rem;
`;
export const ListBox = styled.div`
    max-width: 90%;
    margin: 0 auto;
    margin-top: 5rem;

    ${ devices.laptop(`margin-top: 0;`) }
`;
export const Info = styled.div`
    max-height: 70rem;
    overflow: auto;
`;
export const H2 = styled.h2`
    background-color: ${ secondaryColor };
    color: ${ white };
    font-size: 3rem;
    margin-bottom: 3rem;
    padding: 2rem;
`;