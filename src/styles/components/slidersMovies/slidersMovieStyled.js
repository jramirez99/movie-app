import styled from 'styled-components';

import { devices } from '../../../styles/base/mediaQueriesStyled';

export const Hero = styled.div`
    background-image: url(${ props => props.bg });
    height: 60rem;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
`;
export const ContainerInfo = styled.div`
    background-color: #a7a7a7a7;
    display: none;
    padding: 2rem 1rem;

    ${ devices.tablet`display: block;` };

    h2 {
        font-size: 3rem;

        ${ devices.tablet`font-size: 2rem;` };
        ${ devices.tablet`font-size: 3rem;` };
    }
    p {
        font-size: 1.6rem;
        ${ devices.laptop`font-size: 2rem` };
    }
`;