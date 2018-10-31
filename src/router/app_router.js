import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SimpleAppBar from "../components/app_bar";


const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;
const Albums = () => <SimpleAppBar />;
// const Albums = () => <h2>Users</h2>;

export const AppRouter = () => (
    <Router>
        <div>
            {/* <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                    <li>
                        <Link to="/users/">Users</Link>
                    </li>
                    <li>
                        <Link to="/albums/">Albums</Link>
                    </li>
                </ul>
            </nav> */}

            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
            <Route path="/albums/" component={Albums} />
        </div>
    </Router>
);

