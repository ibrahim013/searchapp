import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  SearchkitManager,
  SearchkitProvider,
} from 'searchkit';

import SearchPage from '../pages/SearchPage';
import logo from '../../aserts/logo.jpg';

const searchkit = new SearchkitManager(
  process.env.CLUSTER_URL,
  {
    basicAuth: process.env.BASIC_AUTH,
  },
);

class TopSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldRender: this.props.shouldRender,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      shouldRender: nextProps.shouldRender,
    });
  }

  render() {
    return (
      this.state.shouldRender &&
      <div className="page-top">
        <SearchkitProvider searchkit={searchkit}>
          <div className="page-details">
            <div className="page">
              <Link to="/"><img alt="logo" src={logo} /></Link>
            </div>
            <div className="search-grid">
              <div className="ui fluid card">
                <SearchPage />
              </div>
            </div>

          </div>
        </SearchkitProvider>
      </div> ||
      <div></div>
    );
  }
}

TopSearch.propTypes = {
  shouldRender: PropTypes.bool.isRequired,
};

export default TopSearch;

