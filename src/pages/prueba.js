import React from 'react';
import SingleProjectPageContainer from '../containers/SingleProjectPageContainer';

class Project extends React.Component {
  render() {
    return <SingleProjectPageContainer {...this.props} />;
  }
}

export default Project;
