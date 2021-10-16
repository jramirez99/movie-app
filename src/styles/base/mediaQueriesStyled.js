import {
    mobile,
    tablet,
    laptop,
    desktop
} from './variablesStyled';


export const devices = {
    mobile: ( styles ) =>  {
        return `@media ( min-width: ${ mobile } ) {
            ${ styles }
        }`
    },
    tablet: ( styles ) => {
        return ` @media ( min-width: ${ tablet } ) {
            ${ styles }
        }`
    },
    laptop: ( styles ) => {
        return ` @media ( min-width: ${ laptop } ) {
            ${ styles }
        }`
    },
    desktop: ( styles ) => {
        return ` @media ( min-width: ${ desktop } ) {
            ${ styles }
        }`
    }
};