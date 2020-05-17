const expensesReducerDefaultState = []

// export default (state =expensesReducerDefaultState, action) => {
//     switch (action.type) {
//         case 'ADD_EXPENSE':
//             return Object.assign(...state, [action.expense]);
//         case 'REMOVE_EXPENSE':
//             return state.filter(expense => expense.id != action.id);
//         case 'EDIT_EXPENSE':
//             return state.map(expense => {
//                 if(expense.id === action.id) {
//                      return Object.assign(...state, {...expense});
                    
//                 } else {
//                     return expense;
//                 }
//             });
//         default:
//             return state;
//     }
// }

export default (state =expensesReducerDefaultState, action) => {
    //console.log('INSIDE REDUCER', action)
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(expense => expense.id != action.id);
        case 'EDIT_EXPENSE':
           /* {
                const result = state.map(expense => {
                    const item = action.find(a => a.id ===expense.id)
                    return item ? item : expense
                })
                return result
            }*/
           // return state.map(expense => arr.find(o => o.id === expense.id) || expense)
            return state.map(expense => {
                if(expense.id === action.id) {
                    
                //     state.map(expense => action.find(o => o.id === expense.id) || expense)
                //     console.log('EDIT_EXPENSE', action)
                //     //a = action.updates
                //     //const currState =state.filter((a)=>a.id !== action.id)
                //     //const finalState =currState.push(action.updates)
                //    // return  action.updates
                     return {
                         ...expense,
                         ...action.updates
                     }
                } else {
                    return expense;
                }
            });
        case 'SET_EXPENSES':
            return action.expenses
        default:
            return state;
    }
}

//export default expensesReducer