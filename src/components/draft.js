
// // style={{display: "flex", justifyContent: "flex-end"}}

/* <div className="mt3">
<label className="db fw6 lh-copy f6" htmlFor="number"></label>
<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="number" name="number"  id="number"/>
<small id="name-desc" className="f6 mt2 black-60 db mb2">Please enter your expenses amount.</small>
</div>
<div className="mt3">
<label className="db fw6 lh-copy f6" htmlFor="name"></label>
<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
<small id="name-desc" className="f6 mt2 black-60 db mb2">Please enter your expenses short description.</small>
</div> */


// this.state = {
//     inputValue: '',
//     budgetValue: 0,
//     expenseInput: '',
//     expenseValue: '',
//     expenseNameInput: '',
//     expenseName: ''
// }
// }

// onBudgetInputChange = (event) => {
// this.setState({inputValue: event.target.value})
// }  

// onBudgetSubmit = () => {
// this.setState({budgetValue: this.state.inputValue})
// }

// onExpenseChange = (event) => {
// this.setState({expenseInput: event.target.value})
// }

// onExpenseNameChange = (event) => {
// this.setState({expenseNameInput: event.target.value})
// }

// onExpenseSubmit = () => {
// this.setState({expenseValue: this.state.expenseInput})
// }

// onExpenseSubmitName = () => {
// this.setState({expenseName: this.state.expenseNameInput})
// }


// const showBudget = expenseData.map((budgets, index) => {
//     return(
//         <div key={index}>
//             <p >{budgets.budgetValue}</p>
//         </div>
        
//     )
// })


   // totalExpense = () => {
    //     let total = 0;
    //     if (this.expenseData.length > 0){
    //         total = this.expenseData.reduce(function(acc, curr) {
    //             acc += curr.expenseValue;
    //             return acc;
    //         }, 0)
    //     }
    //     this.setState({totalExpenses: total});
    //     return total;
    // }



//     addExpense = (expense) => {
//       let expenses = this.state.expenseData;
//       expenses.push(expense);
//       this.setState({expenseData: expenses});
//       let total = 0;
//       if (expenses.length > 0){
//               total = expenses.reduce(function(acc, curr) {
//                   acc += curr.expenseValue;
//                   return acc;
//               }, 0)
//           }
//           this.setState({totalExpenses: total});
//   }