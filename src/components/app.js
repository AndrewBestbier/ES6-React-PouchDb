'use strict';

import css from '../styles/app';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from '../redux/store';
import MUI from 'material-ui';
import NavBar from './nav-bar';
import React from 'react';
import { connect } from 'react-redux';
import { fetchAnswers } from '../redux/actions';

const {
  Card,
  Styles
} = MUI;

const { ThemeManager } = Styles;

injectTapEventPlugin();

const App = React.createClass({

  componentDidMount() {
    store.dispatch(fetchAnswers());
  },

  render() {
    const {answers, history, location } = this.props;

    return (
      <div>
        <NavBar history={history} pathname={location.pathname} />

        <Card style={css.appCard}>

          <div>
            {this.props.children}
          </div>
        </Card>
      </div>
    );
  }
});

export default connect(mapStateToProps)(App);

function mapStateToProps(state) {
  return {
    answers: state.answers
  };
}
