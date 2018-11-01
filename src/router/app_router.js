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

const AlbumPhotos = () => (
    <div>
        <MyAppBar>
            <AlbumPage />
        </MyAppBar>
    </div>
);

const AlbumCollection = () => (
    <div>
        <MyAppBar>
            <AlbumList />
        </MyAppBar>
    </div>
);


export const AppRouter = () => (
    <Router>
        <div>
            <Route path="/" exact component={Index} />
            <Route path="/my_account/" component={MyAccount} />
            <Route path="/album/1" component={AlbumPhotos} />
            <Route path="/albums/" component={AlbumCollection} />
        </div>
    </Router>
);

