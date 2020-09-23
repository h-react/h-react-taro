import React, {Component} from 'react';

class FormTextarea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <textarea
        className="h-react-form-textarea"
        label={this.props.label}
        name={this.props.name}
        rows={this.props.rows}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

export default FormTextarea;
