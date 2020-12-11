import React, { Component } from 'react'

export class Payment extends Component {
    
    componentDidMount() {
        fetch("https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/transaction/view")
          .then(res => res.json())
          .then (data => console.log(data))
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    renderTableData() {
        const id = 0;
        const custID = null;
        const payeeID = null;
        const date = null;
        const amount = null;
        return (
            <tr key={id}>
                <td>{custID}</td>
                <td>{payeeID}</td>
                <td>{date}</td>
                <td>{amount}</td>
            </tr>
        )
    }

    render() {
        return (
            <div>
                <h1>Payment</h1>
                <table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                    <tr>
                        <td>payment function put here
                        </td>
                    </tr>
                </table>
                <h1>Transaction History</h1>
                <table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                    <tr>
                        <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', "width":"20%"}}>Name</th>
                        <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', "width":"20%"}}>Payee</th>
                        <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', "width":"30%"}}>Date of Transaction</th>
                        <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', "width":"20%"}}>Amount</th>
                    </tr>
                    <tr>
                        {
                            this.renderTableData()
                        }
                    </tr>
                </table>
            </div>
        )
    }
}

export default Payment
