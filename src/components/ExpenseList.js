import React, { Component } from 'react'
import ReactTable from "react-table";
import "react-table/react-table.css";

class ExpenseList extends Component {
  render () {
    return (
        <div id="tableLid" className="modTableList">
        <ReactTable
          data={this.props.expenses}
          columns={[
                {
                  Header: "Quantity",
                  id: "quantity",
                  accessor: d => d.quantity
                },
                {
                  Header: "Description",
                  accessor: "expdescription"
                }]}
        />
        <br />
      </div>

    );
  }
}

export default ExpenseList;