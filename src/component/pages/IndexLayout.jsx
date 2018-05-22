import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slug from '../pages/Slug';
import HomePage from '../pages/HomePage';
import logo from '../../aserts/logo.jpg';
import Footer from '../pages/Footer';
import Categories from '../pages/Categories';

class IndexLayout extends Component {
  componentWillMount() {
    this.props.updateShouldRender();
  }

  componentWillUnmount() {
    this.props.updateShouldRender();
  }
  render() {
    return (
      <div className="container">
        <div className="midlevel">
          <div className="content">
            <div className="toplevel">
              <img alt="logo" src={logo} />
            </div>
            <HomePage />
            <Slug />
          </div>
          <div className="cat">
            <Categories />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

IndexLayout.propTypes = {
  updateShouldRender: PropTypes.func.isRequired,
}

export default IndexLayout;

