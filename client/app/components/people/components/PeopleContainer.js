import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PeopleForm from './PeopleForm';
import { requestPeopleListData } from '../actions/actions';
import '../style/style.scss';

class PeopleContainer extends React.Component {
  constructor(props) {
    super(props);

    this.sendQuery = this.sendQuery.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(requestPeopleListData());
  }

  sendQuery(data) {
    this.props.dispatch(requestPeopleListData(data));
  }

  render() {
    let errorBlock;
    let peopleList = 'None';

    if (this.props.peopleList.length) {
      peopleList = (
        <ul>
          {
            this.props.peopleList.map(p => (
              <li key={p.id}>
                {p.name}
              </li>
            ))
          }
        </ul>
      );
    }

    if (this.props.error) {
      errorBlock = (
        <div className='alert alert-danger'>
          {this.props.error}
        </div>
      );
    }

    return (
      <div className='container'>
        <div className='jumbotron mt-5'>
          <h1 className='display-4'>People List</h1>
          <p className='lead'>This is a simple people list filter built with React/Redux/Node.js.</p>
          <p className='lead'>By default it shows full record of people list.</p>
          <hr className='my-4' />

          <PeopleForm sendQuery={this.sendQuery} />

          <hr className='my-4' />
          <h3 className='display-5'>List Result:</h3>

          {peopleList}
          {errorBlock}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  peopleList: state.people.peopleList,
  error: state.people.error
});

PeopleContainer.defaultProps = {
  error: ''
};

PeopleContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  peopleList: PropTypes.array.isRequired,
  error: PropTypes.string
};

export default connect(mapStateToProps)(PeopleContainer);
