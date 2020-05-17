import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'

export default class ExpenseForm extends React.Component {
    // state = {
    //     description: '',
    //     note: '',
    //     amount: '',
    //     createdAt: moment(),
    //     calenderFocused: false,
    //     error: ''
    // }
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ?  props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount /100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        }
    }
    handleDescription = (e) => {
        const description = e.target.value  
        this.setState(() => ({description}))
    }
    handleAmount = (e) => {
        const amount = e.target.value
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))
        }
    }
    handleNote = (e) => {
        // e.persist();
        // this.setState(() => ({note: e.target.value}))
        const note = e.target.value
        this.setState(() => ({note}))
    }
    onDateChange = (date) => {
        if(date) {
            this.setState(() => ({createdAt: date}))
        }
    }
    onFocusChange= ({focused}) => {
        this.setState(() => ({calenderFocused: focused}))
    }
    handleSubmit = (e) => {
        e.preventDefault()

        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({error: 'Please provide Description and Amount'}))
        } else {
            this.setState(() => ({error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10)*100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
                <form className="form" onSubmit={this.handleSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input className="text-input" type='text' placeholder='Desc.' 
                            value={this.state.description}
                            onChange={this.handleDescription}/>
                    <input className="text-input" type='text' placeholder='Amt.' 
                            value={this.state.amount}
                            onChange={this.handleAmount}/>
                    <textarea className="textarea" placeholder='Add Note' 
                            value={this.state.note}
                            onChange={this.handleNote}/>
                    <SingleDatePicker
                        date = {this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused = {this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}

                    />
                    <div>
                        <button className="button">ADD EXPENSE</button>
                    </div>
                </form>
        )
    }
}