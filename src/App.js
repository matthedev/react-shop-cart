import React from "react"
import {Route, Switch} from "react-router-dom"
import Header from "./Components/Header/Header"
import Home from "./Pages/Home/Home"
import Shop from "./Pages/Main/Shop"
import Footer from "./Components/Footer/Footer"
import Orders from "./Pages/Orders/Orders"

function App() {

  return (
    <div >
     <Header />
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/shop" exact component={Shop}/>
        <Route path="/orders" exact component={Orders}/>
       </Switch>
     <Footer />
    </div>
  );
}

export default App;
