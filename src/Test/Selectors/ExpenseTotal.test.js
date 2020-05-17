import SelectExpenseTotal from '../../selectors/ExpenseTotal'
import expenses from '../Fixtures/Expenses'

test('return 0 if no expense', () => {
    const res = SelectExpenseTotal([])
    expect(res).toBe(0)
})

test('return expense for single expense', () => {
    const res = SelectExpenseTotal([expenses[0]])
    expect(res).toBe(195)
})

test('return expense for multiple expense', () => {
    const res = SelectExpenseTotal(expenses)
    expect(res).toBe(114195)
})