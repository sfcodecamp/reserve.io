import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../actions/';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton } from 'material-ui/RadioButton'
import MenuItem from 'material-ui/MenuItem'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import {
  DatePicker,
  TimePicker,
  RadioButtonGroup,
  SelectField,
  Slider,
  TextField,
  Toggle
} from 'redux-form-material-ui'

const validate = value => value == null ? 'Required' : undefined
const isNumber = (number) => {
  if(parseInt(number) === NaN && parseInt(number) % 1 !== 0){
    return 'Error'
  }
}

class Form extends Component {
  constructor(props){
    super(props);
    // this.onSubmit = this.onSubmit.bind(this);
    // this.onHandleResetButton = this.onHandleResetButton.bind(this);
  }

  render(){
    const style = {
      margin: 12,
    };
    const { handleSubmit, submitting, reset, pristine } = this.props;
    return(
      <div>
        <h1 className="title">Welcome {'Guest'} !</h1>
        <div>
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

              <Field
                hintText={"Number of Guests"}
                type="text"
                name="guests"
                component={TextField}/>

            <Field name="deadline-date"
              component={TimePicker}
              format={null}
              defaultValue={null}
              onChange={(value) => {
                console.log('time changed ', value) // eslint-disable-line no-console
              }}
              hintText="DEADLINE's DATE"
              validate={validate}/>

            <Field name="deadline-time"
              component={TimePicker}
              format={null}
              defaultValue={null}
              onChange={(value) => {
                console.log('time changed ', value) // eslint-disable-line no-console
              }}
              hintText="DEADLINE's TIME"
              validate={validate}/>

              <div>
                <RaisedButton
                  label="Submit"
                  type="submit"
                  labelColor="#FFFFFF"
                  backgroundColor="#26A69A"/>
                <RaisedButton
                  style={style}
                  label="Clear"
                  onTouchTap={reset}
                  disabled={pristine}
                  labelColor="#FFFFFF"
                  backgroundColor="#C15055"/>
              </div>

          </form>
        </div>
      </div>
    )
  }
}

Form = reduxForm({
  form: 'myForm',
  validate
})(Form)

export default Form = connect(null, actions)(Form)
