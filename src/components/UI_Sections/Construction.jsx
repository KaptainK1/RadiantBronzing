import React, {Component} from 'react';


class Construction extends Component {

    state = {
        data: null
    };

     componentDidMount() {
        this.callBackendAPI()
            .then(res => this.setState({ data: res.express }))
            .catch(err => console.log(err));
    }
    // fetching the GET route from the Express server which matches the GET route from server.js
     callBackendAPI = async () => {
        const response = await fetch('/test');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

     render() {
         return (
             <React.Fragment>
                 <h1>This Website is still under construction</h1>
                 <h2>Be sure to check out my Facebook here!</h2>
                 <a href="https://www.facebook.com/Radiantbronzingboutique/">Radiant Bronzing Boutique LLC</a>
             </React.Fragment>
         );
     }
}


export default Construction;