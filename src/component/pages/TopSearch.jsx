import React from 'react';
import {
  SearchkitManager,
  SearchkitProvider,
} from 'searchkit';
import PropTypes from 'prop-types';
import SearchPage from '../pages/SearchPage';

const searchkit = new SearchkitManager(
  process.env.CLUSTER_URL,
  {
    basicAuth: process.env.BASIC_AUTH,
  },
);
const TopSearch = props => (
  <SearchkitProvider searchkit={searchkit}>
    <div className="page-details">
      <div className="page">
        {props.name}
      </div>
      <div className="search-grid">
        <div className="ui fluid card">
          <SearchPage />
        </div>
      </div>

    </div>
  </SearchkitProvider>
);

TopSearch.propTypes = {
  name: PropTypes.string.isRequired,
};
export default TopSearch;
