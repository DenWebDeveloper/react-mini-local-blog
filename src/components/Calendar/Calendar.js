import React, {Component} from 'react';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import App from "../index";
// import Input from 'CalendarInput';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.onDayClick = this.onDayClick.bind(this);
        this.state = {
            selectedDay: undefined,
        };
    }
    onDayClick(day, { selected }) {
        if (selected) {
            // Unselect the day if already selected
            this.setState({ selectedDay: undefined });
            return;
        }
        this.setState({ selectedDay: day });
    }
    render() {
        return (
            <div>
                <DayPicker
                    onDayClick={this.onDayClick}
                    selectedDays={this.state.selectedDay}
                />
                {this.state.selectedDay ? (<p>You clicked {this.state.selectedDay.toLocaleDateString()}{this.props.filterArticles(this.state.selectedDay.toLocaleDateString())}</p>) : (
                    <p>Please select a day.</p>
                )}
            </div>
        );
    }
}

export default Calendar;