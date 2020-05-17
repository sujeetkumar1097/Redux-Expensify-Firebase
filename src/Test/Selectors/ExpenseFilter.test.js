import moment from 'moment'
import expenseFilter from '../../selectors/ExpenseFilter'
import expenses from '../Fixtures/Expenses'

test('filter by text val', () => {
    const filter= {
        text:'e',
        sortBy: 'date',
        startDate:undefined,
        endDate:undefined
    }
    const result = expenseFilter(expenses,filter)
    expect(result).toEqual([expenses[2], expenses[1]])
})
test('filter by start Date', () => {
    const filter= {
        text:'',
        sortBy: 'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result = expenseFilter(expenses,filter)
    expect(result).toEqual([expenses[2], expenses[0]])
})
// test('filter by End Date', () => {
//     const filter= {
//         text:'',
//         sortBy: 'date',
//         startDate:undefined,
//         endDate:moment(0).add(2, 'days')
//     }
//     const result = expenseFilter(expenses,filter)
//     expect(result).toEqual([expenses[0], expenses[1]])
// })
test('filter by  Date', () => {
    const filter= {
        text:'',
        sortBy: 'date',
        startDate:undefined,
        endDate:undefined
    }
    const result = expenseFilter(expenses,filter)
    expect(result).toEqual([expenses[2], expenses[0],expenses[1]])
})

test('filter by Amount', () => {
    const filter= {
        text:'',
        sortBy: 'amount',
        startDate:undefined,
        endDate:undefined
    }
    const result = expenseFilter(expenses,filter)
    expect(result).toEqual([expenses[1],expenses[2], expenses[0]])
})