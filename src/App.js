import React from "react";
import Index from "pages/index";
import Product from "pages/product";
import Pricing from "pages/pricing";
import Learn from "pages/learn";
import Login from "pages/login";
import Overview from "pages/overview";
import Features from "pages/features";
import GetStarted from "pages/getStarted";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/product' component={Product}/>
			<Route exact path='/pricing' component={Pricing}/>
			<Route exact path='/learn' component={Learn}/>
			<Route exact path='/login' component={Login}/>
			<Route exact path='/overview' component={Overview}/>
			<Route exact path='/features' component={Features}/>
			<Route exact path='/get-started' component={GetStarted}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
