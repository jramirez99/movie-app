import styled from 'styled-components';

import { secondaryColor, white } from '../../base/variablesStyled';

export const P = styled.p`
    background-color: ${ secondaryColor };
    color: ${ white };
    font-size: 1.5rem;
    margin: 0;
    margin-top: 5rem;
    padding: 1rem;
    text-align: center;
`;