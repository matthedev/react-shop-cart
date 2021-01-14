import React, {useState} from "react"
import {Route, Switch} from "react-router-dom"
import Header from "./Components/Header/Header"
import Home from "./Pages/Home/Home"
import Shop from "./Pages/Main/Shop"
import Footer from "./Components/Footer/Footer"
import Orders from "./Pages/Orders/Orders"
import {connect} from "react-redux"

function App({darkmode}) {

  return (
    <div className={darkmode ? "darkMode" : "whiteMode"}>
     <Header />
     <Switch>
       <Route path="/react-shop-cart" exact component={Home} />
       <Route path="/shop" exact component={Shop}/>
        <Route path="/orders" exact component={Orders}/>
       </Switch>
     <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
darkmode: state.toggler
}) 



export default connect(mapStateToProps)(App);
