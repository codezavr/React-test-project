import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

// Components
import Header from './components/Header';

class App extends Component {
  render() {
      return (
      <div className="wrapper">
        <Header/>
      </div>
    );
  }
}

export default connect(
    (state) => ({
    }),
    (dispatch) => ({
    })
)(App);
