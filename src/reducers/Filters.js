import moment from 'moment'

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

// export default (state = filtersReducerDefaultState, action) => {
//     //console.log('INSIDE FILTER = >', action)
//     switch (action.type) {
//         case 'SET_TEXT_FILTER':
//             return Object.assign(...state, {text: action.text});
            
//         case 'SORT_BY_AMOUNT':
//             return Object.assign(...state, {sortBy: 'amount'});
           
//         case 'SORT_BY_DATE':
//             return Object.assign(...state, {sortBy: 'date'});
           
//         case 'SET_START_DATE':
//             console.log('INSIDE FILTER startDate = >', action.startDate)
//             return Object.assign(...state, {startDate: action.startDate});
           
//         case 'SET_END_DATE':
//             return Object.assign(...state, {endDate: action.endDate});
            
//         default:
//             return state
//     }
// }

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                 text: action.text
            };   
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };   
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };  
        case 'SET_START_DATE':
            return {
                 ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
               endDate: action.endDate
           };  
        default:
            return state
    }
}