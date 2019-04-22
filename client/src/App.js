import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
          <Route exact path="/" component={Main} />
      </div>
    </Router>
  );
}

export default App;
