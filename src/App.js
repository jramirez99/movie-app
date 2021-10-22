import React from 'react';

import { AppRouter } from './routes/AppRouter';
import { GlobalsStyled } from './styles/base/globalsStyled';

export const App = () => {
    return (
        <>
            <GlobalsStyled />

            <AppRouter />

        </>
    );
};
