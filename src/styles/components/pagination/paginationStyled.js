import styled from 'styled-components';

import { secondaryColor } from '../../base/variablesStyled';

export const ContainerPagination = styled.div`
    max-width: 100%;
    margin: 0 auto;

    ul {
        display: flex;
        justify-content: center;

        li {
            margin: 0;

            a {
                font-size: 1.5rem;
            }
        }
    }

    .pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        color: ${ secondaryColor };
        margin: 5rem 0;
    }
`;



