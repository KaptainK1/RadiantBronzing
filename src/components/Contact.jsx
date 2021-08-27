import React from 'react';
import DatePicker from "react-datepicker";
import ErrorModal from "./ErrorModal";

class Contact extends React.Component {

    constructor(props){
    super(props);
        this.state= {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            message: '',
            selectedDate: new Date(),
            isAppointment: false,
            errorMessage: undefined
        }


        //variables to hold the input objects which we can use to interact with
        this.textFirstNameInput = null;
        this.textLastNameInput = null;
        this.textPhoneInput = null;
        this.textEmailInput = null;
        this.textMessageInput = null;

        this.setFirstNameTextInputRef = element => {
            this.textFirstNameInput = element
        }

        this.setLastNameTextInputRef = element => {
            this.textLastNameInput = element
        }

        this.setPhoneTextInputRef = element => {
            this.textPhoneInput = element
        }

        this.setEmailTextInputRef = element => {
            this.textEmailInput = element
        }

        this.setMessageTextInputRef = element => {
            this.textMessageInput = element
        }

        this.setInputErrorColor = this.setInputErrorColor.bind(this);
        this.setInputFocus = this.setInputFocus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.formValidation = this.formValidation.bind(this);
        this.checkInput = this.checkInput.bind(this);
        this.onDateChange=this.onDateChange.bind(this);
        this.errorHandler = this.errorHandler.bind(this);
    }

    setInputErrorColor(element) {
        element.classList.add("input-error");
    }

    setInputFocus(element) {
        element.focus();
    }

    handleSubmit(event){

        event.preventDefault();

        if (this.state.isAppointment === true){
            alert("Appointment Confirmed!");
        }

        let isValidated = this.formValidation();
        console.log(isValidated);
        if (!isValidated){
            //TODO if the form fails a validation check, we should be alerting the user as to what failed

        } else{
            // alert('first name: ' + this.state.firstName + '\n'
            //     + 'last Name: ' + this.state.lastName + '\n'
            //     + 'phone number: ' + this.state.phone + '\n'
            //     + 'email: ' + this.state.email + '\n'
            //     + 'message: ' + this.state.message
            // );
        }
    }

    formValidation(){
        let inputs = [{
            inputField: this.textFirstNameInput, minLength:0, maxLength:20
        }, {
            inputField: this.textLastNameInput, minLength:0, maxLength:20
        }, {
            inputField: this.textPhoneInput,
            minLength:0,
            maxLength:11
        }, {
            inputField: this.textEmailInput, minLength:0, maxLength:50
        }, {
            inputField: this.textMessageInput, minLength:0, maxLength:255
        }];
        // let isError = true;
        inputs.forEach(element => {
            console.log(element);
                if (!this.checkValueIsInRange(element.inputField.value.length, element.minLength, element.maxLength)) {
                    this.setInputErrorColor(element.inputField);
                    // alert("Sorry, there was an error with " + element.inputField.placeholder + " please check the data and try again");
                    this.setState( {
                           errorMessage: "Sorry, there was an error with " + element.inputField.placeholder + " please check the data and try again"
                    });
                    this.setInputFocus(element.inputField);
                    return false;
                }
            }
        );
        return true;
    }

    handleFirstNameChange(event){
        this.setState({firstName: event.target.value});
        this.checkInput(event, this.textFirstNameInput, 0, 20);
    }

    //method to check a users input to see if its in the appropriate range
    //if not, flag teh input field as red by adding the input-error class
    //then return the text input object (should be an input field)
    checkInput(event, textInput, minValue, maxValue){
        if (!this.checkValueIsInRange(event.target.value.length,minValue,maxValue)){
            if (!textInput.classList.contains("input-error")){
                textInput.classList.add("input-error");
            }
        } else {
            if (textInput.classList.contains("input-error")){
                textInput.classList.remove("input-error");
            }
        }
    }

    checkValueIsInRange(value, minValue, maxValue){
        if (value < minValue || value > maxValue){
            return false;
        }
        return true;
    }

    handleLastNameChange(event){
        this.setState({lastName: event.target.value});
        this.checkInput(event, this.textLastNameInput, 0, 20);
        console.log(this.state.lastName);
    }

    handlePhoneChange(event){
        this.setState({phone: event.target.value});
        this.checkInput(event, this.textPhoneInput, 0, 11);
        console.log(this.state.phone);
    }

    handleEmailChange(event){
        this.setState({email: event.target.value});
        this.checkInput(event, this.textEmailInput, 0, 50);
        console.log(this.state.email);
    }

    handleMessageChange(event){
        this.setState({message: event.target.value});
        this.checkInput(event, this.textMessageInput, 0, 255);
        console.log(this.state.message);
    }

    onDateChange(date){
        this.setState({
            selectedDate: date
        });
    }

    //function to clear the error state
    errorHandler() {
        this.setState({
           errorMessage: null
        });
    };

    render(){
        return(

            <div>
                {/*display the error modal if there has been an error*/}
                {this.state.errorMessage && (
                    <ErrorModal
                        title="Error!"
                        message={this.state.errorMessage}
                        onConfirm={this.errorHandler}
                    />
                 )}
                <div className="container-fluid">
                    <h1 id="contactSection">Contact Us!</h1>

                    <form onSubmit={this.handleSubmit} method="post">
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputFirstName">
                                    First Name:
                                </label>
                                <input id="inputFirstName" placeholder="First Name" className="form-control" required={true} type="text"
                                       value={this.state.firstName}
                                       ref={this.setFirstNameTextInputRef}
                                       onChange={this.handleFirstNameChange}
                                        // onBlur={this.removeInputErrorColor}
                                />
                            </div>


                            <div className="form-group col-md-6">
                                <label htmlFor="inputLastName">
                                    Last Name:
                                </label>
                                <input id="inputLastName" placeholder="Last Name" className="form-control" type="text"
                                       value={this.state.lastName}
                                       ref={this.setLastNameTextInputRef}
                                       onChange={this.handleLastNameChange}/>
                            </div>
                        </div>

                            <div className="row">
                                <div className="form-group col-md-6 ">
                                    <label htmlFor="inputPhone">
                                        Phone Number:
                                    </label>
                                    <div className="trouble">
                                    <input id="inputPhone" placeholder="Phone Number" className="form-control" type="tel"
                                           value={this.state.phone}
                                           ref={this.setPhoneTextInputRef}
                                           onChange={this.handlePhoneChange}/>
                                    </div>
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail">
                                        Email:
                                    </label>
                                    <input id="inputEmail" placeholder="Email" className="form-control" required={true} type="email"
                                           value={this.state.email}
                                           ref={this.setEmailTextInputRef}
                                           onChange={this.handleEmailChange}/>
                                </div>
                            </div>

                            <div className="row">
                                {/*Empty div with a small column to center the message field*/}
                                <div className="form-group col-md-2">

                                </div>
                                <div className="form-group col-md-8">
                                    <label htmlFor="inputMessage">
                                        Message:
                                    </label>
                                    <textarea id="inputMessage" placeholder="Message" className="form-control"
                                              // ref={this.setMessageTextInputRef}
                                              value={this.state.message}
                                              ref={this.setMessageTextInputRef}
                                              onChange={this.handleMessageChange}/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your personal information with anyone
                                        else.</small>
                                </div>
                                {/*Empty div with a small column to center the message field*/}
                                <div className="form-group col-md-2">

                                </div>
                            </div>


                            <input className="btn btn-lg btn-outline-primary"
                                   onClick={this.handleSubmit}
                                   type="submit" value="Contact Us!" />

                        <div className="input-group mb-3">
                            <DatePicker
                                className="form-control calendar-form"
                                selected={this.state.selectedDate}
                                onChange={this.onDateChange}
                                minDate={new Date()}
                                name="selectedDate"
                                showTimeSelect
                                timeIntervals={30}
                                timeFormat="HH:mm"
                                timeCaption="Time"
                                dateFormat="MMMM d, yyyy h:mm aa"
                                // by setting the min and max time, we can limit the hours
                                minTime={new Date(0,0,0,7,30)}
                                maxTime={new Date(0,0,0,18,30)}
                                ref={(c) => this._calendar = c}
                            />
                        </div>

                            <input className="btn btn-lg btn-outline-primary"
                                   // onClick={ this.setState({isAppointment: true})}
                                   type="submit" value="Book Appointment!" />
                        {/*</div>*/}
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;