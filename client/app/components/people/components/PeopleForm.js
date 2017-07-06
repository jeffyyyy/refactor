import React from 'react';
import PropTypes from 'prop-types';
import isInteger from 'lodash/isInteger';

class PeopleForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      formInput: {
        gender: '',
        ageFilter: '0',
        age: ''
      }
    }

    this.updateField = this.updateField.bind(this);
    this.sendQuery = this.sendQuery.bind(this);
  }

  updateField (e) {
    let value = e.target.value.trim()
    let fieldName = e.target.name
    let formInput = Object.assign({}, this.state.formInput)
    if (e.target.type === 'number') {
      value = isInteger(parseInt(value)) ? parseInt(value) : value
    }
    formInput[fieldName] = value;

    this.setState({formInput: formInput });
  }

  sendQuery(e) {
    e.preventDefault();
    let inputData = Object.assign({}, this.state.formInput, {ageFilter: parseInt(this.state.formInput.ageFilter)});
    this.props.sendQuery(inputData);
  }

  render() {
    return (
      <div className='row'>
        <div className='col-sm-12'>
          <form className='form-inline'>

            <div className='form-group mr-5'>
              <label className='mr-2'>Gender: </label>
              <select className='custom-select' name='gender' onChange={this.updateField}>
                <option value=''>Both Gender</option>
                <option value='male'>Male Only</option>
                <option value='female'>Female Only</option>
              </select>
            </div>

            <div className='form-group mr-5'>
              <label className='mr-2'>Age: </label>
              <select className='custom-select mr-1' name='ageFilter' onChange={this.updateField}>
                <option value='0'>Equal</option>
                <option value='1'>Larger than</option>
                <option value='-1'>Smaller than</option>
              </select>
              <input type='number' name='age' className='form-control col-sm-6' placeholder='eg 15, empty = all' onInput={this.updateField}/>
            </div>

            <button type='submit' className='btn btn-primary' onClick={this.sendQuery}>Query</button>
          </form>
        </div>
      </div>
    )
  }
}

PeopleForm.propTypes = {
  sendQuery: PropTypes.func.isRequired
}

export default PeopleForm;