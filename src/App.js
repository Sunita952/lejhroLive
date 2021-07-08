//import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Home from './components/Home/Home';
import About from './components/About/About';
import Research from './components/InnovationLabs/Research';
import ProductDev from './components/InnovationLabs/ProductDev';
import Consulting from './components/Services/Consulting';
import Outsourcing from './components/Services/Outsourcing';
import { Switch, Route } from 'react-router-dom';
import Insights from './components/Insights/Insights';
import Footer from './Footer';
import ErrorPage from './ErrorPage';

const App = () => {
   return (
      <>
            <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/insights" component={Insights} />
               <Route path="/research" component={Research} />
               <Route path="/productdev" component={ProductDev} />
               <Route path="/consulting" component={Consulting} />
               <Route path="/outsourcing" component={Outsourcing} />
               <Route path="/about" component={About} />
               <Route path="*" component={ErrorPage} />
            </Switch>
            <Footer />
      </>
   );
}

export default App;

