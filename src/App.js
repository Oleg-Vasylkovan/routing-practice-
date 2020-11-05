import {Router,link} from '@reach/router';
import './App.css';
import WelcomePage from "./Components/WelcomePage";
import NumberPage from "./Components/NumberPage";
import WordWithColor from "./Components/WordWithColor";

function App() {
  return (
    <div className="App">
      <Router>
        <WelcomePage path = "/home"/>
        <NumberPage path = "/:number"/>
        <WordWithColor path = "/:word/:color/:bgc" />
      </Router>  
    </div>
  );
}

export default App;
