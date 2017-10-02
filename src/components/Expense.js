import React, { Component } from 'react';

class Expense extends Component {
  render () {
    return (
    	<tr>
        	<td>{this.props.quantity}</td>
        	<td>{this.props.expdescription}</td>
      	</tr>

    );

{/**/}
  }
}

export default Expense;