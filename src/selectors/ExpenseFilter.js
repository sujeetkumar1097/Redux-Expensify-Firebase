import moment from 'moment'
const ExpenseSelector = (expenses, {text,sortBy,startDate,endDate}) => {
     //console.log(expenses)
    return expenses.filter((expense) => {
        //console.log(expense.description)
        //console.log(text)
        //const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        //const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true
        const endDateMatch = endDate ? endDate.isSameOrBefore(createdAtMoment, 'day'): true
        const textMatch = expense.description ? (expense.description.toLowerCase().includes(text ? text.toLowerCase() : (''))) : ('');
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
   
}

export default ExpenseSelector