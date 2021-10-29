import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { Error404 } from '../components/error404/Error404';
import { Home } from '../components/home/Home';
import { LatestReleases } from '../components/movie/latestReleases/LatestReleases';
import { Movie } from '../components/movie/MovieInfo/Movie';
import { NavBar } from '../components/navbar/NavBar';
import { Populars } from '../components/movie/populars/Populars';
import { Search } from '../components/movie/search/Search';

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
