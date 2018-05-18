import React from 'react';
import { Redirect } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import { SearchkitComponent } from 'searchkit';
import Data from '../../data/categories.json';

class Categories extends SearchkitComponent {
  constructor(props) {
    super(props);
    this.state = {
      Data,
      selectedData: '',
    };
    this.handleSelectedData = this.handleSelectedData.bind(this);
  }
  handleSelectedData(data) {
    this.setState({ selectedData: data });
  }
  render() {
    const { Data } = this.state;
    const categories = Data.map(data => (
      <div className="ui card raised" key={data}>
        <div className="ui content" onClick={() => this.handleSelectedData(data)}>{data}</div>
      </div>
    ));
    const searchData = this.state.selectedData;
    if (!isEmpty(searchData)) {
      return <Redirect to={`/search?q=${searchData}`} />;
    }
    return (
      <div>
        <div className="ui cards display-data">{categories}</div>
      </div>
    );
  }
}
export default Categories;
