import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { AlbumPage } from "../components/album";
import { MyAppBar } from "../components/MyAppBar";
import { AlbumList } from "../components/albums";
import AccountSettings from "../components/AccountSettings";


const Index = () => <h2>Home</h2>;

const MyAccount = () => (
    <div>
        <MyAppBar>
            <AccountSettings />
        </MyAppBar>
    </div>
);

const AlbumPhotos = (props) => (
    <div>
        <MyAppBar>
            <AlbumPage {...props} />
        </MyAppBar>
    </div>
);

const AlbumCollection = (props) => (
    <div>
        <MyAppBar>
            <AlbumList {...props} />
        </MyAppBar>
    </div>
);


export const AppRouter = () => (
    <Router>
        <div>
            <Route path="/" exact component={Index} />
            <Route path="/my_account/" exact component={MyAccount} />
            <Route path="/album/1" exact component={AlbumPhotos} />
            <Route path="/album/2" exact component={AlbumPhotos} />
            <Route path="/album/3" exact component={AlbumPhotos} />
            <Route path="/album/4" exact component={AlbumPhotos} />
            <Route path="/album/5" exact component={AlbumPhotos} />
            <Route path="/albums/" exact component={AlbumCollection} />
        </div>
    </Router>
);

