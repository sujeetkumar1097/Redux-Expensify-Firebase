import moment from 'moment'
import filtersReducer from '../../reducers/Filters'

test('Initial filter values', () =>{
    const state = filtersReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('sort by Amount', () =>{
    // const currState = {
    //     text: '',
    //     sortBy: 'amount',
    //     startDate: undefined,
    //     endDate: undefined
    // }
    // const state = filtersReducer(currState, {type: 'SORT_BY_AMOUNT'})
     const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('sort by Date', () =>{
    const currState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const state = filtersReducer(currState, {type: 'SORT_BY_DATE'})
    expect(state.sortBy).toEqual('date')
})
test('sort by Text filter', () =>{
    const text = 'my text'
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducer(undefined, action)
    expect(state.text).toEqual(text)
})
test('filter by start Date', () =>{
    const startDate = moment(0)
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(startDate)
})
test('filter by end Date', () =>{
    const endDate = moment(0)
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(endDate)
})