import React, { Component } from 'react'

export default class ExpenseForm extends Component{
  render(){
    return ( 
      <div id="formEId">
	      <form onSubmit={this.props.onAddExpense}>
	      	<div className="modFormLabel">
	      		<label htmlFor="labQ">Quantity *</label>
	      	</div>
	      	<div className="modFormInput modFormLabelClear form-group">
	          	<input type="number" placeholder="" name="quantity" step="0.001" min="-10000000" max="10000000" required/>
	        </div>
	        <div className="modFormLabelClear modFormLabel">
	      		<label htmlFor="labD">Description *</label>
	      	</div>
	        <div className="modFormLabelClear modFormTextArea form-group">
	          	<textarea placeholder="" name="expdescription" required />
	        </div>
	        <div className="modFormLabelClear modFormButton">
	          	<input type="submit" value="Add Expense" />
	        </div>
	        
	      </form>
      </div>
    );
  }
}