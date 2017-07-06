import React, { PropTypes } from 'react';

class MainComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>People</h1>
        <a href="/everyone">Everyone</a> <a href="/male">Male</a> <a href="/female">Female</a> <a href="/over30">Over 30</a> <a href="/under30">Under 30</a>
        {this.props.children}
      </div>
    )
  }

}

export default MainComponent;