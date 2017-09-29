import React from 'react';
import PropTypes from 'prop-types';
import isInteger from 'lodash/isInteger';

class PeopleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formInput: {
        gender: '',
        ageFilter: 0,
        age: ''
      }
    };

    this.updateField = this.updateField.bind(this);
    this.sendQuery = this.sendQuery.bind(this);
  }

  updateField(e) {
    let value = e.target.value.trim();
    const fieldName = e.target.name;
    const formInput = Object.assign({}, this.state.formInput);
    if (e.target.type === 'number') {
      value = isInteger(parseInt(value, 10)) ? parseInt(value, 10) : value;
    }
    if (fieldName === 'age' && value < 0) value = '';

    formInput[fieldName] = value;

    this.setState({ formInput });
  }

  sendQuery(e) {
    e.preventDefault();
    const inputData = Object.assign(
      {},
      this.state.formInput,
      { ageFilter: parseInt(this.state.formInput.ageFilter, 10) },
      { age: this.state.formInput.age === '' ? -1 : this.state.formInput.age }
    );
    this.props.sendQuery(inputData);
  }

  render() {
    return (
      <div className='row'>
        <div className='col-sm-12'>
          <form className='form-inline'>

            <div className='form-group mr-5'>
              <label className='mr-2' htmlFor='genderSelector'>Gender: </label>
              <select className='custom-select' name='gender' id='genderSelector' onChange={this.updateField}>
                <option value=''>Both</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
            </div>

            <div className='form-group mr-5'>
              <label className='mr-2' htmlFor='ageFilter'>Age: </label>
              <select className='custom-select mr-1 col-sm-4' name='ageFilter' id='ageFilter' onChange={this.updateField}>
                <option value='0'>Equal</option>
                <option value='1'>Older than</option>
                <option value='-1'>Younger than</option>
              </select>
              <input
                type='number'
                name='age'
                value={this.state.formInput.age}
                className='form-control col-sm-6'
                placeholder='eg 15, empty = all'
                onChange={this.updateField}
              />
            </div>

            <button type='submit' className='btn btn-primary' onClick={this.sendQuery}>Query</button>
          </form>
        </div>
      </div>
    );
  }
}

PeopleForm.propTypes = {
  sendQuery: PropTypes.func.isRequired
};

export default PeopleForm;
