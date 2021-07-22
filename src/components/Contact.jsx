import React from 'react';

class Contact extends React.Component {

    constructor(props){
    super(props);
        this.state= {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            message: '',
            isError: {

            }
        }

        //variables to hold the input objects which we can use to interact with
        this.textFirstNameInput = null;
        this.textLastNameInput = null;
        this.textPhoneInput = null;
        this.textEmailInput = null;
        this.textMessageInput = null;
        //this.erroredInputs = [];

        this.setFirstNameTextInputRef = element => {
            this.textFirstNameInput = element
        }

        this.setLastNameTextInputRef = element => {
            this.textLastNameInput = element
        }

        this.setPhoneTextInputRef = element => {
            this.textEmailInput = element
        }

        this.setEmailTextInputRef = element => {
            this.textPhoneInput = element
        }

        this.setMessageTextInputRef = element => {
            this.textMessageInput = element
        }

        this.setInputErrorColor = this.setInputErrorColor.bind(this);
        this.setInputFocus = this.setInputFocus.bind(this);
        // this.removeInputErrorColor = this.removeInputErrorColor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.formValidation = this.formValidation.bind(this);
    }

    setInputErrorColor(element) {
        element.classList.add("input-error");
    }

    setInputFocus(element) {
        element.focus();
    }

    // removeInputErrorColor(){
    //     for (let i = 0; i < this.erroredInputs.length; i++) {
    //         this.erroredInputs[i].focus();
    //         this.erroredInputs[i].classList.remove("input-error");
    //         console.log("removing input error class");
    //     }
    // }

    handleSubmit(event){

        event.preventDefault();

        let isValidated = this.formValidation();
        console.log(isValidated);
        if (!isValidated){
            //TODO if the form fails a validation check, we should be alerting the user as to what failed

        } else{
            alert('first name: ' + this.state.firstName + '\n'
                + 'last Name: ' + this.state.lastName + '\n'
                + 'phone number: ' + this.state.phone + '\n'
                + 'email: ' + this.state.email + '\n'
                + 'message: ' + this.state.message
            );
        }
    }

    formValidation(){

        if (this.state.firstName.length < 0 || this.state.firstName.length > 20) {
            this.setInputErrorColor(this.textFirstNameInput);
             //this.erroredInputs.push(this.textFirstNameInput);
            alert("Sorry, First name must be greater than 0 and less than 20 characters");
            this.setInputFocus(this.textFirstNameInput);
            //this.setInputFocus(this.textFirstNameInput);
            return false;
        }
    }

    handleFirstNameChange(event){
        this.setState({firstName: event.target.value});
        if (event.target.value.length < 0 || event.target.value.length > 20){
            if (!this.textFirstNameInput.classList.contains("input-error")){
                this.textFirstNameInput.classList.add("input-error");
            }
            console.log("added class, count is: " + this.state.firstName.length);
            console.log("removed class,event count is: " + event.target.value.length);
        } else {
            if (this.textFirstNameInput.classList.contains("input-error")){
                this.textFirstNameInput.classList.remove("input-error");
            }
            console.log("removed class, count is: " + this.state.firstName.length);
            console.log("removed class, event count is: " + event.target.value.length);
        }
        console.log("state value: " + this.state.firstName);
        console.log("event value: " + event.target.value);
    }

    handleLastNameChange(event){
        this.setState({lastName: event.target.value});
        console.log(this.state.lastName);
    }

    handlePhoneChange(event){
        this.setState({phone: event.target.value});
        console.log(this.state.phone);
    }

    handleEmailChange(event){
        this.setState({email: event.target.value});
        console.log(this.state.email);
    }

    handleMessageChange(event){
        this.setState({message: event.target.value});
        console.log(this.state.message);
    }

    render(){
        return(
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
                                       // ref={this.setPhoneTextInputRef}
                                       onChange={this.handlePhoneChange}/>
                                </div>
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail">
                                    Email:
                                </label>
                                <input id="inputEmail" placeholder="Email" className="form-control" required={true} type="email"
                                       value={this.state.email}
                                       // ref={this.setEmailTextInputRef}
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
                                <textarea id="inputMessage" placeholder="Your Message" className="form-control" required={true}
                                          // ref={this.setMessageTextInputRef}
                                          value={this.state.message}
                                          onChange={this.handleMessageChange}/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your personal information with anyone
                                    else.</small>
                            </div>
                            {/*Empty div with a small column to center the message field*/}
                            <div className="form-group col-md-2">

                            </div>
                        </div>

                        <input type="submit" value="Submit" />
                    {/*</div>*/}
                </form>
            </div>
        );
    }
}

export default Contact;