// import { Fragment } from "react"
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Import components 
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Content from "./Components/Content/Content";
import About_us from "./Components/About-us/about-us";
import SinglePage from "./Components/SinglePage/singlePage";

//REDUX store
import store from "./store";
import { Provider } from "react-redux";


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends Component {
  render() {
    return(      
      <Provider store={store}>
        <Router>
          <Header />
            <Switch>
              <Route path="/" exact component={Content} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/about-us" exact component={About_us} />
              <Route path="/single-page" exact component={SinglePage} />
              {/* <Route component={Page404} />                */}
              {/* <Route path="/" exact /> */}
            </Switch> 
          <Footer />
        </Router>
      </Provider>
    )  }}
// ReactDOM.render(<App />, document.getElementById("root"));


export default App;
