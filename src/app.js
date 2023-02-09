import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Switch, Redirect } from "react-router-dom";
import Works from "./views/examples/HowitWorks";
import Index from "views/examples/LandingPage";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import ServicesPage from "views/examples/ServicesPage";
import IndexNavbar from "components/Navbars/IndexNavbar";
import SmartBorrowers from "views/examples/SmartBorrower";
import InfoPage from "views/examples/info";
import ContactPage from "views/examples/ContactPage";
export default function App() {
  return (
    <>
      <IndexNavbar />
      <Switch>
        <Route path="/" render={(props) => <Index {...props} />} />
        {/* <Route path="/" render={(props) => <LandingPage {...props} />} /> */}
        <Route
          path="/services"
          render={(props) => <ServicesPage {...props} />}
        />
        <Route
          path="/smart-borrower"
          render={(props) => <SmartBorrowers {...props} />}
        />
        <Route path="/contact" render={(props) => <ContactPage {...props} />} />
        <Route path="/info" render={(props) => <InfoPage {...props} />} />
        <Route
          path="/register"
          render={(props) => <RegisterPage {...props} />}
        />
        <Route path="/howitworks" render={(props) => <Works {...props} />} />
        {/* <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      /> */}
        <Redirect from="/" to="/" />
      </Switch>
    </>
  );
}
