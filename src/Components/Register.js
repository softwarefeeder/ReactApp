import React from 'react';


export class Register extends React.Component
{


  constructor(props) {
    super(props)
    this.state = { hintText: '', value: props.value }
  }


  onChange(event) {
    if (event.target.value) {
      this.setState({ errorText: '' })
    } else {
      this.setState({ errorText: 'Invalid format: ###-###-####' })
    }
  }



  render() {
    return (
    <form className="App">
        <input
        />
        <button onChange={this.onChange.bind(this) 
        }>Register</button>
        </form>
    
    )
  }



}