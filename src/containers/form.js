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
            <Field name="username" component={TextField} withRef ref="firstField"/>
          </form>
      </div>
    )
  }
}

Form = reduxForm({
  form: 'myForm'
})(Form)

export default Form = connect(null, actions)(Form)
