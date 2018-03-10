import React, {Component} from 'react';
import {connect} from 'react-redux';

import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            from: null,
            to: null,
            enteredTo: null, // Keep track of the last day for mouseEnter.
        };
    }

    isSelectingFirstDay(from, to, day) {
        const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
        const isRangeSelected = from && to;
        return !from || isBeforeFirstDay || isRangeSelected;
    }

    handleDayClick(day) {
        const {from, to} = this.state;
        if (from && to && day >= from && day <= to) {
            this.handleResetClick();
            return;
        }
        if (this.isSelectingFirstDay(from, to, day)) {
            const date = {
                from: day,
                to: null,
                enteredTo: null,
            };
            this.setState(date);
            this.updateFluxDate(date)
        } else {
            const date = {
                to: day,
                enteredTo: day,
            };
            this.setState(date);
            this.updateFluxDate(date)
        }
    }

    updateFluxDate(date) {
        this.props.dispatch({
            type: 'ADD_SELECTED_DATE',
            date
        })
    }


    handleDayMouseEnter(day) {
        const {from, to} = this.state;
        if (!this.isSelectingFirstDay(from, to, day)) {
            this.setState({
                enteredTo: day,
            });
        }
    }

    handleResetClick() {
        this.setState(this.getInitialState());
        this.updateFluxDate(this.getInitialState());
    }

    render() {
        const {from, to, enteredTo} = this.state;
        const modifiers = {start: from, end: enteredTo};
        const disabledDays = {before: this.state.from};
        const selectedDays = [from, {from, to: enteredTo}];
        return (
            <div className='calendar'>
                <DayPicker
                    showWeekNumbers
                    numberOfMonths={5}
                    className="Range"
                    fromMonth={from}
                    selectedDays={selectedDays}
                    disabledDays={disabledDays}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                    onDayMouseEnter={this.handleDayMouseEnter}
                />
                <div className='selected-date'>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                    {from &&
                    to && (
                        <button className="link" onClick={this.handleResetClick}>
                            Reset
                        </button>
                    )}
                </div>
            </div>
        );
    }
}


export default connect(
    dispatch => ({
        dispatch
    })
)(Calendar);