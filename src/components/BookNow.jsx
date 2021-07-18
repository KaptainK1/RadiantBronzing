import React from 'react';
// import 'boostrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

class BookNow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date()
        };
        this.onSubmitForm=this.onSubmitForm.bind(this);
        this.onDateChange=this.onDateChange.bind(this);
    }

    onSubmitForm(event){
        event.preventDefault();
        alert(this.state.selectedDate)
    }

    componentDidMount() {
        this.openDatepicker();
    }

    onDateChange(date){
        this.setState({
            selectedDate: date
        });
    }

    openDatepicker = () => this._calendar.setOpen(true);


    render(){
        return(
            <div className="calendarApp mt-5">
                <form onSubmit={this.onSubmitForm}>
                    <div className="input-group mb-3">
                        <DatePicker
                          className="form-control"
                          selected={this.state.selectedDate}
                          onChange={this.onDateChange}
                          minDate={new Date()}
                          name="selectedDate"
                          showTimeSelect
                          timeIntervals={30}
                          timeFormat="HH:mm"
                          timeCaption="time available"
                          dateFormat="MMMM d, yyyy h:mm aa"
                          minTime={new Date(0,0,0,7,30)}
                          maxTime={new Date(0,0,0,18,30)}
                          ref={(c) => this._calendar = c}

                        />
                        <button className="btn btn-outline-primary" id="button-addon2">Book Appointment!</button>
                    </div>
                </form>
            </div>
        );
    }

}

export default BookNow;