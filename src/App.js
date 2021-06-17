import Navbar from "./Navbar/Navbar";
import Login from "./Screens/Login/LoginScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Screens/Register/Register";
import Home from "./Screens/Home/Home";
import Footer from "./Footer/Footer";
import MyTicket from "./Screens/MyTicket/MyTicket";
import BookingScreen from "./Screens/BookingScreen/BookingScreen";
import BookingSuccess from "./Screens/BookingScreen/BookingSuccess";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact={true} path="/" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/Home" component={Home} />
        <Route path="/MyTicket" component={MyTicket} />
        <Route path="/Booking" component={BookingScreen} />
        <Route path="/BookingSuccess" component={BookingSuccess} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
