

import React from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Shop from "./components/Shop";
import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";
// import BookNow from "./components/BookNow";
import Contact from "./components/Contact";
import HorizontalRule from "./components/HorizontalRule";
import { Provider } from "./components/context";

class App extends React.Component {

    render() {
        return (
            <Provider value={{}}>
                <div className="App">
                    <Header/>
                    <MainNavbar/>
                    <About/>
                    <HorizontalRule/>
                    <Pricing/>
                    <HorizontalRule/>
                    <Shop/>
                    {/*<BookNow/>*/}
                    <Contact/>
                    <Footer/>
                </div>
            </Provider>
        );
    }
}

export default App;
