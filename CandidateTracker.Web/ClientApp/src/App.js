import React, { Component } from "react";
import { Route } from "react-router";
import Layout from './Layout';
import Home from './Pages/Home'
import Details from './Pages/Details';
import AddCandidate from './Pages/AddCandidate';


export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/addcandidate" component={AddCandidate} />
        <Route path="/details/:id" component={Details} />
      </Layout>
    );
  }
}
