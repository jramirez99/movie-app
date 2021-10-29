import styled from "styled-components";

import { secondaryColor } from '../../base/variablesStyled';
import { devices } from '../../base/mediaQueriesStyled';

export const Form = styled.form`
    max-width: 90%;
    margin: 0 auto;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;


    ${ devices.laptop(`flex-direction: row;`)}

    input[type="text"] {
        border-radius: 10rem;
        padding: 1rem 2rem;

        &::placeholder {
            color: ${ secondaryColor };
            font-weight: 600;
        }
    }
`;