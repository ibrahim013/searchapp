import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import IndexLayout from './component/pages/IndexLayout';
import SearchDisplay from './component/pages/SearchDisplay';
import AboutUs from './component/pages/About';
import NoMatch from './component/pages/NoMatch';
import PrivacyPolicy from './component/pages/PrivacyPolicy';
import TopSearch from './component/pages/TopSearch';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldRender: true,
    };

    this.updateShouldRender = this.updateShouldRender.bind(this);
  }

  updateShouldRender() {
    this.setState({
      shouldRender: !this.state.shouldRender,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="mid-level">
          <TopSearch
            shouldRender={this.state.shouldRender}
          />
        </div>
        <Switch>
          <Route exact path="/" render={props => <IndexLayout updateShouldRender={this.updateShouldRender} {...props} />} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/search/" component={SearchDisplay} />
          <Route path="/privacy" component={PrivacyPolicy} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
