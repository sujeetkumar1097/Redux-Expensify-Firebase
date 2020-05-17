import moment from 'moment'
import {setStartDate, setEndDate, setTextFilter,sortByAmount,sortByDate} from '../../actions/Filters'

test('test setStartDate', ()=> {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type:  'SET_START_DATE',
        startDate:moment(0)
    })
})
test('test setEndDate', ()=> {
    const action =setEndDate(moment(0))
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })
})
test('test setTextFilter', ()=> {
    const text ='some text'
    const action =setTextFilter(text)
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text
    })
})
test('test setTextFilter', ()=> {
    const action =setTextFilter()
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: ''
    })
})
test('test sortByAmount', ()=> {
    expect(sortByAmount()).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})
test('test sortByDate', ()=> {
    const action =
    expect(sortByDate()).toEqual({
        type:'SORT_BY_DATE'
    })
})
// test('test', ()=> {
//     const action =
//     expect(action).toEqual({
//         type:
//     })
// })