

import React from 'react';
import Header from "./components/UI_Sections/Header";
import About from "./components/UI_Sections/About";
import Pricing from "./components/UI_Sections/Pricing";
import Shop from "./components/UI_Sections/Shop";
import MainNavbar from "./components/UI_Sections/MainNavbar";
import Footer from "./components/UI_Sections/Footer";
// import BookNow from "./components/BookNow";
import Contact from "./components/UI_Sections/Contact";
import HorizontalRule from "./components/UI_Components/HorizontalRule";
import { Provider } from "./components/context";

class App extends React.Component {

    render() {
        return (
            <Provider value={{}}>
                <div className="App">
                    <Header/>
                    <MainNavbar />
                    <About />
                    <HorizontalRule/>
                    <Pricing/>
                    <HorizontalRule/>
                    <Shop/>
                    <Contact/>
                    <Footer/>
                </div>
            </Provider>
        );
    }
}

export default App;
