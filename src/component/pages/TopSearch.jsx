import React from 'react';
import { Link } from 'react-router-dom';
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
const TopSearch = () => (
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
);

// TopSearch.propTypes = {
//   name: PropTypes.string.isRequired,
// };
export default TopSearch;
