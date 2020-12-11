import React from "react";

import Header from './components/Header'

import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import AddTransaction from './components/AddTransaction'
import TransactionList from './components/TransactionList'
import GlobalProvider from './components/GlobalState'
import './App.css'

function Payment(){
    return(
        <div>
            <GlobalProvider>
                <Header/>
                <div className ="container">
                    <Balance/>
                    <IncomeExpenses/>
                    <TransactionList/>
                    <AddTransaction/>
                </div>
            </GlobalProvider>
        </div>
    )
}


// function Payment() {​​​​​
//   return (
//     <div>
//     <GlobalProvider>
//       <Header />
//       <div className="container">
//         <Balance />
//         <IncomeExpenses />
//         <TransactionList />
//         <AddTransaction />
//       </div>
//     </GlobalProvider>
//   </div>
//   );
// }​​​​​
export default Payment;