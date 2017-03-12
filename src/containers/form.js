import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../actions/';
import { RadioButton } from 'material-ui/RadioButton'
import MenuItem from 'material-ui/MenuItem'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  TimePicker,
  RadioButtonGroup,
  SelectField,
  Slider,
  TextField,
  Toggle
} from 'redux-form-material-ui'

const validate = value => value == null ? 'Required' : undefined


class Form extends Component {
  constructor(props){
    super(props);
    // this.onSubmit = this.onSubmit.bind(this);
    // this.onHandleResetButton = this.onHandleResetButton.bind(this);
  }

  render(){
    return(
      <div>
        <h1 className="title">Welcome {'Guest'} !</h1>
          <form>
            <Field
              hintText={"San Francisco"}
              type="text"
              name="city"
              component={TextField}/>

            <Field name="date"
              component={DatePicker}
              format={null}
              onChange={(value) => {
                console.log('date changed ', value) // eslint-disable-line no-console
              }}
              hintText="Day of reservation?"
              validate={validate}/>

            <Field name="time"
              component={TimePicker}
              format={null}
              defaultValue={null}
              onChange={(value) => {
                console.log('time changed ', value) // eslint-disable-line no-console
              }}
              hintText="At what time?"
              validate={validate}/>

            <Field name="deadline"
              component={TimePicker}
              format={null}
              defaultValue={null}
              onChange={(value) => {
                console.log('time changed ', value) // eslint-disable-line no-console
              }}
              hintText="DEADLINE"
              validate={validate}/>
          </form>
      </div>
    )
  }
}

Form = reduxForm({
  form: 'myForm',
  validate
})(Form)

export default Form = connect(null, actions)(Form)
