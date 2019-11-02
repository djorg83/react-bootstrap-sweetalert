import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import SweetAlert from 'react-bootstrap-sweetalert';
import './App.css';
import { history } from '../../store';
import {getVisibleAlert} from "../../reducers/notifications";
import Footer from '../../components/Footer';
import HeaderContainer from '../HeaderContainer';
import HomeContainer from '../HomeContainer';
import NoMatch from "./NoMatch";

const App = ({ visibleAlert }) => (
  <ConnectedRouter history={history}>
    <div style={{ width: '100%', height: '100%' }}>
      <HeaderContainer />

      <Switch>
        <Route path='/' exact component={HomeContainer} />
        <Route component={NoMatch} />
      </Switch>

      {visibleAlert && <SweetAlert {...visibleAlert}>{visibleAlert.content}</SweetAlert>}

      <Footer/>
    </div>
  </ConnectedRouter>
);

App.propTypes = {
  visibleAlert: PropTypes.any,
};

const mapStateToProps = state => ({
  visibleAlert: getVisibleAlert(state.notifications),
});

export default connect(
  mapStateToProps,
  {}
)(App);
