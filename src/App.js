import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Socials from "./Components/Socials/Socials";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Socials/>
        <Switch>
            <Route path="/contacto" component={Contact} exact/>
            <Route path="/" component={Main}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
