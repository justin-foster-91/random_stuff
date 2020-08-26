import React from 'react';
import { Router } from 'react-router-dom';
import AboutMenu from './about-menu';

export default function App(props) {
    return (
        <div className="app">
            {/* This should only show up on /about/foo, /about/bar, or /about/foo/bar */}
            <Router path='/about/:page' component={AboutMenu} />
        </div>
    );
}