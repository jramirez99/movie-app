import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { NavBar } from '../components/navbar/NavBar';
import { Home } from '../components/home/Home';
import { LatestReleases } from '../components/movie/LatestReleases';
import { Movie } from '../components/movie/MovieInfo/Movie';
import { Populars } from '../components/movie/Populars';
import { Search } from '../components/movie/Search';
import { Error404 } from '../components/error404/Error404';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />

                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/latest-realeses" component={ LatestReleases } />
                    <Route exact path="/pupulars" component={ Populars } />
                    <Route exact path="/search" component={ Search } />
                    <Route exact path="/movie/:id" component={ Movie } />

                    <Route  path="*" component={ Error404 } />
                </Switch>
            </div>
        </Router>
    );
};
