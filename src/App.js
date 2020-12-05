import React from "react"
import {Route, Switch} from "react-router"
import Header from "./Components/Header/Header"
import MainPage from "./Pages/Main/MainPage"
import Footer from "./Components/Footer/Footer"
import Orders from "./Pages/Orders/Orders"

function App() {

  return (
    <div >
     <Header />
     <Switch>
       <Route path="/" exact component={MainPage}/>
        <Route path="/orders" exact component={Orders}/>
       </Switch>
     <Footer />
    </div>
  );
}

export default App;
