import React, { Component } from "react";
import { Route } from "react-router";
import Layout from './Layout';
import Home from './Pages/Home'
import Details from './Pages/Details';
import AddCandidate from './Pages/AddCandidate';
import Pending from './Pages/Pending'
import Refused from './Pages/Refused';
import Confirmed from './Pages/Confirmed'
import {ContextComponent} from './components/Context';


export default class App extends React.Component {
  render() {
    return (
     <ContextComponent>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/addcandidate" component={AddCandidate} />
        <Route path="/details/:id" component={Details} />
        <Route path="/pending" component={Pending} />
        <Route path="/refused" component={Refused} />
        <Route path="/confirmed" component={Confirmed} />
      </Layout>
      </ContextComponent>
    );
  }
}
